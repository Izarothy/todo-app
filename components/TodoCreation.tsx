import React, { useState } from 'react';
import { TodoT } from '@custTypes/TodoT';

type Props = {
  setTodos:
    | React.Dispatch<React.SetStateAction<TodoT[]>>
    | React.Dispatch<React.SetStateAction<any[]>>;
  setErr: React.Dispatch<React.SetStateAction<string>>;
  setNumLeft: React.Dispatch<React.SetStateAction<number>>;
};

const TodoCreation = ({ setTodos, setErr, setNumLeft }: Props) => {
  const [text, setText] = useState('');

  const setDefault = () => {
    setText('');
  };

  const updateLS = (todoArr: Array<TodoT>) => {
    setTodos(todoArr);
    localStorage.setItem('todos', JSON.stringify(todoArr));
    setNumLeft(todoArr.filter((todo: TodoT) => !todo.checked).length);
    setErr('');
  };
  const handleSubmit = (): void => {
    const todoToAdd: TodoT = { checked: false, name: text };
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
    if (localTodos) {
      todosToAdd = [...JSON.parse(localTodos), todoToAdd];
      updateLS(todosToAdd);
    } else {
      todosToAdd.push(todoToAdd);
      updateLS(todosToAdd);
    }
    setDefault();
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
        <button onClick={() => handleSubmit()}>
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
