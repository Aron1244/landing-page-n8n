"use client";

import type React from "react";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef<HTMLElement | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${navbarRef.current.offsetHeight}px`
        );
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#logo-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <defs>
                  <linearGradient
                    id="logo-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#4F46E5" />
                    <stop offset="100%" stopColor="#9333EA" />
                  </linearGradient>
                </defs>
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span>Mi Empresa</span>
            </Link>
          </div>

          {/* Menú en pantallas grandes */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="/about">Sobre Nosotros</NavLink>
            <NavLink href="/mision">Misión</NavLink>
            <NavLink href="/vision">Visión</NavLink>
          </div>

          {/* Botón de menú móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Abrir menú</span>
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute block w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute block w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable en móvil */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t px-4 py-2 space-y-3">
          <MobileNavLink href="/about">Sobre Nosotros</MobileNavLink>
          <MobileNavLink href="/mision">Misión</MobileNavLink>
          <MobileNavLink href="/vision">Visión</MobileNavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-md text-gray-700 font-medium hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-md text-gray-700 font-medium hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200"
    >
      {children}
    </Link>
  );
}
