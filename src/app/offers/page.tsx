'use client';

import { useAtom } from 'jotai';
import { offersAtom } from '@/lib/atoms/atoms';

export default function Offers() {
  const [offers] = useAtom(offersAtom);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Trade Offers</h1>
      <div className="space-y-4">
        {offers.map((offer) => (
          <div key={offer.id} className="border rounded p-4">
            <h3 className="font-bold">Offer for: {offer.listingTitle}</h3>
            <p>Offered Item: {offer.offeredItem}</p>
            <div className="mt-2 space-x-2">
              <button className="bg-green-500 text-white px-3 py-1 rounded">
                Accept
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded">
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
