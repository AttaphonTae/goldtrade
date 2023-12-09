'use client'
import React, { FC, MouseEvent } from 'react';

interface SaveButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  label: string;
}

const SaveButton: FC<SaveButtonProps> = ({ onClick, label }) => {
  return (
    <button className="rounded-lg bg-white text-slate-800 font-bold px-2 hover:text-orange-400 upper " onClick={onClick}>
      {label}
    </button>
  );
};

export default SaveButton;
