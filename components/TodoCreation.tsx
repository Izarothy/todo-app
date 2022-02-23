import React from 'react';

const TodoCreation = () => {
  return (
    <div className="flex w-full items-center gap-2 rounded-md bg-gray-800 px-4 py-5 text-lg">
      <input
        type="text"
        placeholder="New todo.."
        className="w-full border-0 bg-inherit text-center placeholder:font-bold placeholder:text-gray-600 focus:outline-none"
      />
    </div>
  );
};

export default TodoCreation;