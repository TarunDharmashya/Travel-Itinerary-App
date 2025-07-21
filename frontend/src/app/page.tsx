import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white rounded-lg p-10 max-w-md w-full flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-8 text-gray-800 text-center">Welcome to Travel Itinerary App</h1>
        <div className="flex gap-6 w-full justify-center">
          <Link href="/login" className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">Login</Link>
          <Link href="/register" className="px-6 py-2 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition">SignUp</Link>
        </div>
      </div>
    </div>
  );
}