'use client';

import { useAtom } from 'jotai';
import { tradeItemsAtom, searchQueryAtom } from '../lib/atoms/atoms';

interface TradeListingsProps {
  filterMine?: boolean;
  limit?: number
}

export default function TradeListings({
  filterMine = false,
  limit = undefined
}: TradeListingsProps) {
  const [tradeItems] = useAtom(tradeItemsAtom);
  const [searchQuery] = useAtom(searchQueryAtom);

  const currentUserId = 'mock-user-id';

  let filteredItems = tradeItems.filter(
    (item) =>
      (filterMine ? item.userId === currentUserId : true) &&
      (item.itemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desiredItems.some((desired) =>
          desired.toLowerCase().includes(searchQuery.toLowerCase()),
        ))
  );

  if (limit) {
    filteredItems = filteredItems.slice(0, limit)
  }

  return (
    <div className="space-y-4">
      {filteredItems.length > 0 ? (
        filteredItems.map(item => (
          <div key={item.id} className="border rounded p-4">
            <h3 className="font-bold">{item.itemName}</h3>
            <p className="text-gray-600">{item.description}</p>
            <div className="mt-2">
              <span className="font-semibold">Looking for: </span>
              {item.desiredItems.join(', ')}
            </div>
            {!filterMine && (
              <button 
                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
                onClick={() => {/* Add make offer logic */}}
              >
                Make Offer
              </button>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-500">No listings found</p>
      )}
    </div>
  );
}
