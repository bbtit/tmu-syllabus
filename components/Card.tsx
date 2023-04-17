type Props = {
  classInfo: {
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
};

export default function Card(props: Props) {
  return (
    <div className='w-80 bg-indigo-100 rounded-lg p-3'>
      <div className='flex justify-between'>
        <div className='w-1/2 text-center'>{props.classInfo.classNumber}</div>
        <div className='w-1/2 text-center'>{props.classInfo.academicYear}</div>
      </div>
      <div className='text-center break-words'>
        {props.classInfo.subjectName}
      </div>
      <div className='text-center break-words'>
        {props.classInfo.instructor}
      </div>
      <div className='flex flex-wrap'>
        <div className='w-1/2 text-center break-words'>
          {props.classInfo.semester}
        </div>
        <div className='w-1/2 text-center break-words'>
          {props.classInfo.period}
        </div>
        <div className='w-1/2 text-center break-words'>
          {props.classInfo.dayOfWeek}
        </div>
        <div className='w-1/2 text-center break-words'>
          {props.classInfo.credits}単位
        </div>
      </div>
    </div>
  );
}
