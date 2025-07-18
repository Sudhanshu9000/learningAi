import React from "react";

const Search = () => {
  return (
    <div className=" fixed bottom-0 w-full p-4 text-white">
      <div className="max-w-screen-md mx-auto">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Ask Learn AI"
            className="
          w-full 
          px-3 
          py-4
         bg-zinc-700
         text-white 
          rounded-md 
          focus:outline-none
         placeholder-gray-400
         focus:placeholder-gray-200 
         font-semibold
         pr-10
         "
          />
          <span className="absolute right-3 cursor-pointer hover:text-gray-300 transition-colors bg-zinc-500 hover rounded-lg p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M13.0001 7.82843V20H11.0001V7.82843L5.63614 13.1924L4.22192 11.7782L12.0001 4L19.7783 11.7782L18.3641 13.1924L13.0001 7.82843Z"></path>
            </svg>
          </span>
        </div>
      </div>
      <p className="text-center">
        Messages are generated by AI and may be inaccurate or inappropriate.
      </p>
    </div>
  );
};

export default Search;
