import type { NextPage } from 'next';
import SampleForm from '../components/SampleForm';
import { useState } from 'react';
import Card from '../components/Card';

type ClassInfo = {
  academicYear: string;
  semester: string;
  dayOfWeek: string;
  period: string;
  subjectName: string;
  classNumber: string;
  credits: string;
  id: number;
  instructor: string;
  url: string;
  category: string;
  facultyCode: string;
};

const Home: NextPage = () => {
  const [classInfo, setClassInfo] = useState<ClassInfo[]>([]);
  return (
    <>
      <SampleForm func={setClassInfo} />

      <div className='mb-5' />

      <div className='flex flex-wrap justify-center gap-10'>
        {classInfo.map((classInfo) => {
          return <Card key={classInfo.id} classInfo={classInfo} />;
        })}
      </div>
    </>
  );
};

export default Home;
