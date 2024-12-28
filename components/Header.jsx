import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <Link href={"/"}>
                <h1 className="text-4xl font-semibold cursor-pointer">
                    Sumit<span className="text-accent">.</span>
                </h1>
            </Link>

            {/* desktop nav: change to xl */}
            <div className="hidden md:flex items-center gap-8">
                <Nav />
                <Button href={"/contact"} variant="ghost" size="sm">
                    Contacts
                </Button>
            </div>

            {/* mobile nav */}
            <div className="md:hidden">
                <Nav />
            </div>

        </div>
    </header>
  )
}

export default Header