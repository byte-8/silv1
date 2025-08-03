"use client";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrop = () => {
    setIsOpen(!isOpen);
  };
  const closeSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="md:hidden relative w-screen">
        <button
          onClick={toggleDrop}
          className="md:hidden p-2 bg-gray-200 justify-items-center w-full"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="bg-gray-200 text-black w-full shadow-lg z-40 mb-10 md:hidden">
          <h2 className="text-sm font-bold p-4 text-center">Sil V1</h2>
          <ul>
            <li>
              <Link
                href="../quest-center"
                className="block hover:bg-gray-500 p-2 hover:text-white text-sm"
                onClick={() => setIsOpen(false)} // Tutup dropdown saat diklik
              >
                Quest Center
              </Link>
            </li>
            <li>
              <Link
                href="../quest-letter"
                className="block hover:bg-gray-500 p-2 hover:text-white text-sm"
                onClick={() => setIsOpen(false)} // Tutup dropdown saat diklik
              >
                Quest Letter
              </Link>
            </li>
            <li>
              <Link
                href="../quest-alcanez"
                className="block hover:bg-gray-500 p-2 hover:text-white text-sm"
                onClick={() => setIsOpen(false)} // Tutup dropdown saat diklik
              >
                Quest Alcanez
              </Link>
            </li>
          </ul>
        </div>
      )}

      <div className="hidden bg-gray-200 text-black w-64 min-h-screen md:flex md:flex-col md:px-5">
        <h2 className="text-2xl font-bold mb-6">Sil V1</h2>
        <ul>
          <Link
            href="../quest-center"
            className="block hover:bg-gray-500 p-2 rounded hover:text-white"
            onClick={closeSidebar}
          >
            Quest Center
          </Link>
          <Link
            href="../quest-letter"
            className="block hover:bg-gray-500 p-2 rounded hover:text-white"
            onClick={closeSidebar}
          >
            Quest Letter
          </Link>
          <Link
            href="../quest-alcanez"
            className="block hover:bg-gray-500 p-2 rounded hover:text-white"
            onClick={closeSidebar}
          >
            Quest Alcanez
          </Link>
        </ul>
      </div>
    </div>
  );
}
