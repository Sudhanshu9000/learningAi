import React from "react";

const UpSidebar = () => {
  return (
   
    <div className="w-72 h-full bg-black text-white fixed left-0 top-0">
       <div>
      <ul className="mt-4 ">
        <li className="mb-4 pl-5 flex items-center">
          <img
            src="verified.png"
            alt="company logo"
            className="w-14 h-14 mr-2"
          />
          
          <h1 className="text-3xl ">Learn AI</h1>
        </li>
        <li className="mb-4 pl-8 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
            <path d="M16.7574 2.99677L9.29145 10.4627L9.29886 14.7098L13.537 14.7024L21 7.23941V19.9968C21 20.5491 20.5523 20.9968 20 20.9968H4C3.44772 20.9968 3 20.5491 3 19.9968V3.99677C3 3.44448 3.44772 2.99677 4 2.99677H16.7574ZM20.4853 2.09727L21.8995 3.51149L12.7071 12.7039L11.2954 12.7063L11.2929 11.2897L20.4853 2.09727Z"></path>
          </svg> Create Course
          </li>
        <li className="mb-4 pl-8 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
             <path d="M4 2H20C20.5523 2 21 2.44772 21 3V22.2763C21 22.5525 20.7761 22.7764 20.5 22.7764C20.4298 22.7764 20.3604 22.7615 20.2963 22.7329L12 19.0313L3.70373 22.7329C3.45155 22.8455 3.15591 22.7322 3.04339 22.4801C3.01478 22.4159 3 22.3465 3 22.2763V3C3 2.44772 3.44772 2 4 2ZM12 13.5L14.9389 15.0451L14.3776 11.7725L16.7553 9.45492L13.4695 8.97746L12 6L10.5305 8.97746L7.24472 9.45492L9.62236 11.7725L9.06107 15.0451L12 13.5Z"></path>
             </svg> Saved
             </li>
      </ul>
      </div>

      <ul className="mb-4 mt-24">
      <li className="mb-4 pl-5 flex items-center">
        <h1 className="text-stone-400 font-bold text-xl">History</h1>
          </li>
      <li className="mb-4 pl-8">
        <button className="flex items-center hover:bg-slate-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2"><path d="M16.8 19L14 22.5L11.2 19H6C5.44772 19 5 18.5523 5 18V7.10256C5 6.55028 5.44772 6.10256 6 6.10256H22C22.5523 6.10256 23 6.55028 23 7.10256V18C23 18.5523 22.5523 19 22 19H16.8ZM2 2H19V4H3V15H1V3C1 2.44772 1.44772 2 2 2Z"></path>
          </svg> Master NextJs
        </button>
          </li>
      </ul>
    </div>
  );
};

export default UpSidebar;
