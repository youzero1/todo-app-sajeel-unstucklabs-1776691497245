'use client';

import { FilterType } from '@/types/todo';

interface TodoFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  completedCount: number;
  totalCount: number;
}

export default function TodoFilter({
  filter,
  onFilterChange,
  activeCount,
  completedCount,
  totalCount,
}: TodoFilterProps) {
  const filters: { label: string; value: FilterType; count: number }[] = [
    { label: 'All', value: 'all', count: totalCount },
    { label: 'Active', value: 'active', count: activeCount },
    { label: 'Done', value: 'completed', count: completedCount },
  ];

  return (
    <div className="flex gap-1">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => onFilterChange(f.value)}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
            filter === f.value
              ? 'bg-zinc-700 text-white'
              : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800'
          }`}
        >
          {f.label}
          <span
            className={`text-xs rounded-full px-1.5 py-0.5 ${
              filter === f.value
                ? 'bg-zinc-500 text-white'
                : 'bg-zinc-800 text-zinc-400'
            }`}
          >
            {f.count}
          </span>
        </button>
      ))}
    </div>
  );
}
