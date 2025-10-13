import React from 'react'
export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="mb-4 md:mb-0">© 2023 SkilVerse. All rights reserved.</div>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="hover:text-gray-700 transition duration-200">
            About
          </a>
          <a href="#" className="hover:text-gray-700 transition duration-200">
            Terms of Use
          </a>
          <a href="#" className="hover:text-gray-700 transition duration-200">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-700 transition duration-200">
            Cookie Policy
          </a>
          <a href="#" className="hover:text-gray-700 transition duration-200">
            Copyright Policy
          </a>
          <a href="#" className="hover:text-gray-700 transition duration-200">
            Brand Policy
          </a>
          <a href="#" className="hover:text-gray-700 transition duration-200">
            KBVC Controls
          </a>
        </div>
      </div>
    </footer>
  )
}