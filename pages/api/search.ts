import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const queryParams = {
    academicYear: req.query?.academicYear as string,
    semester: req.query?.semester as string,
    dayOfWeek: req.query?.dayOfWeek as string,
    period: req.query?.period as string,
    subjectName: req.query?.subjectName as string,
    classNumber: req.query?.classNumber as string,
    credits: req.query?.credits as string,
    id: req.query?.id as unknown as number,
    instructor: req.query?.instructor as string,
    url: req.query?.url as string,
    category: req.query?.category as string,
    facultyCode: req.query?.facultyCode as string,
  };

  const result = await prisma.classInfo.findMany({
    where: {
      ...queryParams,
    },
  });
  console.log(queryParams);
  res.json(result);
}
