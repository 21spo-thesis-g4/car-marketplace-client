import Hero from './components/hero';
import SearchBox from './components/search';
import NewCars from './components/newcars';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <div className="container flex bg-neutral-900 min-w-full justify-center mt-4 -translate-y-56">
        <div className="w-1/5">
          <SearchBox />
        </div>
        <div className="w-3/5">
          <NewCars />
        </div>
      </div>
    </main>
  );
}