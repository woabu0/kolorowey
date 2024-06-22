import React from "react";
import { Navbar } from "../Navbar/Navbar";

export const Loginpage = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[360px] md:w-[500px] m-auto mt-10">
        <div className="p-7 md:p-10 rounded-[8px] border-[2px] border-[#be4dec]">
          <div className="flex flex-col gap-2">
            <label>Email:</label>
            <input
              type="text"
              placeholder="Enter your Email"
              className="w-full h-[48px] rounded-lg border-black border-[2px] focus:outline-[#be4dec] px-3"
            />
          </div>
          <div className="flex flex-col mt-5 gap-2">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-full h-[48px] rounded-lg border-black border-[2px] focus:outline-[#be4dec] px-3"
            />
          </div>
          <p className="text-[10px] md:text-[14px] text-center mt-3">Forgot Password?</p>
          <button className="w-full h-[48px] mt-5 bg-[#be4dec] rounded-[8px] hover:border-[#be4dec] hover:border-[2px] hover:bg-white hover:text-black text-white transition-all">
            LOG IN
          </button>
          <p className="text-[10px] md:text-[14px] text-center mt-3">New to Kolorowey? <span className="text-[#be4dec]">Create new account</span></p>
        </div>
      </div>
    </div>
  );
};
