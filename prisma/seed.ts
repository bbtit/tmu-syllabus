import { PrismaClient } from '@prisma/client';
import { class2023 } from '../data/class2023Data';

const prisma = new PrismaClient({ log: ['query'] });

async function main() {
  const classes = class2023;

  await Promise.all(
    classes.map(async (value) => {
      await prisma.classInfo.create({
        data: value,
      });
    })
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
