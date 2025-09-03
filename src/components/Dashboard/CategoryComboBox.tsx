'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

export type CategoryOption = {
  id: string;
  name: string;     // e.g., "Entertainment"
  icon?: string;    // optional emoji/icon string like "🎬"
};

type Props = {
  value?: string;
  options: CategoryOption[];
  onChange: (option: CategoryOption | { id: 'custom'; name: string }) => void;
  placeholder?: string;
  className?: string;
};

export default function CategoryCombobox({
  value,
  options,
  onChange,
  placeholder = 'Select category…',
  className = '',
}: Props) {
  const [query, setQuery] = useState(value ?? '');
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options.slice(0, 10);
    return options.filter(o => o.name.toLowerCase().includes(q)).slice(0, 10);
  }, [query, options]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const select = (opt: CategoryOption | { id: 'custom'; name: string }) => {
    onChange(opt);
    setQuery('name' in opt ? opt.name : (opt as any).name);
    setOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open && (e.key === 'ArrowDown' || e.key === 'Enter')) {
      setOpen(true);
      return;
    }
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlight(h => Math.min(h + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlight(h => Math.max(h - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[highlight]) select(filtered[highlight]);
      else if (query.trim()) select({ id: 'custom', name: query.trim() } as any);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <div className="flex items-center gap-2 rounded bg-[#0f1117] border border-[#2A2A2A] px-3 py-2">
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setHighlight(0);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-white placeholder:text-gray-500"
        />
        <svg className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
        </svg>
      </div>

      {open && (
        <div className="absolute z-50 mt-2 w-full rounded-lg border border-[#2A2A2A] bg-[#0f1117] shadow-xl overflow-hidden">
          <div className="max-h-72 overflow-auto">
            {filtered.length ? (
              filtered.map((o, i) => (
                <button
                  type="button"
                  key={o.id}
                  onMouseEnter={() => setHighlight(i)}
                  onClick={() => select(o)}
                  className={`flex w-full items-center gap-3 px-3 py-3 text-left ${i === highlight ? 'bg-[#1a1f2b]' : ''}`}
                >
                  <span className="text-base">{o.icon ?? '•'}</span>
                  <span className="text-sm font-medium text-white">{o.name}</span>
                </button>
              ))
            ) : (
              <div className="px-3 py-4 text-sm text-gray-400">
                No results. Press <span className="font-semibold text-gray-300">Enter</span> to use “{query}”.
              </div>
            )}
          </div>

          {query.trim() && (
            <button
              type="button"
              onClick={() => select({ id: 'custom', name: query.trim() } as any)}
              className="w-full px-3 py-2 text-sm text-left text-gray-200 hover:bg-[#1a1f2b]"
            >
              Use “{query.trim()}”
            </button>
          )}
        </div>
      )}
    </div>
  );
}
