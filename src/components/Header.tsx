"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">
              Thalita Terapias
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="#sobre"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#servicos"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="#barras-access"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Barras de Access
            </Link>
            <Link
              href="#depoimentos"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Depoimentos
            </Link>
            <Link
              href="#contato"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contato
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#contato"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Agendar Consulta
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-gray-700 block h-0.5 w-6 rounded-sm transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`bg-gray-700 block h-0.5 w-6 rounded-sm transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-gray-700 block h-0.5 w-6 rounded-sm transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <Link
                href="#sobre"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Sobre
              </Link>
              <Link
                href="#servicos"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Serviços
              </Link>
              <Link
                href="#barras-access"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Barras de Access
              </Link>
              <Link
                href="#depoimentos"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Depoimentos
              </Link>
              <Link
                href="#contato"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Contato
              </Link>
              <Link
                href="#contato"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-center mt-4"
              >
                Agendar Consulta
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
