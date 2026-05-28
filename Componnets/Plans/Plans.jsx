import React from 'react'
import { plansData } from '@/Data/Plans'
const Plans = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <section className="container mx-auto px-4 " id="plans">
                <div className="max-w-6xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <p className="uppercase tracking-[4px] text-sm text-[#9d7a67] mb-3 pt-10">
                            Invest In Yourself
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif italic text-[#8b5a44]">
                            Coaching Rituals
                        </h2>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {plansData.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative rounded-3xl p-8 transition
              ${plan.featured
                                        ? "bg-white border-2 border-[#a15f43] shadow-2xl scale-105"
                                        : "bg-[#fdfaf7] border border-[#eadfd6] hover:shadow-xl"
                                    }`}
                            >

                                {/* Badge */}
                                {plan.featured && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#9c5b3f] text-white px-5 py-1 rounded-full text-xs tracking-widest uppercase">
                                        Most Loved
                                    </div>
                                )}

                                <h3 className="text-2xl font-serif text-[#8b5a44] mb-2">
                                    {plan.title}
                                </h3>

                                <p className="text-[#8e8178] mb-8">
                                    {plan.desc}
                                </p>

                                <ul className="space-y-4 text-[#6d625c]">
                                    {plan.features.map((feature, i) => (
                                        <li key={i}>✓ {feature}</li>
                                    ))}
                                </ul>

                                {/* <button
                                    className={`mt-10 w-full py-3 rounded-full transition
                ${plan.featured
                                            ? "bg-gradient-to-r from-[#8b4d33] to-[#b66c4d] text-white shadow-lg hover:scale-[1.02]"
                                            : "border border-[#8b5a44] text-[#8b5a44] hover:bg-[#8b5a44] hover:text-white"
                                        }`}
                                >
                                    {plan.button}
                                </button> */}
                            </div>
                        ))}
                    </div>

                
                </div>
            </section>
        </div>
    )
}

export default Plans
