import Todo from '@components/Todo';
import TodoCreation from '@components/TodoCreation';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const todos = [
  {
    name: 'Todo 1',
    checked: true
  }
];

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const Home: NextPage = () => {
  const dayOfTheWeek = weekdays[new Date().getDay()];
  const month = months[new Date().getMonth()];
  const day = new Date().getDate();
  const year = new Date().getFullYear();
  const todayDate = `${month} ${day}, ${year}`;
  return (
    <>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen justify-center bg-back bg-cover bg-center py-48 font-montserrat text-white">
        <main className="flex flex-col gap-4 lg:w-1/4">
          <h1 className="text-center text-6xl font-bold uppercase tracking-wider text-white [text-shadow:2px_2px_2px_#000]">
            Todos
          </h1>
          <h2>{dayOfTheWeek}</h2>
          <h3>{todayDate}</h3>
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
