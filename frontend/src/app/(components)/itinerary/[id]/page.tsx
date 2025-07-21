"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axiosInstance from '@/lib/axiosInstance';

interface Itinerary {
  _id: string;
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
}


export default function ItineraryDetails() {
  const { id } = useParams<{ id: string }>();
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);

  useEffect(() => {
    if (!id) return;
    axiosInstance.get(`/itineraries/${id}`)
      .then(res => setItinerary(res.data))
      .catch(() => setItinerary(null));
  }, [id]);

  if (!itinerary) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white border border-blue-100 rounded-md p-10 max-w-lg w-full flex flex-col items-center">
        <p className="text-lg text-blue-700 font-semibold">Loading...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white border border-blue-100 rounded-md p-10 max-w-lg w-full flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-8 text-blue-800">{itinerary.title}</h1>
        <div className="w-full mb-4">
          <p className="mb-2 text-gray-900 text-lg"><span className="font-semibold text-blue-700">Destination:</span> {itinerary.destination}</p>
          <p className="mb-2 text-gray-900 text-lg"><span className="font-semibold text-blue-700">From:</span> {new Date(itinerary.startDate).toLocaleDateString()}</p>
          <p className="mb-2 text-gray-900 text-lg"><span className="font-semibold text-blue-700">To:</span> {new Date(itinerary.endDate).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
