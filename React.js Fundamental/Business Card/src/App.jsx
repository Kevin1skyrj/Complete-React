import React from "react";
import "./App.css";

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
        <h1 className="text-white text-3xl font-bold mt-4">Rajat Pandey</h1>
        <h2 className="text-[#F3BF99] text-xl">Frontend Developer</h2>
        <p className="text-[#F5F5F5] text-base mt-2">rajatpandey.com</p>
        
       </div>
      </div>
    </main>
  );
};

export default App;
