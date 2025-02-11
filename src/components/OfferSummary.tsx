'use client'

import { useAtom } from "jotai"
import { offersAtom } from "@/lib/atoms/atoms"
import Link from "next/link"

export default function OfferSummary() {
    const [offers] = useAtom(offersAtom)
    const pendingOffers = offers.filter(offer => offer.status === 'pending')

    return (
        <div className="border rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Offers</h2>
            <Link href="/offers" className="text-blue-500 hover:text-blue-600">
              View All
            </Link>
          </div>
          {pendingOffers.length > 0 ? (
            <div className="space-y-2">
              {pendingOffers.slice(0, 3).map(offer => (
                <div key={offer.id} className="border-b pb-2">
                  <p className="font-medium">{offer.offeredItem}</p>
                  <p className="text-sm text-gray-600">For: {offer.listingTitle}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No pending offers</p>
          )}
        </div>
    )
}