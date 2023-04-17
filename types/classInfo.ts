import { z } from 'zod';

const classInfo = z.object({
  id: z.number(),
  academicYear: z.string(),
  semester: z.string(),
  dayOfWeek: z.string(),
  period: z.string(),
  instructor: z.string().optional(),
  subjectName: z.string(),
  classNumber: z.string(),
  credits: z.string(),
  url: z.string().optional(),
  category: z.string().optional(),
  facultyCode: z.string().optional(),
});

export type ClassInfo = z.infer<typeof classInfo>;
