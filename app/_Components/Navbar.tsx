"use client";
import { useEffect, useState } from "react";
import { Menu, Search } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNav(false);
      } else {
        // Scrolling up
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } h-28 flex bg-tranparent items-center justify-between z-50 `}
    >
      <div className="flex justify-center items-center gap-2 ml-10">
        <Image
          src="/logo/tsu-logo.webp"
          width={100} 
          height={100}
          alt="tsu-logo"
          className="h-12 w-12 md:h-20 md:w-20"
        />
        <h1 className="text-lg md:text-2xl text-foreground font-times  text-white">
          Tarlac State <br className="hidden md:block" /> University
        </h1>
      </div>
      <div className="flex h-full bg-primary ">

      <div className="flex items-center justify-center gap-4 px-5">
        <Search className="h-8 w-8 text-background" />
        <span className="text-background">Search</span>
      </div>
      <div className="flex items-center justify-center gap-4 px-5">
        <Menu className="h-8 w-8 text-background" />
        <span className="text-background">Menu</span>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;