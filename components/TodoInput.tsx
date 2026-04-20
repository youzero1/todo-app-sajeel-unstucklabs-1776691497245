'use client';

import { useState } from 'react';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-3 rounded-xl border border-stone-600 bg-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent text-amber-100 placeholder-stone-500 text-sm transition-all"
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="px-5 py-3 bg-amber-700 text-amber-100 rounded-xl font-semibold text-sm hover:bg-amber-600 transition-all shadow-md hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
      >
        Add
      </button>
    </form>
  );
}
