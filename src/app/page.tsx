import TradeForm from '@/components/TradeForm';
import TradeListings from '@/components/TradeListings';
import OfferSummary from '@/components/OfferSummary';
import SearchBar from '@/components/SearchBar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Your Recent Listings</h2>
            <Link href="/listings" className="text-blue-500 hover:text-blue-600">
              View All
            </Link>
          </div>
          {/* <SearchBar /> */}
          <TradeListings filterMine={true} limit={3} />
        </div>

        <div>
          <OfferSummary />
        </div>
      </div>

      <div className="mt-8">
        <Link 
          href="/new-listing"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create New Listing
        </Link>
      </div>

      {/* <div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Available Trades</h2>
          <SearchBar />
          <TradeListings />
        </div>
      </div> */}
    </main>
  );
}
