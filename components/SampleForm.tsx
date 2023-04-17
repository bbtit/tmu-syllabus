import { useForm } from 'react-hook-form';
import type { Dispatch, SetStateAction } from 'react';

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

type Props = {
  func: Dispatch<SetStateAction<ClassInfo[]>>;
};

export default function SampleForm(props: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ClassInfo>();

  const onSubmit = async (data: ClassInfo) => {
    reset();
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== '')
    );
    const queryParams: string = Object.entries(filteredData)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    const url = `http://localhost:3000/api/search?${queryParams}`;
    const res = await fetch(url);
    const json = await res.json();
    props.func([...json]);
    console.log(json);
  };
  console.log(errors);

  return (
    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-wrap -mx-3 mb-2'>
        <div className='w-full px-3'>
          <label
            className='block  tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='grid-password'
          >
            授業コード
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-password'
            type='text'
            placeholder='text'
            {...register('classNumber', {})}
          />
        </div>
      </div>
      <div className='flex flex-wrap -mx-3 mb-2'>
        <div className='w-full px-3'>
          <label
            className='block  tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='grid-password'
          >
            授業名
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-password'
            type='text'
            placeholder='text'
            {...register('subjectName', {})}
          />
        </div>
      </div>
      <div className='flex flex-wrap -mx-3 mb-2'>
        <div className='w-full px-3'>
          <label
            className='block  tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='grid-password'
          >
            講師名
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-password'
            type='text'
            placeholder='text'
            {...register('instructor', {})}
          />
        </div>
      </div>
      <div className='flex flex-wrap -mx-3'>
        <div className='w-full md:w-1/2 px-3 mb-2'>
          <label
            className='block tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='grid-state'
          >
            年度
          </label>
          <div className='relative'>
            <select
              className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-state'
              defaultValue='2023'
              {...register('academicYear')}
            >
              <option value='2023'>2023</option>
              <option value='2022'>2022</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 px-3 mb-2'>
          <label
            className='block  tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='grid-state'
          >
            学期
          </label>
          <div className='relative'>
            <select
              className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-state'
              defaultValue=''
              {...register('semester')}
            >
              <option value=''>選択しない</option>
              <option value='前期'>前期</option>
              <option value='後期'>後期</option>
              <option value='通年'>通年</option>
              <option value='集中'>集中</option>
              <option value='年度跨り'>年度跨り</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 px-3 mb-2'>
          <label
            className='block  tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='grid-state'
          >
            曜日
          </label>
          <div className='relative'>
            <select
              className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-state'
              defaultValue=''
              {...register('dayOfWeek')}
            >
              <option value=''>選択しない</option>
              <option value='月'>月</option>
              <option value='火'>火</option>
              <option value='水'>水</option>
              <option value='木'>木</option>
              <option value='金'>金</option>
              <option value='他'>他</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 px-3 mb-2'>
          <label
            className='block  tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='grid-state'
          >
            時限
          </label>
          <div className='relative'>
            <select
              className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-state'
              defaultValue=''
              {...register('period')}
            >
              <option value=''>選択しない</option>
              <option value='1限'>1限</option>
              <option value='2限'>2限</option>
              <option value='3限'>3限</option>
              <option value='4限'>4限</option>
              <option value='5限'>5限</option>
              <option value='6限'>6限</option>
              <option value='7限'>7限</option>
              <option value='0限'>0限</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <button
        type='submit'
        className='w-full px-4 py-2 bg-blue-500 text-white rounded-md'
      >
        送信
      </button>
    </form>
  );
}
