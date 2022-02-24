import React, { useState } from 'react';
import { TodoT } from '@custTypes/TodoT';

type Props = {
  todos: Array<TodoT> | any[];
  setTodos:
    | React.Dispatch<React.SetStateAction<TodoT[]>>
    | React.Dispatch<React.SetStateAction<never[]>>;
  setErr: React.Dispatch<React.SetStateAction<string>>;
};

const TodoCreation = ({ todos, setTodos, setErr }: Props) => {
  const [text, setText] = useState('');

  const setDefault = () => {
    setText('');
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    const todoToAdd = { checked: false, name: text };
    let todosToAdd: Array<TodoT> = [];

    const localTodos = localStorage.getItem('todos');

    if (localTodos) {
      // If duplicate exists, don't add
      if (JSON.parse(localTodos).find((t: TodoT) => t.name === text)) {
        setDefault();
        return setErr('Todo of same name exists');
      }
    }

    // If localstorage isn't empty and previous todos are not empty
    if (localTodos && todos.length) {
      todosToAdd = [...todos, todoToAdd];
      localStorage.setItem('todos', JSON.stringify(todosToAdd));
      setErr('');
    } else {
      todosToAdd.push(todoToAdd);
      localStorage.setItem('todos', JSON.stringify(todosToAdd));
      setErr('');
    }
    setDefault();
    localTodos && setTodos(JSON.parse(localTodos));
  };
  return (
    <div className="flex w-full items-center gap-2 rounded-md bg-gray-800 px-4 py-3 text-lg">
      <input
        type="text"
        placeholder="New todo.."
        className="w-full border-0 bg-inherit text-center placeholder:font-bold placeholder:text-gray-600 focus:outline-none"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      {text && (
        <button onClick={(e) => handleSubmit(e)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default TodoCreation;
