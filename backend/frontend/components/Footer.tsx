"use client"

import Link from "next/link"
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

function Footer() {
    return (
        <footer className="w-full">

            {/* TOP BAR */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-16 py-6 bg-gray-100">

              
                  {/* Logo */}
                <div className="text-[#3A1A86] font-bold text-xl tracking-wide">
                    777
                </div>

                {/* Email */}
                <div className="text-gray-700 text-sm">
                    info@777.com
                </div>
              

                {/* Social */}
                <div className="flex items-center gap-4 text-[#3A1A86]">
                    <span className="text-gray-600 text-sm mr-2">Follow us on</span>

                    <a href="https://linkedin.com" target="_blank">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://facebook.com" target="_blank">
                        <FaFacebookF className="w-5 h-5 cursor-pointer hover:scale-110 hover:text-black transition" />
                    </a>
                    <a href="https://x.com" target="_blank">
                        <FaTwitter className="w-5 h-5 cursor-pointer hover:scale-110 hover:text-black transition" />
                    </a>
                    <a href="https://instagram.com" target="_blank">
                        <FaInstagram className="w-5 h-5 cursor-pointer hover:scale-110 hover:text-black transition" />
                    </a>
                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="bg-linear-to-r from-[#3A1A86] to-[#6A51A5] text-white text-center py-6 px-4">

                {/* Links */}
                <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-sm mb-4">

                    <Link
                    href={'/'}
                    className="cursor-pointer hover:underline">Home</Link>
                    <span>|</span>
                    <Link 
                    href={'/Services'}
                    className="cursor-pointer hover:underline">Product & Services</Link>
                    <span>|</span>
                    <Link 
                    href={'/Team'}
                    className="cursor-pointer hover:underline">Teams</Link>
                    <span>|</span>
                    <Link 
                    href={'/Careers'}
                    className="cursor-pointer hover:underline">Careers</Link>
                    <span>|</span>
                    <Link
                    href={'/Contact'}
                    className="cursor-pointer hover:underline">Contact Us</Link>
                    <span>|</span>
                    <Link 
                    href={'/Privacy'}
                    className="cursor-pointer hover:underline">Privacy Policy</Link>

                </div>

                {/* Copyright */}
                <p className="text-xs text-gray-300">
                    © 2026 777. All Rights Reserved
                </p>

            </div>

        </footer>
    )
}

export default Footer