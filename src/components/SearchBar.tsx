'use client';

import { useAtom } from 'jotai';
import { searchQueryAtom } from '@/lib/atoms/atoms';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search availble trades..."
        className="border rounded p-2 w-full text-gray-700 placeholder-gray-400"
      />
    </div>
  );
}
