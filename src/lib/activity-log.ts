import { prisma } from "./prisma";

export async function logActivity(
  userId: string, 
  action: string, 
  targetName: string, 
  type: "CREATE" | "UPDATE" | "DELETE" | "MATCH"
) {
  return await prisma.activity.create({
    data: {
      userId,
      action,
      targetName,
      type,
    },
  });
}