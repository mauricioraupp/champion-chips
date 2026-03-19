/*
  Warnings:

  - Added the required column `soccerLeagueId` to the `Goal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Goal" ADD COLUMN     "soccerLeagueId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_soccerLeagueId_fkey" FOREIGN KEY ("soccerLeagueId") REFERENCES "SoccerLeague"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
