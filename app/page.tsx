import Hero from './components/hero';
import SearchBox from './components/search';
import Newbies from './components/newbies';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <div className="flex w-full justify-center mt-8">
        <div className="w-1/5">
          <SearchBox />
        </div>
        <div className="w-2/5">
          <Newbies />
        </div>
      </div>
    </main>
  );
}