'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

export type ServiceOption = {
  id: string;
  name: string;
  category: string;
  logo?: string; // /logos/*.png (in public)
};

type Props = {
  value?: string;
  onChange: (option: ServiceOption | { id: 'custom'; name: string }) => void;
  placeholder?: string;
  options: ServiceOption[];
  className?: string;
};

export default function ServiceCombobox({
  value,
  onChange,
  options,
  placeholder = 'Select or type service name…',
  className = '',
}: Props) {
  const [query, setQuery] = useState(value ?? '');
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options.slice(0, 8);
    return options.filter((o) => o.name.toLowerCase().includes(q)).slice(0, 8);
  }, [query, options]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  function select(opt: ServiceOption | { id: 'custom'; name: string }) {
    onChange(opt);
    setQuery('name' in opt ? opt.name : (opt as any).name);
    setOpen(false);
  }

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
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-white placeholder:text-gray-500"
        />
        <svg
          className="h-4 w-4 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {open && (
        <div className="absolute z-50 mt-2 w-full rounded-lg border border-[#2A2A2A] bg-[#0f1117] shadow-xl overflow-hidden">
          <div className="max-h-72 overflow-auto">
            {filtered.length > 0 ? (
              filtered.map((o, i) => (
                <button
                  type="button"
                  key={o.id}
                  onMouseEnter={() => setHighlight(i)}
                  onClick={() => select(o)}
                  className={`flex w-full items-center gap-3 px-3 py-3 text-left ${
                    i === highlight ? 'bg-[#1a1f2b]' : ''
                  }`}
                >
                  {o.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={o.logo}
                      alt=""
                      className="h-8 w-8 rounded-[10px] object-cover"
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-[10px] bg-[#1f2431]" />
                  )}
                  <div>
                    <div className="text-sm font-medium text-white">
                      {o.name}
                    </div>
                    <div className="text-xs text-gray-400">{o.category}</div>
                  </div>
                </button>
              ))
            ) : (
              <div className="px-3 py-4 text-sm text-gray-400">
                No results. Press{' '}
                <span className="font-semibold text-gray-300">Enter</span> to use
                “{query}”.
              </div>
            )}
          </div>

          {query.trim() && (
            <button
              type="button"
              onClick={() =>
                select({ id: 'custom', name: query.trim() } as any)
              }
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
