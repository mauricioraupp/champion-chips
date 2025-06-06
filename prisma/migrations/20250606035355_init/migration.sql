-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SoccerLeague" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "name" TEXT NOT NULL,
    "stage" INTEGER NOT NULL,

    CONSTRAINT "SoccerLeague_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamsSoccerLeague" (
    "id" SERIAL NOT NULL,
    "soccerLeagueId" INTEGER,
    "name" TEXT NOT NULL,
    "abr" VARCHAR(3) NOT NULL,
    "logo" TEXT,
    "points" INTEGER NOT NULL DEFAULT 0,
    "playedMatches" INTEGER NOT NULL DEFAULT 0,
    "wins" INTEGER NOT NULL DEFAULT 0,
    "draws" INTEGER NOT NULL DEFAULT 0,
    "losses" INTEGER NOT NULL DEFAULT 0,
    "goalsScored" INTEGER NOT NULL DEFAULT 0,
    "goalsConceded" INTEGER NOT NULL DEFAULT 0,
    "goalsDiff" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "TeamsSoccerLeague_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Players" (
    "id" SERIAL NOT NULL,
    "teamId" INTEGER,
    "name" TEXT NOT NULL,
    "age" INTEGER,
    "position" TEXT,
    "picture" TEXT,
    "goals" INTEGER NOT NULL DEFAULT 0,
    "assists" INTEGER NOT NULL DEFAULT 0,
    "cleanSheets" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Players_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "SoccerLeague" ADD CONSTRAINT "SoccerLeague_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamsSoccerLeague" ADD CONSTRAINT "TeamsSoccerLeague_soccerLeagueId_fkey" FOREIGN KEY ("soccerLeagueId") REFERENCES "SoccerLeague"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Players" ADD CONSTRAINT "Players_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "TeamsSoccerLeague"("id") ON DELETE SET NULL ON UPDATE CASCADE;
