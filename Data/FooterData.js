import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";


export const footerLinks = [
  "Privacy Policy",
  "Terms of Ritual",
]

export const socialLinks = [
  {
    icon: <IoLogoInstagram />
,
    link: "https://www.instagram.com/coachengy?igsh=dWpua3p2aGlkbGhl&utm_source=qr",
    style: "text-2xl color-red-400 hover:text-[#9c5b3f] transition"
  },
  {
    icon: <FaSquareFacebook />
,
    link: "https://www.facebook.com/share/1NMGchmUcz/?mibextid=wwXIfr",
    style: "text-2xl color-blue-400 hover:text-[#9c5b3f] transition"
  },
  {
    icon: <IoLogoWhatsapp />
,
    link: "https://wa.me/201224288118",
    style: "text-2xl color-green-400 hover:text-[#9c5b3f] transition"
  },
]
