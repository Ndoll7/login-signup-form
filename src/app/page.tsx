
import Link from "next/link";

export default function Home() {
  return (
    <div className="place-content-center text-4xl text-center bg-black min-h-screen text-white">
      <h1>Assalam o alaikum</h1>
      <Link href="/Users" className="hover:underline">Login Form</Link>
    </div>
  );
}
