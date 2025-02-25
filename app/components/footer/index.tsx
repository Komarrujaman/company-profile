import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#212121] text-white py-10">
      <div className="w-full px-5 md:px-10 lg:px-20">
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#FFC107]">Our Company</h2>
            <p className="text-sm leading-relaxed">We provide innovative IoT and automation solutions to help businesses streamline their operations and improve efficiency.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-[#FFC107]">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#00E676] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#00E676] transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00E676] transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00E676] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-[#FFC107]">Contact Us</h2>
            <ul className="space-y-2">
              <li>4 Privet Drive, Little Whinging</li>
              <li>310790, Great Britain</li>
              <li>Phone: (+44) 98 871 571 07</li>
              <li>Email: ourmail@mail.com</li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-[#FFC107]">Follow Us</h2>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-[#00E676] transition-all duration-300">
                <FaFacebookF />
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-[#00E676] transition-all duration-300">
                <FaTwitter />
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-[#00E676] transition-all duration-300">
                <FaInstagram />
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-[#00E676] transition-all duration-300">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} IoT & Automation Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
