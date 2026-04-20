'use client';

import { useState } from 'react';
import { Todo } from '@/types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = editValue.trim();
    if (!trimmed) return;
    onEdit(todo.id, trimmed);
    setIsEditing(false);
  };

  const handleEditKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setEditValue(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <li className="group flex items-center gap-4 px-6 py-4 hover:bg-stone-800/50 transition-colors">
      {/* Checkbox */}
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
          todo.completed
            ? 'bg-amber-700 border-transparent'
            : 'border-stone-500 hover:border-amber-600'
        }`}
        aria-label={todo.completed ? 'Mark incomplete' : 'Mark complete'}
      >
        {todo.completed && (
          <svg
            className="w-3 h-3 text-amber-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      {/* Text or Edit Form */}
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="flex-1 flex gap-2">
          <input
            type="text"
            value={editValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditValue(e.target.value)}
            onKeyDown={handleEditKeyDown}
            autoFocus
            className="flex-1 px-3 py-1.5 text-sm border border-stone-600 bg-stone-800 text-amber-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
          />
          <button
            type="submit"
            className="px-3 py-1.5 text-xs bg-amber-700 text-amber-100 rounded-lg hover:bg-amber-600 transition-colors font-medium"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => {
              setEditValue(todo.text);
              setIsEditing(false);
            }}
            className="px-3 py-1.5 text-xs bg-stone-700 text-stone-300 rounded-lg hover:bg-stone-600 transition-colors font-medium"
          >
            Cancel
          </button>
        </form>
      ) : (
        <span
          className={`flex-1 text-sm transition-all cursor-pointer ${
            todo.completed
              ? 'line-through text-stone-600'
              : 'text-amber-200 hover:text-amber-100'
          }`}
          onDoubleClick={() => {
            if (!todo.completed) {
              setEditValue(todo.text);
              setIsEditing(true);
            }
          }}
        >
          {todo.text}
        </span>
      )}

      {/* Actions */}
      {!isEditing && (
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          {!todo.completed && (
            <button
              onClick={() => {
                setEditValue(todo.text);
                setIsEditing(true);
              }}
              className="p-1.5 text-stone-500 hover:text-amber-300 rounded-lg hover:bg-stone-700 transition-all"
              aria-label="Edit task"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
          )}
          <button
            onClick={() => onDelete(todo.id)}
            className="p-1.5 text-stone-500 hover:text-red-400 rounded-lg hover:bg-stone-700 transition-all"
            aria-label="Delete task"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      )}
    </li>
  );
}
