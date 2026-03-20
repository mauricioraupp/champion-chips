/*
  Warnings:

  - The primary key for the `SoccerLeague` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Goal" DROP CONSTRAINT "Goal_soccerLeagueId_fkey";

-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_soccerLeagueId_fkey";

-- DropForeignKey
ALTER TABLE "TeamsSoccerLeague" DROP CONSTRAINT "TeamsSoccerLeague_soccerLeagueId_fkey";

-- AlterTable
ALTER TABLE "Goal" ALTER COLUMN "soccerLeagueId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Match" ALTER COLUMN "soccerLeagueId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "SoccerLeague" DROP CONSTRAINT "SoccerLeague_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "SoccerLeague_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "SoccerLeague_id_seq";

-- AlterTable
ALTER TABLE "TeamsSoccerLeague" ALTER COLUMN "soccerLeagueId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "TeamsSoccerLeague" ADD CONSTRAINT "TeamsSoccerLeague_soccerLeagueId_fkey" FOREIGN KEY ("soccerLeagueId") REFERENCES "SoccerLeague"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_soccerLeagueId_fkey" FOREIGN KEY ("soccerLeagueId") REFERENCES "SoccerLeague"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_soccerLeagueId_fkey" FOREIGN KEY ("soccerLeagueId") REFERENCES "SoccerLeague"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
