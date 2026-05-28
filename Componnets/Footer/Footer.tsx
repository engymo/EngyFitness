import React from 'react'
import { footerLinks, socialLinks } from '@/Data/FooterData'

const Footer = () => {
  return (
    <footer className="bg-[#f8f4ef] border-t border-[#e6d9cf] py-5 container mx-auto px-4 mt-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div>
          <h2 className="text-2xl italic font-serif text-[#8b5a44]">
            Engy Fitness
          </h2>
        </div>
        {/* Social + Copyright */}

        <div className="flex flex-row justify-center items-center gap-4 text-[#8b5a44] text-lg">

          {/* Instagram */}
          {socialLinks.map((link, index) => (
            <a key={index} href={link.link} target="_blank" >
              <span>{link.icon}</span>
            </a>
          ))}
        </div>
        {/* Links */}
        <div>
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#7d6e66] uppercase tracking-wide">
            {footerLinks.map((link, index) => (
              <li key={index} className="hover:text-[#8b5a44] transition cursor-pointer"  >
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>

    </footer>
  )
}
export default Footer  