"use client";
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <EyeIcon className="h-6 w-6" />
        <span className="ml-2 text-lg font-bold">visionary AI</span>
      </Link>
      <button
        className="lg:hidden"
        onClick={() => setMenuOpen(!isMenuOpen)}>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>
      <nav
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } absolute lg:relative top-16 lg:top-0 right-0 lg:flex flex-col lg:flex-row justify-center items-center bg-black lg:bg-transparent bg-opacity-90 py-4 lg:py-0 lg:items-center lg:ml-auto gap-4 sm:gap-6 w-full lg:w-auto`}>
        <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">Home</Link>
        <Link href="/image-generator" className="text-sm font-medium hover:underline underline-offset-4">Image Generation</Link>
        <Link href="/chat" className="text-sm font-medium hover:underline underline-offset-4">Chatbot</Link>
        <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">Contact</Link>
      </nav>
    </header>
  );
}

function EyeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7s10 7 10 7s-3 7-10 7s-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
