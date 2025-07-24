"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axiosInstance from '@/lib/axiosInstance';
import { usePagination } from '@/lib/pagination';

interface Itinerary {
  _id: string;
  title: string;
  destination: string;
  tripType?: string;
  startDate: string;
  endDate: string;
}

export default function Dashboard() {
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);

  useEffect(() => {
    axiosInstance.get<Itinerary[]>('/itineraries')
      .then((res: { data: Itinerary[] }) => setItineraries(res.data))
      .catch(() => setItineraries([]));
  }, []);

  const itemsPerPage = 5;
  const { currentPage, totalPages, paginatedData, goToPage } = usePagination(itineraries, itemsPerPage);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="w-full max-w-4xl mx-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-extrabold text-blue-800">Itinerary List</h1>
            <Link href="/itinerary/new" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition text-lg">
              Add New
            </Link>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-xl bg-white">
            <table className="min-w-full bg-white rounded-2xl">
              <thead>
                <tr className="bg-blue-100 text-blue-800">
                  <th className="py-4 px-6 text-left font-bold text-lg">Title</th>
                  <th className="py-4 px-6 text-left font-bold text-lg">Destination</th>
                  <th className="py-4 px-6 text-left font-bold text-lg">Trip Type</th>
                  <th className="py-4 px-6 text-left font-bold text-lg">Start Date</th>
                  <th className="py-4 px-6 text-left font-bold text-lg">End Date</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-8 text-gray-500 text-lg">No itineraries found.</td>
                  </tr>
                ) : (
                  paginatedData.map(it => (
                    <tr key={it._id} className="border-b hover:bg-blue-50 transition">
                      <td className="py-4 px-6 text-gray-900">
                        <Link href={`/itinerary/${it._id}`} className="text-blue-600 font-medium hover:text-blue-800 transition text-lg">
                          {it.title}
                        </Link>
                      </td>
                      <td className="py-4 px-6 text-gray-900">{it.destination}</td>
                      <td className="py-4 px-6 text-gray-900">{it.tripType}</td>
                      <td className="py-4 px-6 text-gray-900">{new Date(it.startDate).toLocaleDateString()}</td>
                      <td className="py-4 px-6 text-gray-900">{new Date(it.endDate).toLocaleDateString()}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded bg-gray-200 text-gray-700 font-semibold disabled:opacity-50"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => goToPage(i + 1)}
                  className={`px-3 py-1 rounded font-semibold ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-blue-100'}`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded bg-gray-200 text-gray-700 font-semibold disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
