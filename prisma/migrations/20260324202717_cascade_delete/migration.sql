-- DropForeignKey
ALTER TABLE "Goal" DROP CONSTRAINT "Goal_matchId_fkey";

-- DropForeignKey
ALTER TABLE "Goal" DROP CONSTRAINT "Goal_playerId_fkey";

-- DropForeignKey
ALTER TABLE "Goal" DROP CONSTRAINT "Goal_soccerLeagueId_fkey";

-- DropForeignKey
ALTER TABLE "Goal" DROP CONSTRAINT "Goal_teamId_fkey";

-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_awayTeamId_fkey";

-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_homeTeamId_fkey";

-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_soccerLeagueId_fkey";

-- DropForeignKey
ALTER TABLE "Players" DROP CONSTRAINT "Players_teamId_fkey";

-- DropForeignKey
ALTER TABLE "Players" DROP CONSTRAINT "Players_userId_fkey";

-- DropForeignKey
ALTER TABLE "SoccerLeague" DROP CONSTRAINT "SoccerLeague_userId_fkey";

-- DropForeignKey
ALTER TABLE "TeamsSoccerLeague" DROP CONSTRAINT "TeamsSoccerLeague_soccerLeagueId_fkey";

-- DropForeignKey
ALTER TABLE "TeamsSoccerLeague" DROP CONSTRAINT "TeamsSoccerLeague_userId_fkey";

-- AddForeignKey
ALTER TABLE "SoccerLeague" ADD CONSTRAINT "SoccerLeague_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamsSoccerLeague" ADD CONSTRAINT "TeamsSoccerLeague_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamsSoccerLeague" ADD CONSTRAINT "TeamsSoccerLeague_soccerLeagueId_fkey" FOREIGN KEY ("soccerLeagueId") REFERENCES "SoccerLeague"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Players" ADD CONSTRAINT "Players_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Players" ADD CONSTRAINT "Players_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "TeamsSoccerLeague"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_soccerLeagueId_fkey" FOREIGN KEY ("soccerLeagueId") REFERENCES "SoccerLeague"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_homeTeamId_fkey" FOREIGN KEY ("homeTeamId") REFERENCES "TeamsSoccerLeague"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_awayTeamId_fkey" FOREIGN KEY ("awayTeamId") REFERENCES "TeamsSoccerLeague"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Players"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "TeamsSoccerLeague"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_soccerLeagueId_fkey" FOREIGN KEY ("soccerLeagueId") REFERENCES "SoccerLeague"("id") ON DELETE CASCADE ON UPDATE CASCADE;
