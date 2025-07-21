"use client";
import Navbar from './Navbar';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function NavbarWrapper() {
  const pathname = usePathname();
  const [username, setUsername] = useState('');
  useEffect(() => {
    setUsername(localStorage.getItem('username') || '');
  }, []);
  const showNavbar = pathname && pathname !== '/' && !pathname.startsWith('/login') && !pathname.startsWith('/register');
  return showNavbar ? <Navbar username={username} /> : null;
}
