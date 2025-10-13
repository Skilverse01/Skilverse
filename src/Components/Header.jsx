import React from 'react'
export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="w-32 text-xl font-bold text-green-600">SkilVerse</div>
        <div className="flex items-center gap-6">
          <div className="relative">
            <select className="appearance-none bg-transparent pr-8 text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md text-sm">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          <a
            href="#"
            className="text-green-600 hover:text-green-700 text-sm font-medium px-3 py-1 rounded-md hover:bg-green-50 transition duration-200"
          >
            Sign in
          </a>
          <a
            href="#"
            className="bg-green-600 text-white text-sm font-medium px-4 py-1.5 rounded-md hover:bg-green-700 transition duration-200"
          >
            Register
          </a>
        </div>
      </div>
    </header>
  )
}
