import Link from 'next/link'
import React from 'react'

const MemberShip = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <section className="container mx-auto px-4 " id="membership">

                {/* Bottom CTA */}
                <div className="mt-24 bg-[#ead7cf] rounded-[40px] py-20 px-8 text-center">

                    <h2 className="text-4xl md:text-5xl font-serif italic text-[#8b5a44] mb-6">
                        Ready to transform your lifestyle?
                    </h2>

                    <p className="text-[#7a6c65] max-w-2xl mx-auto mb-10">
                        Every coaching experience is tailored to your unique goals,
                        lifestyle, and journey.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

                        <a href="https://www.instagram.com/coachengy?igsi=dWpua3p2aGlkbGhl" target='_blank'
                         className="bg-[#8b4d33] text-white px-8 py-4 rounded-full shadow-xl hover:scale-105
                          transition">
                            Apply for Coaching
                        </a>

                        <Link href ="/BodyFatCalc" className="bg-white text-[#8b5a44] px-8 py-4 
                        rounded-full hover:bg-[#f7f1ec] transition">
                            Explore Free Resources
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default MemberShip
