"use client";

import type React from "react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

type User = {
  id: number;
  name: string;
  email: string;
  role?: string;
  has_access?: boolean;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement | null>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Verificar si el usuario está autenticado al cargar el componente
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("auth_token");
        const userId = localStorage.getItem("user_id");

        if (token && userId) {
          const response = await fetch(
            `http://localhost:8000/api/users/${userId}`
          );

          if (response.ok) {
            const userData = await response.json();
            setUser(userData);

            // Guardar el user_id en localStorage si no está ya guardado
            if (!localStorage.getItem("user_id")) {
              localStorage.setItem("user_id", userData.id.toString());
            }
          } else {
            localStorage.removeItem("auth_token");
            localStorage.removeItem("user_id");
            setUser(null);
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error al verificar autenticación:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [pathname]);

  // Cerrar el menú de usuario al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  // Función para navegar a una ruta específica
  const navigateTo = (path: string) => {
    // Cerrar el menú de usuario
    setIsUserMenuOpen(false);
    // Navegar a la ruta
    router.push(path);
  };

  // Función de logout completamente reescrita
  const handleLogout = (e: React.MouseEvent) => {
    // Prevenir comportamiento por defecto
    e.preventDefault();
    // Detener la propagación del evento
    e.stopPropagation();

    // Cerrar el menú de usuario
    setIsUserMenuOpen(false);

    // Eliminar token y datos de usuario
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_id");

    // Establecer el usuario como null
    setUser(null);

    // Usar setTimeout para asegurar que los cambios en localStorage se apliquen antes de recargar
    setTimeout(() => {
      // Forzar una recarga completa de la página
      window.location.href = "/";
    }, 100);
  };

  // Añadir un evento de almacenamiento para detectar cambios en localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem("auth_token");
      const userId = localStorage.getItem("user_id");

      if (!token || !userId) {
        setUser(null);
      } else {
        // Recargar los datos del usuario
        const fetchUser = async () => {
          try {
            const response = await fetch(
              `http://localhost:8000/api/users/${userId}`
            );
            if (response.ok) {
              const userData = await response.json();
              setUser(userData);
            }
          } catch (error) {
            console.error("Error al obtener datos del usuario:", error);
          }
        };

        fetchUser();
      }
    };

    // Escuchar cambios en localStorage
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Añadir un listener para el evento personalizado authChange
  useEffect(() => {
    const handleAuthChange = () => {
      const checkAuth = async () => {
        try {
          const token = localStorage.getItem("auth_token");
          const userId = localStorage.getItem("user_id");

          if (token && userId) {
            const response = await fetch(
              `http://localhost:8000/api/users/${userId}`
            );
            if (response.ok) {
              const userData = await response.json();
              setUser(userData);
            } else {
              localStorage.removeItem("auth_token");
              localStorage.removeItem("user_id");
              setUser(null);
            }
          } else {
            setUser(null);
          }
        } catch (error) {
          console.error("Error al verificar autenticación:", error);
          setUser(null);
        } finally {
          setIsLoading(false);
        }
      };

      checkAuth();
    };

    // Escuchar el evento personalizado
    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
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
              {/* <svg
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
              </svg> */}
              <Image
                src="/Bit&Brain.svg" // Ruta de la imagen
                alt="Logo Bit&Brain"
                width={48} // Ancho de la imagen
                height={48} // Alto de la imagen
                layout="intrinsic"
                className="mr-2 rounded-full"
              />
              <span>Bit&Brain</span>
            </Link>
          </div>

          {/* Menú en pantallas grandes */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="ml-6 flex items-center space-x-4">
              {/* <Link
                href="#chat"
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                id="chat-button"
              >
                Chatear Ahora
              </Link> */}

              {isLoading ? (
                <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
              ) : user ? (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => navigateTo("/instructions")}
                    className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition-colors duration-200"
                  >
                    Instrucciones
                  </button>
                  <button
                    onClick={() => navigateTo("/sales")}
                    className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition-colors duration-200"
                  >
                    Ventas
                  </button>
                  <button
                    onClick={() => navigateTo("/pricing")}
                    className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition-colors duration-200"
                  >
                    Precios
                  </button>
                  {user.role === "admin" && (
                    <button
                      onClick={() => navigateTo("/admin")}
                      className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition-colors duration-200"
                    >
                      Panel de Administración
                    </button>
                  )}

                  <button className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition-colors duration-200">
                    <a href="/profile">Perfil</a>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Cerrar sesión
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => navigateTo("/instructions")}
                    className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition-colors duration-200"
                  >
                    Instrucciones
                  </button>
                  <button
                    onClick={() => navigateTo("/sales")}
                    className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition-colors duration-200"
                  >
                    Ventas
                  </button>
                  <button
                    onClick={() => navigateTo("/pricing")}
                    className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition-colors duration-200"
                  >
                    Precios
                  </button>
                  <Link
                    href="/login"
                    className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition-colors duration-200"
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    href="/register"
                    className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-200"
                  >
                    Registrarse
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Botón de menú móvil */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Abrir menú</span>
              <div className="relative w-6 h-6 py-4">
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
                    isOpen ? "-rotate-45 -translate-y-2" : "translate-y-2"
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
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white px-4 py-2 space-y-3 mt-4 pt-4 bg-indigo-50 border-t border-gray-200">
          <MobileNavLink href="/pricing">Precios</MobileNavLink>
          <MobileNavLink href="/instructions">Instrucciones</MobileNavLink>
          <MobileNavLink href="/sales">Ventas</MobileNavLink>
          {!isLoading && user && (
            <div className="pt-2 flex flex-col space-y-2">
              <h2 className="text-indigo-600 text-center font-bold">Usuario</h2>
              <MobileNavLink href="/profile">Mi Perfil</MobileNavLink>
              {user.role === "admin" && (
                <MobileNavLink href="/admin">
                  Panel de Administración
                </MobileNavLink>
              )}
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 bg-red-50 rounded-lg text-center"
              >
                Cerrar Sesión
              </button>
            </div>
          )}

          {!isLoading && !user && (
            <div className="pt-2 flex flex-col space-y-2">
              <Link
                href="/login"
                className="block w-full text-center px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition-colors duration-200"
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/register"
                className="block w-full text-center px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-200"
              >
                Registrarse
              </Link>
            </div>
          )}
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
      className="block px-3 py-2 rounded-md font-medium hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 bg-indigo-50 text-indigo-600"
    >
      {children}
    </Link>
  );
}
