-- CreateTable
CREATE TABLE "FavoriteLeague" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "leagueId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FavoriteLeague_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FavoriteLeague_userId_leagueId_key" ON "FavoriteLeague"("userId", "leagueId");

-- AddForeignKey
ALTER TABLE "FavoriteLeague" ADD CONSTRAINT "FavoriteLeague_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteLeague" ADD CONSTRAINT "FavoriteLeague_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "SoccerLeague"("id") ON DELETE CASCADE ON UPDATE CASCADE;
