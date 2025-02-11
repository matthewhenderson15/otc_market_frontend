'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 text-white p-4 mb-8">
      <div className="container mx-auto flex space-x-6">
        <Link
          href="/"
          className={`${pathname === '/' ? 'text-blue-300' : ''}`}
        >
          Home
        </Link>
        <Link
          href="/new-listing"
          className={`${pathname === '/new-listing' ? 'text-blue-300' : ''}`}
        >
          New Listing
        </Link>
        <Link
          href="/listings"
          className={`${pathname === '/listings' ? 'text-blue-300' : ''}`}
        >
          Listings
        </Link>
        <Link
          href="/offers"
          className={`${pathname === '/offers' ? 'text-blue-300' : ''}`}
        >
          Offers
        </Link>
      </div>
    </nav>
  )
}
