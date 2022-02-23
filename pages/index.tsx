import TodoCreation from '@components/TodoCreation';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen items-center justify-center bg-back bg-cover bg-center font-montserrat text-white">
        <main className="flex flex-col gap-4 lg:w-1/4">
          <h1 className="text-4xl font-bold uppercase tracking-wider text-white">Todos</h1>
          <TodoCreation checked={false} />
        </main>
      </div>
    </>
  );
};

export default Home;
