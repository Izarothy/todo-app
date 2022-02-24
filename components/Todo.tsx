import React, { useState } from 'react';
import { TodoT } from '@custTypes/TodoT';

const Todo = ({ checked, name }: TodoT) => {
  const [completed, setCompleted] = useState(checked);
  return (
    <div className="flex gap-4 border-b border-gray-600 bg-gray-800 py-2 px-3">
      <button
        className={`${
          completed ? `bg-green-400` : `border border-gray-300 bg-inherit`
        } h-7 w-7 rounded-full`}
        onClick={() => setCompleted(!completed)}
      />
      <h2 className={`${completed && `line-through`}`}>{name}</h2>
    </div>
  );
};

export default Todo;
