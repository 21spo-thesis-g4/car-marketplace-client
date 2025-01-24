import Link from "next/link";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
    </main>
  );
}
