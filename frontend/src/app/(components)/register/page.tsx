"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/lib/axiosInstance';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post('/auth/signup', {
        email,
        password,
        firstName,
        lastName,
        mobileNo,
        address,
        pincode,
      });
      const data = res.data;
      if (data.token) {
        localStorage.setItem('token', data.token);
        if (data.user && data.user.firstName && data.user.lastName) {
          localStorage.setItem('username', data.user.firstName + ' ' + data.user.lastName);
        }
        router.push('/dashboard');
      } else {
        alert('Signup failed');
      }
    } catch (err) {
      alert('Signup failed');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <form onSubmit={handleSubmit} autoComplete="off" className="bg-white rounded-lg p-10 max-w-md w-full flex flex-col items-center">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-800">Travel Itinerary</h2>
        <div className="flex w-full gap-4 mb-4">
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
            autoComplete="off"
            className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 text-lg text-gray-700"
          />
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
            autoComplete="off"
            className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 text-lg text-gray-700"
          />
        </div>
        <input
          placeholder="Mobile No"
          value={mobileNo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMobileNo(e.target.value)}
          autoComplete="off"
          className="block w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 text-lg text-gray-700"
        />
        <input
          placeholder="Address"
          value={address}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
          autoComplete="off"
          className="block w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 text-lg text-gray-700"
        />
        <input
          placeholder="Pincode"
          value={pincode}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPincode(e.target.value)}
          autoComplete="off"
          className="block w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 text-lg text-gray-700"
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          autoComplete="off"
          className="block w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 text-lg text-gray-700"
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          autoComplete="off"
          className="block w-full mb-8 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 text-lg text-gray-700"
        />
        <button type="submit" className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition text-lg">Register</button>
      </form>
    </div>
  );
}