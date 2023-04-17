import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = Array.isArray(req.query) ? req.query[0] : req.query;

  if (Array.isArray(slug)) {
    const result = await prisma.classInfo
      .findMany({
        where: {
          academicYear: slug[0],
          classNumber: slug[1],
        },
      })
      .catch((err) => {
        console.log(err);
        return { error: 'Failed to read user' };
      });
    res.json(result);
  } else {
    const result = prisma.classInfo
      .findMany({
        where: {
          academicYear: slug,
        },
      })
      .catch((err) => {
        console.log(err);
        return { error: 'Failed to read user' };
      });
    res.json(result);
  }
}
