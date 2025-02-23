"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { Cross2Icon } from "@radix-ui/react-icons";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Service", href: "/service" },
    { name: "Partners", href: "/parteners" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className={`fixed inset-0 bg-black/50 transition-opacity duration-700 ${isOpen ? "opacity-100" : "opacity-0"}`} />

        {/* Sidebar dengan efek smooth */}
        <Dialog.Content className={`fixed top-0 right-0 h-full z-20 w-52 bg-primary p-4 shadow-lg transform transition-transform duration-700 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          {/* Aksesibilitas untuk Screen Reader */}
          <Dialog.Title asChild>
            <VisuallyHidden>Navigation Menu</VisuallyHidden>
          </Dialog.Title>

          {/* Header Sidebar */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-xl font-bold">Menu</div>
            <button onClick={onClose} className="text-[#212121]">
              <Cross2Icon className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Navigasi */}
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link href={item.href} key={item.href} className={`p-2 transition-colors duration-300 ${pathname === item.href ? "border-b-2 border-b-black font-bold" : "hover:border-b-black hover:border-b-2 hover:font-bold"}`} onClick={onClose}>
                {item.name}
              </Link>
            ))}
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
