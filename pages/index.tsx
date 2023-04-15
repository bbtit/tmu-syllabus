import type { NextPage, GetServerSideProps } from 'next';
// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import prisma from '../lib/prisma';

const Home: NextPage = () => {
  return <div>Hello</div>;
};

export const getServerSideProps: GetServerSideProps<{
  count: number;
}> = async (ctx) => {
  const count = await prisma.classInfo.count();
  return {
    props: {
      count,
    },
  };
};

export default Home;
