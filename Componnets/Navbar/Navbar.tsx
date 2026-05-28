"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoFitness } from "react-icons/io5";
import { navLinks } from "@/Data/navLinks"; 

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#E0D6CE] container mx-auto px-5 w-full h-16 shadow-md flex items-center 
    justify-between sticky top-0 left-0 z-10 rounded-full">

      {/* Logo */}
      <Link href="/" className="text-2xl font-bold italic text-[#8B5E3C] font-serif">
        Engy Fitness
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-4 lg:text-md text-sm font-semibold text-[#8B5E3C]">
        {navLinks.map((item, index) => (
          <Link key={index} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>

      {/* Button */}
      <div className="hidden md:block">
        <button className="px-4 py-2 text-md font-semibold rounded-full bg-[#8B5E3C] text-[#E6D5C3] cursor-pointer">
          Start Ritual
        </button>
      </div>

      {/* Mobile Icon */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="text-[#8B5E3C] text-3xl">
          <IoFitness size={30} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-[#E0D6CE] text-[#8B5E3C]
         font-bold flex flex-col items-center gap-4 py-5 shadow-md md:hidden">
          {navLinks.map((item, index) => (
            <Link key={index} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}

          <button className="px-4 py-2 text-sm font-medium rounded-full bg-[#8B5E3C] text-[#E6D5C3] cursor-pointer">
            Start Ritual
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;