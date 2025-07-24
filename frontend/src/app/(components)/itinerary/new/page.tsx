"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/lib/axiosInstance';

export default function NewItinerary() {
  const [title, setTitle] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [tripType, setTripType] = useState('');
  const [endDate, setEndDate] = useState('');
  const tripTypes = ['Business', 'Leisure', 'Adventure', 'Cultural', 'Other'];
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/itineraries', { title, destination,tripType, startDate, endDate });
      router.push('/dashboard');
    } catch (err) {
      alert('Failed to create itinerary');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <form onSubmit={handleSubmit} className="bg-white border border-blue-100 rounded-md p-10 max-w-lg w-full flex flex-col items-center">
        <h2 className="text-3xl font-extrabold mb-8 text-blue-800">Create New Itinerary</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="block w-full mb-6 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg placeholder-gray-700"
        />
        <input
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Destination"
          className="block w-full mb-6 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg placeholder-gray-700"
        />
        <select onChange={(e) => setTripType(e.target.value)} value={tripType} className="block w-full mb-6 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg">
          <option value="">Select Trip Type</option>
          {tripTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="block w-full mb-6 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="block w-full mb-8 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
        />
        <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition text-lg">Create</button>
      </form>
    </div>
  );
}
