import React from 'react';
import { useForm } from 'react-hook-form';

type InputData = {
  academicYear?: string;
  semester?: string;
  dayOfWeek?: string;
  period?: string;
  subjectName?: string;
  classNumber?: string;
  credits?: string;
  id?: number;
  instructor?: string;
  url?: string;
  category?: string;
  facultyCode?: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: InputData) => console.log(data);
  console.log(errors);

  return (
    <div className='container mx-auto'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col space-y-4'
      >
        <h1 className='text-center font-bold text-4xl text-gray-700'>
          時間割検索
        </h1>
        <select
          {...register('academicYear')}
          className='px-4 py-2 border rounded-md'
        >
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
        </select>
        <select
          {...register('semester')}
          className='px-4 py-2 border rounded-md'
        >
          <option value='前期'>前期</option>
          <option value='後期'>後期</option>
          <option value='通年'>通年</option>
          <option value='集中'>集中</option>
          <option value='年度跨り'>年度跨り</option>
        </select>
        <select
          {...register('dayOfWeek')}
          className='px-4 py-2 border rounded-md'
        >
          <option value='月'>月</option>
          <option value='火'>火</option>
          <option value='水'>水</option>
          <option value='木'>木</option>
          <option value='金'>金</option>
          <option value='他'>他</option>
        </select>
        <select {...register('period')} className='px-4 py-2 border rounded-md'>
          <option value='1限'>1限</option>
          <option value='2限'>2限</option>
          <option value='3限'>3限</option>
          <option value='4限'>4限</option>
          <option value='5限'>5限</option>
          <option value='6限'>6限</option>
          <option value='7限'>7限</option>
          <option value='0限'>0限</option>
        </select>
        <input
          type='text'
          placeholder='講師名'
          {...register('instructor', {})}
          className='px-4 py-2 border rounded-md'
        />
        <input
          type='text'
          placeholder='授業名'
          {...register('subjectName', {})}
          className='px-4 py-2 border rounded-md'
        />
        <input
          type='text'
          placeholder='授業コード'
          {...register('classNumber', {})}
          className='px-4 py-2 border rounded-md'
        />

        <button
          type='submit'
          className='px-4 py-2 bg-blue-500 text-white rounded-md'
        >
          送信
        </button>
      </form>
    </div>
  );
}
