import React from 'react';

export function Cell({ cell, index, onClick }) {
  return (
    <div
      className="h-20 w-20 flex justify-center place-items-center border-solid border-2 rounded-md border-white"
      onClick={() => onClick(index)}
    >
      <p className="text-white text-5xl">{cell}</p>
    </div>
  );
}
