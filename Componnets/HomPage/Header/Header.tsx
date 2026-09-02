"use client";
import React from "react";

const Header = () => {
  return (
    <header
      className="container mx-auto px-4 rounded-xl relative w-full h-screen flex items-center 
      bg-[url('/Header/header.png')] bg-center bg-cover mt-2 lg:mt-5"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/50"></div>

      {/* Content على الشمال */}
      <div className="relative w-full px-10 flex flex-col items-start text-white">

        <div className="max-w-xl"> 
          <h1 className="text-4xl md:text-2xl lg:text-5xl font-bold text-[#8B5E3C] italic text-shadow-lg font-serif">
            Transform your body safely and confidently
          </h1>

          <p className="text-lg mt-4 text-[#8B5E3C] ">
            A curated approach to fat loss and sculpting designed specifically
            for the female physiology promoting longevity and growth.
          </p>

          <div className="mt-10 flex flex-col lg:flex-row gap-4">
            <button className="w-full bg-[#8B5E3C] text-[#E6D5C3] px-4 py-2 rounded-full font-bold text-md">
              Start your journey
            </button>

            <button className="w-full text-[#8B5E3C] px-4 py-2 rounded-full font-bold text-md">
               Explore Programs
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;