import SearchBar from '@/components/SearchBar';
import TradeListings from '@/components/TradeListings';

export default function Listings() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Available Trades</h1>
      <SearchBar />
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-4">My Listings</h2>
        <TradeListings filterMine={true} />
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">All Listings</h2>
        <TradeListings filterMine={false} />
      </div>
    </main>
  );
}
