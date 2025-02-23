"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Our Service", href: "/service" },
    { name: "Partners", href: "/parteners" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <NavigationMenu.Root className="hidden md:flex space-x-2 text-lg font-bold mr-6">
      <NavigationMenu.List className="flex space-x-2">
        {menuItems.map((item) => (
          <NavigationMenu.Item key={item.href}>
            <Link
              href={item.href}
              className={`transition-colors duration-300 ${
                pathname === item.href
                  ? "border-b-2 border-b-black font-bold px-2 pb-2" // Style aktif
                  : "hover:border-b-black hover:border-b-2 hover:font-bold pb-2 px-2"
              }`}
            >
              {item.name}
            </Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
