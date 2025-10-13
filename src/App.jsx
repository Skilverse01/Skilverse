import React from 'react'
import { Header } from './Components/Header'
import { LoginForm } from './Components/LoginForm'
import { Footer } from './Components/Footer'
import loginImage from "./assets/loginImage.png";

 function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 py-10 md:py-20">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <div className="max-w-md mx-auto md:mx-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Welcome to SkilVerse
            </h1>
            <p className="text-lg text-gray-600 mb-3">
              Here, we believe that building a strong professional network
              begins with your participation.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We are delighted to offer a modern and user-friendly service to
              ensure you have the best experience.
            </p>
            <button className="px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition duration-200">
              Join Now!
            </button>
            <div className="mt-10">
  <img
    src={loginImage}
    alt="Person working on laptop with nature background"
    className="w-full max-w-md rounded-lg shadow-md"
  />
</div>

          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center">
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
export default App;