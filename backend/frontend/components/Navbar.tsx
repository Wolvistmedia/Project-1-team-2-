"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion"
import Link from "next/link";
import { useRouter } from "next/navigation";

export const navLinks = [
  { name: "Product & Services", href: "/Services" },
  { name: "Team", href: "/Team" },
  { name: "Careers", href: "/Careers" },
  { name: "Blog", href: "/Blog" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter()
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full fixed top-6 flex justify-center z-50">

      <div className="flex items-center justify-between w-[90%] md:w-fit gap-6 px-6 py-3 
      rounded-full bg-white/20 backdrop-blur-lg border border-white/80 shadow-lg">


        <Link
          href={"/"}
          className="text-2xl font-bold cursor-pointer">
          777
        </Link>


        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex gap-7 text-black/90 text-sm">
          {navLinks.map((link, index) => (
            <span key={index}
              onClick={() => router.push(link.href)}
              className="cursor-pointer px-2 py-1 font-medium">
              {link.name}
            </span>
          ))}
        </motion.div>


        <button className="hidden md:block px-5 py-2 rounded-full text-white font-medium
        bg-linear-to-r from-[#3A1A86] to-[#6A51A5] shadow-md hover:scale-95 transition">
          Contact Us
        </button>


        <div className="md:hidden cursor-pointer" onClick={() => setOpen(true)}>
          ☰
        </div>
      </div>


      {open && (
        <div className="fixed inset-0 bg-black/30 z-40"></div>
      )}


      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-white shadow-lg z-50 
        transform transition-transform duration-300 
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-5 flex flex-col gap-5">


          <span className="self-end cursor-pointer text-xl" onClick={() => setOpen(false)}>
            ✕
          </span>

          {navLinks.map((link, index) => (
            <span key={index}
              onClick={() => router.push(link.href)}
              className="cursor-pointer text-lg">
              {link.name}
            </span>
          ))}

          <button className="mt-4 px-4 py-2 rounded-full bg-linear-to-r from-[#3A1A86] to-[#6A51A5] text-white">
            Contact Us
          </button>

        </div>
      </div>

    </motion.div>
  );
};

export default Navbar;