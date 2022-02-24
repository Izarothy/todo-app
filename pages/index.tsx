import Todo from '@components/Todo';
import TodoCreation from '@components/TodoCreation';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { TodoT } from '@custTypes/TodoT';
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayOfTheWeek = weekdays[new Date().getDay()];
const month = months[new Date().getMonth()];
const day = new Date().getDate();
const year = new Date().getFullYear();
const todayDate = `${month} ${day}, ${year}`;

const removeTodos = () => {
  localStorage.removeItem('todos');
};
const Home: NextPage = () => {
  const [todos, setTodos] = useState<Array<TodoT>>([]);
  const [numLeft, setNumLeft] = useState<number>(0);
  const [err, setErr] = useState<string>('');

  useEffect(() => {
    const localTodos = localStorage.getItem('todos');
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
      setNumLeft(JSON.parse(localTodos).filter((todo: TodoT) => !todo.checked).length);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setErr('');
    }, 5000);
  }, [err]);
  return (
    <>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen justify-center bg-back bg-cover bg-center py-48 font-montserrat text-white">
        <main className="flex flex-col gap-4 rounded-md bg-gray-700 px-6 pt-8 pb-2 lg:w-1/4">
          <p className="text-center text-red-500 transition">{err}</p>
          <h1 className="text-center text-6xl font-bold uppercase tracking-wider text-white [text-shadow:2px_2px_2px_#000]">
            Todos
          </h1>
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold">{dayOfTheWeek}</h2>
            <span className="text-lg text-gray-400">{todayDate}</span>
          </div>
          <TodoCreation todos={todos} setTodos={setTodos} setErr={setErr} />
          <section className="flex h-full grow flex-col overflow-y-scroll scrollbar-hide">
            {todos.length ? (
              todos.map((todo: TodoT, idx: number) => {
                return (
                  <Todo key={idx} checked={todo.checked} name={todo.name} setNumLeft={setNumLeft} />
                );
              })
            ) : (
              <h3>No todos found</h3>
            )}
          </section>
          <span className="flex w-full items-center justify-between">
            <span className="text-sm">{numLeft} left to complete</span>
            <button
              onClick={() => {
                setTodos([]);
                removeTodos();
                setNumLeft(0);
              }}>
              Remove all todos
            </button>
          </span>
        </main>
      </div>
    </>
  );
};

export default Home;
