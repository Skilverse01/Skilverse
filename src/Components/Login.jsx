import React, { useState } from "react";
import loginImage from "../assets/loginImage.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className=" bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="w-32 text-2xl font-bold text-[#04843C]">SkilVerse</div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <select className="appearance-none bg-transparent pr-8 text-gray-600 font-medium focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md text-base">

                <option>English</option>
                <option>Tamil</option>
                <option>Sinhala</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 ">
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
              className="text-[#04843C]  text-base font-bold px-3 py-1 rounded-md hover:bg-green-600 hover:text-white transition duration-200"
            >
              Sign in
            </a>
            <a
              href="#"
              className="text-[#04843C] bg-gray-100 text-base font-medium px-4 py-1.5 rounded-md shadow-lg  hover:bg-green-600 hover:text-white transition duration-200"
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
              Welcome to SkilVerse
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Here, we believe that building a strong professional network
              begins with your participation.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              We are delighted to offer a modern and user-friendly service to 
              ensure you have the best experience.
            </p>
            <button className=" py-2 text-[#04843C] text-lg  font-medium rounded-md hover:bg-gray-100 hover:text-[#037334] transition duration-200">
              Join Now!
            </button>

            {/* Image */}
            <div className="mt-10">
              <img
                src={loginImage}
                alt="Person working on laptop with nature background"
                className="w-full max-w-md rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Right Side (Login Form) */}
        <div className="w-full md:w-1/2 flex items-center">
          <div className=" p-5 rounded-lg max-w-md mx-auto w-full ">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign in</h2>
            <form>
              <div className="mb-5 ">
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
                  className="  shadow-md shadow-green-100 mb-3  w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Password Field */}
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
                  placeholder="Password"
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
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
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

              <div className="flex justify-end mb-6">
                <a
                  href="#"
                  className="text-base text-[#04843C] hover:text-green-700 hover:underline"
                >
                  Recover Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#04843C] text-white text-lg mt-3 py-2.5 rounded-md hover:bg-green-600 transition duration-200 font-medium"
              >
                Sign In
              </button>
            </form>

            {/* Social Login */}
            <div className="mt-8 text-center relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative">
                <span className="px-4 bg-white text-sm text-gray-500">
                  Or Continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-3">
  {/* Google */}
  <button className="flex justify-center items-center p-2.5 border border-gray-200 rounded-md bg-white shadow-sm hover:shadow-green-400/50 hover:bg-green-50 transition duration-200">
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  </button>

  {/* Twitter */}
  <button className="flex justify-center items-center p-2.5 border border-gray-200 rounded-md bg-white shadow-sm hover:shadow-sky-400/50 hover:bg-sky-50 transition duration-200">
    <svg
      className="w-5 h-5 text-sky-400"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.16a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  </button>

  {/* Facebook */}
  <button className="flex justify-center items-center p-2.5 border border-gray-200 rounded-md bg-white shadow-sm hover:shadow-blue-600/50 hover:bg-blue-50 transition duration-200">
    <svg
      className="w-5 h-5 text-blue-600"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  </button>

  {/* Apple */}
  <button className="flex justify-center items-center p-2.5 border border-gray-200 rounded-md bg-white shadow-sm hover:shadow-gray-600/50 hover:bg-gray-50 transition duration-200">
    <svg
      className="w-5 h-8 text-gray-800"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.365 1.43c0 1.14-.423 2.187-1.19 3.024-.766.837-1.83 1.364-2.93 1.29a3.34 3.34 0 0 1-.03-.56c0-1.1.478-2.187 1.286-3.013.765-.828 2.012-1.42 2.956-1.462.013.24.01.483-.01.72h-.082zM20.71 17.26c-.42.97-.935 1.85-1.54 2.63-.807 1.03-1.63 2.06-2.912 2.06-1.057 0-1.46-.68-2.73-.68-1.28 0-1.72.68-2.785.68-1.29 0-2.12-1.14-2.935-2.17C7.14 18.94 5.66 15.5 7.01 12.59c.97-2.11 2.787-3.44 4.756-3.44 1.226 0 2.307.79 2.746.79.397 0 1.612-.96 2.795-.96.41 0 2.006.04 3.02 1.52-.078.05-1.773 1.035-1.618 3.18.175 2.47 2.17 3.25 2.99 3.58z" />
    </svg>
  </button>
</div>


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

export default Login;
