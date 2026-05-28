import React from 'react'
import { footerLinks, socialLinks } from '@/Data/FooterData'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#f8f4ef] border-t border-[#e6d9cf] py-5 container mx-auto px-4 mt-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div>
          <Link className="text-2xl italic font-serif text-[#8b5a44]" href="/">
            Engy Fitness
          </Link>
        </div>
        {/* Links */}
        <div className="flex flex-row justify-center items-center gap-4 text-[#8b5a44] text-lg">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.link} target="_blank" >
              <span>{link.icon}</span>
            </a>
          ))}
        </div>
        <div>
          <ul className="flex flex-wrap items-center gap-2 text-sm text-[#7d6e66] uppercase tracking-wide">
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