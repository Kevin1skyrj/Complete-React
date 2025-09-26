import React from "react";

const Main = () => {
  
  return (
    <div>
      <form className="flex justify-center items-center mt-10 gap-2">
        <input
          type="text"
          placeholder="Add  an ingredient..."
          className="border border-gray-300 rounded-md p-2 flex-1 max-w-md"
        />
        <button
          type="submit"
          className="cursor-pointer bg-black text-white px-4 py-2 rounded-md  transition"
        >
          {" "}
          + Add ingredient{" "}
        </button>
      </form>
    </div>
  );
};

export default Main;
