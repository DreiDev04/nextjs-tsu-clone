"use client";
import { useEffect, useState } from "react";
import { Menu, Search } from "lucide-react";
import Image from "next/image";
import NavbarIn from "./NavbarIn";
import React from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        } md:h-28 h-16 flex bg-tranparent items-center justify-between z-50  `}
      >
        <div className="flex justify-center items-center gap-2 ml-10">
          <Image
            src="/logo/tsu-logo.webp"
            width={100}
            height={100}
            alt="tsu-logo"
            className="h-12 w-12 md:h-20 md:w-20"
          />
          <h1 className="text-lg md:text-2xl text-background font-times md:block hidden">
            Tarlac State <br className="hidden md:block" /> University
          </h1>
        </div>
        <div className="flex h-full bg-foreground ">
          <button
            className="flex items-center justify-center gap-4 px-5 hover:bg-primary cursor-pointer"
            onClick={() => {}}
          >
            <Search className="h-8 w-8 text-background" />
            <span className="text-background">Search</span>
          </button>
          <button
            className="flex items-center justify-center gap-4 px-5 hover:bg-primary cursor-pointer"
            onClick={toggleMenu}
          >
            <Menu className="h-8 w-8 text-background" />
            <span className="text-background ">Menu</span>
          </button>
        </div>
      </nav>

      {isMenuOpen && <NavbarIn toggleMenu={toggleMenu} />}
    </>
  );
};

export default Navbar;
