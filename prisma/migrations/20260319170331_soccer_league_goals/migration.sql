/*
  Warnings:

  - You are about to drop the column `soccerLeagueId` on the `Goal` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Goal" DROP CONSTRAINT "Goal_soccerLeagueId_fkey";

-- AlterTable
ALTER TABLE "Goal" DROP COLUMN "soccerLeagueId";
