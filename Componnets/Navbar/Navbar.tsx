"use client";
import React, { useState } from 'react'
import { IoFitness } from "react-icons/io5";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='bg-[#E0D6CE] container mx-auto px-5 w-full h-16 shadow-md flex items-center 
    justify-between sticky top-0 left-0 z-10 rounded-full mt-2 lg:mt-5'>

      {/* Logo */}
      <a href='/' className='text-2xl font-medium italic text-[#8B5E3C] font-serif'>
        Engy Fitness
      </a>

      {/* Links (Desktop) */}
      <div className='hidden md:flex gap-4 text-sm font-medium text-[#8B5E3C]'>
        <a href='#'>Home</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
      </div>

      {/* Button (Desktop) */}
      <div className='hidden md:block'>
        <button className='px-4 py-2 text-sm font-medium rounded-full bg-[#8B5E3C] text-[#E6D5C3] cursor-pointer'>
          Start Ritual
        </button>
      </div>

      {/* Menu Icon (Mobile) */}
      <div className='md:hidden'>
        <button onClick={() => setOpen(!open)} className='text-[#8B5E3C] text-2xl'>
          <IoFitness size={30}/>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='absolute top-20 left-0 w-full bg-[#E0D6CE] text-[#8B5E3C] font-bold flex flex-col
         items-center gap-4 py-5 shadow-md md:hidden'>
          <a href='#' onClick={() => setOpen(false)}>Home</a>
          <a href='#about' onClick={() => setOpen(false)}>About</a>
          <a href='#contact' onClick={() => setOpen(false)}>Contact</a>

          <button className='px-4 py-2 text-sm font-medium rounded-full bg-[#8B5E3C] text-[#E6D5C3] cursor-pointer' >
            Start Ritual
          </button>
        </div>
      )}

    </nav>
  )
}

export default Navbar