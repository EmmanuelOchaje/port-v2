"use client";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect, useRef, useState } from "react";
import { assets } from "../../../assets/assets";

const Navbar = ({ isDark, setIsDark }) => {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);

  function openMenu() {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  }
  function closeMenu() {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      {/* <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="/" className="w-full" />
      </div> */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-3 flex items-center justify-between z-50 ${
          isScroll
            ? `bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-black dark:shadow-white/20`
            : ""
        } `}
      >
        <Link href={"#top"}>
          <h1 className="font-medium text-3xl cursor-pointer mr-1">
            Emmanuel<span className="text-blue-800 text-4xl">.</span>
          </h1>
        </Link>

        {/* linkx */}
        <ul
          className={`hidden md:flex items-center gap-6 ${
            isScroll
              ? ""
              : "bg-blue-50 shadow-sm bg-opacity-50 rounded-full dark:border dark:border-white/50 dark:bg-transparent"
          } lg:gap-8 roudned-full px-12 py-3`}
        >
          <Link className="font-Ovo" href="#top">
            Home
          </Link>
          <Link className="font-Ovo" href="#aboutMe">
            About Me
          </Link>
          <Link className="font-Ovo" href="#services">
            Services
          </Link>
          <Link className="font-Ovo" href="#projects">
            Projects
          </Link>
          <Link className="font-Ovo" href="#contact">
            Contact Me
          </Link>
        </ul>

        {/* left end */}
        <div className="flex items-center gap-4 ">
          <button onClick={() => setIsDark(!isDark)}>
            <Image
              src={isDark ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>
          <Link
            href=""
            className="hidden  lg:flex gap-3 px-12 border border-gray-500 rounded-full ml-4 py-2.5 items-center dark:border-white/50"
          >
            Contact
            <Image
              src={isDark ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              className="w-3"
            />
          </Link>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDark ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        {/* mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50  h-screen bg-blue-50 dark:bg-blue-900 transition duration-500"
        >
          <div className="top-6 right-6 absolute" onClick={closeMenu}>
            <Image
              src={isDark ? assets.close_white : assets.close_black}
              alt=""
              className="w-4 cursor-pointer"
            />
          </div>
          <Link
            onClick={closeMenu}
            className="font-Outfit mx-auto mt-3 font-light"
            href="#top"
          >
            Home
          </Link>
          <Link
            onClick={closeMenu}
            className="font-Outfit mx-auto mt-3 font-light"
            href="#aboutMe"
          >
            About Me
          </Link>
          <Link
            onClick={closeMenu}
            className="font-Outfit mx-auto mt-3 font-light"
            href="#services"
          >
            Services
          </Link>
          <Link
            onClick={closeMenu}
            className="font-Outfit mx-auto mt-3 font-light"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            onClick={closeMenu}
            className="font-Outfit mx-auto mt-3 font-light"
            href="#contact"
          >
            Contact Me
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
