"use server";

import * as z from "zod";
import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import {
  generateTwoFactorToken,
  generateVerificationToken,
} from "@/lib/tokens";
import { getUserByEmail } from "@/data/user";
import { sendVerificationEmail, sendTwoFactorEmail } from "@/lib/mail";
import { getTwoFactorTokenbyEmail } from "@/data/two-factor-token";
import { db } from "@/lib/db";
import { getTwoFactorConfirmationbyUserId } from "@/data/two-factor-confirmation";

interface LoginProps {
  values: z.infer<typeof LoginSchema>;
  callbackUrl?: string | null;
}

export const login = async ({ values, callbackUrl }: LoginProps) => {
  const validateFields = LoginSchema.safeParse(values);
  console.log({ validateFields });
  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }
  const { email, password, code } = validateFields.data;

  const exisingUser = await getUserByEmail(email);

  if (!exisingUser || !exisingUser.email || !exisingUser.password) {
    return { error: "Email or password is incorrect" };
  }

  if (!exisingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      exisingUser.email
    );
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );
    return { success: "Verification email sent!" };
  }

  if (exisingUser.isTwoFactorEnabled && exisingUser.email) {
    if (code) {
      const twoFactorToken = await getTwoFactorTokenbyEmail(exisingUser.email);
      if (!twoFactorToken) {
        return { error: "Invalid code" };
      }
      if (twoFactorToken.token !== code) {
        return { error: "Invalid code" };
      }

      const hasExpired = new Date(twoFactorToken.expires) < new Date();

      if (hasExpired) {
        return { error: "Code expired" };
      }

      await db.twoFactorToken.delete({
        where: { id: twoFactorToken.id },
      });

      const exitingConfirmation = await getTwoFactorConfirmationbyUserId(
        exisingUser.id
      );

      if (exitingConfirmation) {
        await db.twoFactorConfirmation.delete({
          where: { id: exitingConfirmation.id },
        });
      }

      await db.twoFactorConfirmation.create({
        data: {
          userId: exisingUser.id,
        },
      });
    } else {
      const twoFactorToken = await generateTwoFactorToken(exisingUser.email);
      // console.log({ twoFactorToken });
      await sendTwoFactorEmail(twoFactorToken.email, twoFactorToken.token);
      return { twoFactor: true };
    }
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      redirectTo: callbackUrl ?? DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid email or password" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }
};
