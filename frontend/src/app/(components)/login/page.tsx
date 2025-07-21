
"use client";
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/lib/axiosInstance';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post('/auth/login', { email, password });
      const data = res.data;
      if (data.token) {
        localStorage.setItem('token', data.token);
        if (data.user && data.user.firstName && data.user.lastName) {
          localStorage.setItem('username', data.user.firstName + ' ' + data.user.lastName);
        }
        router.push('/dashboard');
      } else {
        alert('Login failed');
      }
    } catch (err) {
      alert('Login failed');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <form onSubmit={handleSubmit} autoComplete="off" className="bg-white rounded-lg p-10 max-w-md w-full flex flex-col items-center">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-800">Travel Itinerary</h2>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
          className="block w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg text-gray-700"
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
          className="block w-full mb-8 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg text-gray-700"
        />
        <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition text-lg">Login</button>
      </form>
    </div>
  );
}
