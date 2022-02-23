import React, { useState } from 'react';
type Props = {
  checked: boolean;
  name: string;
};
const Todo = ({ checked, name }: Props) => {
  const [checkedd, setChecked] = useState(false);
  return (
    <div className="flex gap-4 border-b border-gray-600 bg-gray-800 py-2 px-3">
      <button
        className={`${
          checked ? `bg-green-400` : `border border-gray-300 bg-inherit`
        } h-7 w-7 rounded-full`}
        onClick={() => setChecked(!checkedd)}
      />
      <h2 className={`${checked && `line-through`}`}>{name}</h2>
    </div>
  );
};

export default Todo;
