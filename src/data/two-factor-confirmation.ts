import { db } from "@/lib/db";

export async function getTwoFactorConfirmationbyUserId(userId: string) {
  try {
    const twoFactorConfirmation = await db.twoFactorConfirmation.findUnique({
      where: {
        userId,
      },
    });
    return twoFactorConfirmation;
  } catch {
    return null;
  }
}
