import React from 'react'
import { ProgramesData } from '../../../Data/ProgramesData'
import { FaArrowRight } from "react-icons/fa6";

function Programes() {
    return (
        <div className='bg-[#F5F5F5]'>
            <section className="container mx-auto px-4 mt-20" id="programes">
                <div className='flex flex-col lg:flex-row lg:justify-between justify-start lg:items-center items-start' >
                    <div className='pt-10'>
                        <span className='text-[#7A7A7A] text-xs '>CURATED PROGRAMS</span>
                        <h6 className='text-[#8B5E3C] italic text-3xl font-serif'>Select Your Ritual</h6>
                    </div>
                    <div>
                        <p className='text-[#7A7A7A] text-sm'>Discover our carefully selected programs designed
                            to meet your unique fitness goals.</p>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10'>
                    {ProgramesData.map((programes) => (
                        <div key={programes.id} className='bg-white rounded-lg shadow-md overflow-hidden 
            flex flex-col h-full'>
                            <img src={programes.image} alt={programes.title} className='w-full h-[520px] object-cover' />
                            <h3 className='text-[#8B5E3C] font-medium p-3 text-lg font-serif font-bold'>{programes.title}</h3>
                            <p className='text-[#7A7A7A] px-3 text-xs'>{programes.description}</p>
                            <button className='p-3 text-sm font-bold flex items-center gap-2
                        text-[#8B5E3C] cursor-pointer'>Learn More <FaArrowRight /></button>

                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Programes
