import Hero from './components/hero';
import SearchBox from './components/search';
import NewCars from './components/newcars';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <div className="container flex w-3/5 justify-center -translate-y-32 bg-black bg-opacity-20">
        <div className="w-1/3">
          <SearchBox />
        </div>
        <div className="w-2/3">
          <NewCars />
        </div>
      </div>
    </main>
  );
}