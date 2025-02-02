import TradeForm from '@/components/TradeForm';
import TradeListings from '@/components/TradeListings';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Market Exchange</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Add Your Item</h2>
          <TradeForm />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Available Trades</h2>
          <SearchBar />
          <TradeListings />
        </div>
      </div>
    </main>
  );
}
