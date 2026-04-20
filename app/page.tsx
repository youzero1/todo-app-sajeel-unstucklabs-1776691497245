'use client';

import { useState } from 'react';
import TodoList from '@/components/TodoList';
import TodoInput from '@/components/TodoInput';
import TodoFilter from '@/components/TodoFilter';
import { Todo, FilterType } from '@/types/todo';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', text: 'Buy groceries', completed: false, createdAt: new Date() },
    { id: '2', text: 'Read a book', completed: true, createdAt: new Date() },
    { id: '3', text: 'Go for a walk', completed: false, createdAt: new Date() },
  ]);
  const [filter, setFilter] = useState<FilterType>('all');

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.completed).length;
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-red-100 mb-2">
            My Tasks
          </h1>
          <p className="text-red-400 text-sm">
            {activeCount} task{activeCount !== 1 ? 's' : ''} remaining
          </p>
        </div>

        {/* Card */}
        <div className="bg-red-900 rounded-3xl shadow-2xl shadow-red-950/60 overflow-hidden border border-red-800">
          {/* Input */}
          <div className="p-6 border-b border-red-800">
            <TodoInput onAdd={addTodo} />
          </div>

          {/* Filter */}
          <div className="px-6 py-3 bg-red-950 border-b border-red-800">
            <TodoFilter
              filter={filter}
              onFilterChange={setFilter}
              activeCount={activeCount}
              completedCount={completedCount}
              totalCount={todos.length}
            />
          </div>

          {/* List */}
          <div className="divide-y divide-red-800">
            <TodoList
              todos={filteredTodos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          </div>

          {/* Footer */}
          {completedCount > 0 && (
            <div className="px-6 py-4 bg-red-950 border-t border-red-800 flex justify-between items-center">
              <span className="text-sm text-red-400">
                {completedCount} completed
              </span>
              <button
                onClick={clearCompleted}
                className="text-sm text-red-300 hover:text-red-100 transition-colors font-medium"
              >
                Clear completed
              </button>
            </div>
          )}

          {/* Empty State */}
          {filteredTodos.length === 0 && (
            <div className="py-16 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <p className="text-red-400 font-medium">
                {filter === 'completed'
                  ? 'No completed tasks yet'
                  : filter === 'active'
                  ? 'No active tasks! All done!'
                  : 'No tasks yet. Add one above!'}
              </p>
            </div>
          )}
        </div>

        <p className="text-center text-red-900 text-xs mt-6">
          Click on a task to mark it complete
        </p>
      </div>
    </main>
  );
}
