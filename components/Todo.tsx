import React, { useState } from 'react';
import { TodoT } from '@custTypes/TodoT';

type Props = {
  checked: boolean;
  name: string;
  setNumLeft: React.Dispatch<React.SetStateAction<number>>;
};

const Todo = ({ checked, name, setNumLeft }: Props) => {
  const [completed, setCompleted] = useState(checked);

  const handleCheck = () => {
    setCompleted(!completed);
    if (localStorage.getItem('todos')) {
      const localTodos = localStorage.getItem('todos');
      if (localTodos) {
        let todoArr = JSON.parse(localTodos);
        todoArr.find((t: TodoT) => t.name === name).checked = !completed;
        localStorage.setItem('todos', JSON.stringify(todoArr));
        setNumLeft(todoArr.filter((todo: TodoT) => !todo.checked).length);
      }
    }
  };

  return (
    <div className="flex gap-4 border-b border-gray-500 py-2 px-3">
      <button
        className={`${
          completed ? `bg-green-400` : `border border-gray-500 bg-inherit`
        } h-6 w-6 rounded-full`}
        onClick={() => handleCheck()}
      />
      <h2 className={`${completed && `line-through`}`}>{name}</h2>
    </div>
  );
};

export default Todo;
