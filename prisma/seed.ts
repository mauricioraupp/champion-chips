import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'admin@champion.com',
      name: 'Admin',
      password: 'password',
    },
  });

  const league = await prisma.soccerLeague.create({
    data: {
      name: 'Campeonato Nacional',
      stage: 1,
      userId: user.id,
    },
  });

  const team = await prisma.teamsSoccerLeague.create({
    data: {
      name: 'Time Azul',
      abr: 'TAZ',
      logo: 'https://exemplo.com/logo-taz.png',
      soccerLeagueId: league.id,
    },
  });

  await prisma.players.createMany({
    data: [
      {
        name: 'João Silva',
        age: 24,
        position: 'Atacante',
        picture: 'https://exemplo.com/joao.png',
        teamId: team.id,
      },
      {
        name: 'Carlos Mendes',
        age: 28,
        position: 'Goleiro',
        picture: 'https://exemplo.com/carlos.png',
        teamId: team.id,
      },
    ],
  });
}

main()
  .then(() => console.log('Seed finalizado com sucesso!'))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
