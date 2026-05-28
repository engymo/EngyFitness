import React from 'react'

const About = () => {
  return (
    <section
      className='container mx-auto px-4
      flex flex-col lg:flex-row items-center mt-20' id='about'
    >

      {/* Image Section */}

      <div className='flex-1'>
        <img
          src="/AboutMe/coachengy.jpg"
          className='w-full max-w-[50%] object-cover mx-auto lg:mx-0 rounded-lg'
          alt="About Me"
        />
      </div>

      {/* Text Section */}
      <div className='flex-1'>
        <h6 className='text-sm leading-5 text-[#7A7A7A]  mb-3' >Our Story</h6>
        <h2 className='text-4xl font-bold mb-6 text-[#8B5E3C] text-shadow-xs italic font-serif'>The Personal Path to Power</h2>
        <p className='text-sm leading-7 text-[#7A7A7A]'>
          My Journey didn't start with heavy weights; it started with recovery.
          After navigating my own path through injury, I realized the fitness
          industry often prioritizes hustle over health.
<br></br>
          At Engy Fitness, we believe in Injury-Safe Training. We don't just provide a workout, we curate a personalized plan that respects your
          body's unique architecture while delivering the sculpting results you desire.
<br></br>
          This is where sophistication meets strength. No shouting coaches.
          Just intentional progress
        </p>
        <hr className='my-8 border-[#E0D6CE]' />
        <div className='flex justify-around'>
          <div className='flex flex-col gap-2'>
            <span className='text-2xl font-bold text-[#8B5E3C]'>500 +</span>
            <span className='text-sm text-[#7A7A7A]'>Clients Trained</span>
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-2xl font-bold text-[#8B5E3C]'>10 +</span>
            <span className='text-sm text-[#7A7A7A]'>Years of Experience</span>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About