import React, { useState } from "react";
import signupImage from "../assets/loginImage.png";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="w-32 text-2xl font-bold text-[#04843C]">SkilVerse</div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <select className="appearance-none bg-transparent pr-8 text-gray-600 font-medium focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md text-base">
                <option>English</option>
                <option>Tamil</option>
                <option>Sinhala</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
              className="text-[#04843C] text-base font-bold px-3 py-1 rounded-md hover:bg-green-600 hover:text-white transition duration-200"
            >
              Sign in
            </a>
            <a
              href="#"
              className="text-[#04843C] bg-gray-100 text-base font-medium px-4 py-1.5 rounded-md shadow-lg hover:bg-green-600 hover:text-white transition duration-200"
            >
              Register
            </a>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-grow flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 py-10 md:py-20">
        {/* Left Side */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <div className="max-w-md mx-auto md:mx-0">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Join SkilVerse Today
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Start building your professional network and unlock endless
              opportunities with SkilVerse.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              We offer a modern and user-friendly experience to help you grow
              your career and connect with like-minded professionals.
            </p>

            <div className="mt-10">
              <img
                src={signupImage}
                alt="People collaborating on laptop"
                className="w-full max-w-md rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Right Side (Sign Up Form) */}
        <div className="w-full md:w-1/2 flex items-center">
          <div className="p-5 rounded-lg max-w-md mx-auto w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Create Your Account
            </h2>
            <form>
              {/* Name */}
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="shadow-md shadow-green-100 w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Email or Phone */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-gray-700 mb-2"
                >
                  Email or Phone
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter Email or Phone"
                  className="shadow-md shadow-green-100 w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Password */}
              <div className="mb-3 relative">
                <label
                  htmlFor="password"
                  className="block text-base font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Create a password"
                  className="shadow-md shadow-green-100 w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M3 3l3.59 3.59A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Terms Agreement */}
              <p className="text-sm text-gray-500 mt-4 mb-6">
                By clicking <span className="font-semibold text-[#04843C]">Join</span>, 
                you agree to the SkilVerse{" "}
                <a href="#" className="text-[#04843C] hover:underline">
                  User Agreement
                </a>
                ,{" "}
                <a href="#" className="text-[#04843C] hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#04843C] hover:underline">
                  Cookie Policy
                </a>
                .
              </p>

              <button
                type="submit"
                className="w-full bg-[#04843C] text-white text-lg mt-3 py-2.5 rounded-md hover:bg-green-600 transition duration-200 font-medium"
              >
                Agree & Join
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="mb-4 md:mb-0">
            © 2023 SkilVerse. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-[#04843C] transition duration-200">
              About
            </a>
            <a href="#" className="hover:text-[#04843C] transition duration-200">
              Terms of Use
            </a>
            <a href="#" className="hover:text-[#04843C] transition duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#04843C] transition duration-200">
              Cookie Policy
            </a>
            <a href="#" className="hover:text-[#04843C] transition duration-200">
              Copyright Policy
            </a>
            <a href="#" className="hover:text-[#04843C] transition duration-200">
              Brand Policy
            </a>
            <a href="#" className="hover:text-[#04843C] transition duration-200">
              KBVC Controls
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SignUp;
