import React from "react";
import "./App.css";
import { Mail, Linkedin } from "lucide-react";

const App = () => {
  return (
    <main>
      <div className="flex flex-col w-[550px] h-[868px] mx-auto justify-center items-center flex-shrink-0 bg-[#23252C]">
        <div className="flex flex-col flex-shrink-0 w-[317px] h-[780px] justify-start items-center bg-[#1A1B21] rounded-t-lg">
          <img
            src="/images/rj.jpeg"
            alt="Profile"
            className="w-[317px] h-[317px] flex-shrink-0 rounded-t-lg"
          />
          <h1 className="text-white text-2xl font-bold mt-4">Rajat Pandey</h1>
          <h2 className="text-[#F3BF99] text-xl">Frontend Developer</h2>
          <p className="text-[#F5F5F5] text-base mt-2">rajatpandey.com</p>
          <div className="flex gap-4 mt-4">
            <button className="flex items-center gap-2 px-6 py-2 bg-white border border-[#D1D5DB] rounded-md text-[#374151] font-medium shadow hover:bg-gray-100 transition">
              <Mail size={20} />
              Email
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-[#5093E2] rounded-md text-white font-medium shadow hover:bg-blue-600 transition">
              <Linkedin size={20} />
              LinkedIn
            </button>
          </div>
          <div className="w-full px-6">
            <h2 className="text-white text-xl font-normal mt-6 text-left">
              About
            </h2>
            <p className="text-[#DCDCDC] text-xs mt-2 text-left">
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
            <h2 className="text-white text-xl font-normal mt-6 text-left">
              About
            </h2>
            <p className="text-[#DCDCDC] text-xs mt-2 text-left">
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
