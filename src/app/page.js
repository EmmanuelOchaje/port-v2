"use client";
import AboutMe from "./components/aboutme";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Services from "./components/Services";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import { darkMode } from "../../tailwind.config";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!"theme" in localStorage &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDark]);
  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Header isDark={isDark} />
      <AboutMe isDark={isDark} />
      <Services isDark={isDark} />
      <Projects isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </>
  );
}
