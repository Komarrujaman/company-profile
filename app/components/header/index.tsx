"use client";

import { TbMenu2 } from "react-icons/tb";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { useState, useEffect } from "react";
import { RiCloseFill } from "react-icons/ri";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Menutup sidebar ketika layar diperbesar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Tutup sidebar saat layar >= 768px
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-primary text-[#212121] shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          <Image src="/icons/logo.svg" alt="Logo" width={110} height={110} />
        </div>
        <Navbar />
        <button className="md:hidden rounded-md bg-white p-2" onClick={() => setIsOpen(true)}>
          {isOpen ? <RiCloseFill /> : <TbMenu2 />}
        </button>
      </div>
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
