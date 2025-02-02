'use client';

import { useAtom } from 'jotai';
import { TradeItem, tradeItemsAtom } from '../lib/atoms/atoms';
import { useState } from 'react';

export default function TradeForm() {
  const [tradeItems, setTradeItems] = useAtom(tradeItemsAtom);
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [desiredItems, setDesiredItems] = useState('');
  const [desiredAmount, setDesiredAmount] = useState(0);
  const [desiredPrice, setDesiredPrice] = useState(0);
  const [desiredCurrency, setDesiredCurrency] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newItem: TradeItem = {
      id: Date.now().toString(),
      itemName,
      description,
      desiredItems: desiredItems.split(',').map((item) => item.trim()),
      desiredAmount,
      desiredPrice,
      desiredCurrency,
    };
    setTradeItems((prev) => [...prev, newItem]);

    setItemName('');
    setDescription('');
    setDesiredItems('');
    setDesiredAmount(0);
    setDesiredPrice(0);
    setDesiredCurrency('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="itemName" className="block">
          Item to Trade
        </label>
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="border rounded p-2 w-full text-gray-700 placeholder-gray-400"
        />
      </div>
      <div>
        <label htmlFor="description" className="block">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded p-2 w-full text-gray-700 placeholder-gray-400"
        />
      </div>
      <div>
        <label htmlFor="desiredItems" className="block">
          Desired Items (comma-separated)
        </label>
        <input
          type="text"
          id="desiredItems"
          value={desiredItems}
          onChange={(e) => setDesiredItems(e.target.value)}
          className="border rounded p-2 w-full text-gray-700 placeholder-gray-400"
        />
      </div>
      <div>
        <label htmlFor="desiredAmount" className="block">
          Desired Amount
        </label>
        <input
          type="number"
          id="desiredAmount"
          value={desiredAmount}
          onChange={(e) => setDesiredAmount(Number(e.target.value))}
          className="border rounded p-2 w-full text-gray-700 placeholder-gray-400"
        />
      </div>
      <div>
        <label htmlFor="desiredPrice" className="block">
          Desired Price
        </label>
        <input
          type="number"
          id="desiredPrice"
          value={desiredPrice}
          onChange={(e) => setDesiredPrice(Number(e.target.value))}
          className="border rounded p-2 w-full text-gray-700 placeholder-gray-400"
        />
      </div>
      <div>
        <label htmlFor="desiredCurrency" className="block">
          Desired Currency
        </label>
        <input
          type="text"
          id="desiredCurrency"
          value={desiredCurrency}
          onChange={(e) => setDesiredCurrency(e.target.value)}
          className="border rounded p-2 w-full text-gray-700 placeholder-gray-400"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Trade Item
      </button>
    </form>
  );
}
