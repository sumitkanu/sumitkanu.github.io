"use client";

import { SheetContent, Sheet, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci"

const links = [
    { name: "home", path: "/" },
    { name: "experiences", path: "/experiences" },
    { name: "projects", path: "/projects" },
    { name: "about", path: "/about" },
    { name: "contacts", path: "/contacts" },
];

const MobileNav = () => {
  return <Sheet>
    <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
    </SheetTrigger>
    <SheetContent className="flex flex-col">
        <div className="mt-20 mb-16 text-center text-2xl"> 
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Sumit <span className="text-accent">.</span>
                </h1>
            </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => {
                return <Link href={link.path} key={index} className={`${link.path === usePathname() && "text-accent border-b-2 border-accent"}  
                text-xl capitalize font-medium hover:text-accent transition-all`}>
                    {link.name}
                </Link>
            }
            )}
        </nav>
    </SheetContent>
  </Sheet>
}

export default MobileNav