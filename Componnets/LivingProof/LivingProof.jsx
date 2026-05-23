import React from 'react'
import { testimonials } from '../../Data/LivingProof'


const LivingProof = () => {
    return (
        <>
            <section className="container mx-auto px-4 mt-20" id="#livingproof">

                {/* Heading */}
                <div className="text-center mb-14">
                    <p className="uppercase tracking-[4px] text-[#A18474] text-sm">
                        Evidence Of Progress
                    </p>

                    <h2 className="text-4xl md:text-5xl italic text-[#7B4B39] mt-3 font-serif ">
                        Living Proof
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 lg:mt-10 mt-5">

                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                           className={`space-y-10 ${item.lift ? "lg:-mt-12" : ""}`}
                        >

                            {/* Image */}
                            <div className="relative overflow-hidden rounded-xl h-[320px] shadow-md">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />

                                {item.duration && (
                                    <span className="absolute bottom-3 right-3 bg-[#A4573F] text-white 
                                    text-xs px-3 py-1 rounded-full ">
                                        {item.duration}
                                    </span>
                                )}
                            </div>

                            {/* Review Card */}
                            {item.review && (
                                <div
                                    className={`rounded-xl p-6 min-h-[100px] flex flex-col justify-between shadow-md
                  ${item.darkCard
                                            ? "bg-[#8E4C38] text-white"
                                            : "bg-white text-[#5F5A56] shadow-sm"
                                        }`}
                                >
                                    <div>
                                        <div
                                            className={`text-lg mb-1 ${item.darkCard
                                                    ? "text-[#F3D18C]"
                                                    : "text-[#B88A44]"
                                                }`}
                                        >
                                            ★★★★★
                                        </div>

                                        <p className="leading-7 text-sm">
                                            "{item.review}"
                                        </p>
                                    </div>

                                    <h4
                                        className={`mt-5 font-semibold ${item.darkCard
                                                ? "text-white"
                                                : "text-[#5A4036]"
                                            }`}
                                    >
                                        — {item.name}
                                    </h4>
                                </div>
                            )}

                        </div>
                    ))}

                </div>
            </section>
        </>
    )
}

export default LivingProof
