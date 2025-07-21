"use client";

export default function Navbar({ username = "Username" }: { username?: string }) {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 shadow bg-white border-b border-blue-100">
      <a
        href="/dashboard"
        className="text-2xl font-extrabold text-blue-700 tracking-tight cursor-pointer"
      >
        Travel Itinerary
      </a>
      <div className="flex items-center gap-4">
        <span className="inline-block w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg shadow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-5 -5 35 35" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z" />
          </svg>
        </span>
        <span className="font-semibold text-blue-700 text-lg">{username}</span>
      </div>
    </nav>
  );
}
