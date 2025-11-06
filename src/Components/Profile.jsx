"use client";
import React from "react";
import {
  FaHome,
  FaUserFriends,
  FaEnvelope,
  FaBell,
  FaPen,
  FaCaretDown,
} from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import Logo from "../assets/logo.png";
import Profile from "../assets/profile.webp";
import { FaEye, FaChartBar ,  FaCheck } from "react-icons/fa";
import WSO2 from "../assets/wso2.png";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-[#f3f2ef] flex flex-col">
      {/* 🔹 Navbar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2">
          {/* Left Section */}
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="SkillVerse"
              className="h-19 w-auto object-contain"
            />
            <div className="hidden md:flex items-center bg-gray-100 rounded-md px-3 py-1 w-64 lg:w-80">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-sm text-gray-700 w-full focus:outline-none px-2"
              />
               <IoMdSearch className="text-gray-500 text-lg" />
            </div>
          </div>

          {/* Right Section - Navigation */}
          <nav className="flex items-center gap-5 sm:gap-6 text-gray-600">
            {[
              { icon: <FaHome />, label: "Home" },
              { icon: <FaUserFriends />, label: "Connections" },
              { icon: <FaEnvelope />, label: "Messages" },
              { icon: <FaBell />, label: "Notify" },
            ].map((item, i) => (
              <button
                key={i}
                className="hover:text-green-700 flex flex-col items-center text-xs"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="hidden sm:block font-semibold">
                  {item.label}
                </span>
              </button>
            ))}

            {/* Profile Dropdown */}
            <div className="flex flex-col items-center text-xs cursor-pointer relative">
              <img
                src={Profile}
                alt="Profile"
                className="h-8 w-8 rounded-full border border-gray-300 object-cover"
              />
              <div className="flex items-center mt-0.5 text-gray-700 font-semibold">
                <span className="hidden sm:block">Me</span>
                <FaCaretDown className="ml-1 text-xs hidden sm:block" />
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden bg-gray-100 flex items-center px-3 py-2 mx-4 mt-1 mb-2 rounded-md">
          <IoMdSearch className="text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-sm text-gray-700 w-full focus:outline-none px-2"
          />
        </div>
      </header>

      {/* 🔹 Profile Content */}
      <main className="w-full flex justify-center mt-15 px-2 sm:px-5 ">
        <div className="w-full max-w-4xl space-y-5">
          <section className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="relative">
              <div className="h-36 sm:h-40 bg-[#cdeeea] " />
              <p className="absolute top-3 right-4 text-sm text-gray-600 font-medium">
                Enhance Your cover photo
              </p>

              <div className="absolute -bottom-10 left-6">
  <div className="relative ">
    <img
      src={Profile} 
      alt="Profile"
      className="w-40 h-40  rounded-full border-4 border-white object-cover shadow-sm"
    />
    <button className="absolute bottom-4 right-0 bg-white p-1.5 rounded-full shadow hover:bg-gray-100">
      <FaPen className="text-gray-600 text-xs" />
    </button>
  </div>
</div>

            </div>

            <div className="pt-14 pb-6 px-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Himaya Ekanayake
              </h2>
              <p className="text-gray-500 text-sm">
                Aspiring Full-Stack Developer
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {["Open to", "Profile details", "Edit"].map((btn, i) => (
                  <button
                    key={i}
                    className="px-4 py-1.5 text-sm border border-gray-300 rounded-full hover:bg-[#2DB6A4] bg-[#cdeeea] font-medium"
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Activity Section */}
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <h2 className="text-lg font-semibold text-gray-800">Activity</h2>
              <button className="flex items-center gap-2 bg-gray-100 text-gray-700 border border-gray-300 hover:bg-[#cdeeea]  px-3 py-1.5 rounded-md text-sm">
                <FaPen className="text-xs" /> Create Post
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-3">No recent activities yet.</p>
            <button className="mt-3 text-green-700 text-sm font-medium hover:underline">
              Show all Activities →
            </button>
          </section>

         
         {/* Analytics Section */}
<section className="bg-white rounded-lg border border-gray-200 px-6 pt-5 pb-3">
  <h2 className="text-base font-semibold text-gray-800 mb-4 flex items-center gap-2">
    Analytics
    <FaEye className="text-gray-500 text-sm" />
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-2 text-left sm:text-left text-gray-700 mb-4">
    <div>
      <p className="text-sm font-medium text-gray-700 flex items-center gap-1">
        <FaUserFriends className="text-lg" /> <span>0 Profile Views</span>
      </p>
      <p className="text-sm text-gray-500 mt-1">
        Update to Your Profile Views
      </p>
    </div>
    <div>
      <p className="text-sm font-medium text-gray-700 flex items-center gap-1">
         <FaChartBar className="text-gray-600 text-lg mr-2" />
         <span>0 Post Impressions</span>
      </p>
      <p className="text-sm text-gray-500 mt-1">
        Start a post to increase your engagement
      </p>
    </div>
  </div>

  <div className="border-t border-green-100 mt-2 pt-3 text-center">
    <button className="text-green-700 text-sm font-medium hover:underline">
      Show all Analytics →
    </button>
  </div>
</section>

{/* Interests Section */}
<section className="bg-white rounded-lg border border-gray-200 px-6 pt-5 pb-4">
  <h2 className="text-base font-semibold text-gray-800 mb-3 flex items-center gap-2">
    Interests
  </h2>

  <h3 className="text-sm font-semibold text-green-700 mb-3 hover:underline cursor-pointer">
    Companies
  </h3>

  <div className="border-t border-gray-100  flex justify-between items-center">
    <div className="flex items-center gap-3">
      <img
        src={WSO2}
        alt="WSO2"
        className="w-15 h-15 object-contain"
      />
      <div>
        <p className="font-semibold text-gray-800 text-sm">WSO2</p>
        <p className="text-gray-500 text-xs">1,007,444 followers</p>
         <button className="px-5 py-2 mt-2 flex bg-[#2DB6A4] text-black font-bold text-xs rounded-full hover:bg-[#038573]  ">
           <span className="w-4 h-4 flex items-center justify-center bg-black text-white rounded-full ">
    <FaCheck className="text-[10px] " />
  </span>
       Following
    </button>
      </div>
    </div>
   
  </div>
</section>


     
        </div>
      </main>

      {/* 🔹 Footer */}
      <footer className="w-full mt-5 bg-white border-t border-gray-200 py-5 ">
        <div className="text-center text-gray-500 text-xs sm:text-sm">
          © 2025 SkillVerse. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;
