import Todo from '@components/Todo';
import TodoCreation from '@components/TodoCreation';
import type { NextPage } from 'next';
import Head from 'next/head';

const todos = [
  {
    name: 'Todo 1',
    checked: true
  },
  {
    name: 'Todo 2',
    checked: false
  },
  {
    name: 'Todo 3',
    checked: true
  },
  {
    name: 'Todo 4',
    checked: false
  },
  {
    name: 'Todo 5',
    checked: true
  }
];
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen justify-center bg-back bg-cover bg-center py-48 font-montserrat text-white">
        <main className="flex flex-col gap-4 lg:w-1/4">
          <h1 className="text-4xl font-bold uppercase tracking-wider text-white">Todos</h1>
          <TodoCreation />
          <section className="flex flex-col">
            {todos.map((todo) => {
              return <Todo checked={todo.checked} name={todo.name} />;
            })}
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
