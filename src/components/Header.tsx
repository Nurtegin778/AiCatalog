// src/components/layout/Header.tsx
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Plus, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Следим за скроллом, чтобы менять прозрачность хедера
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
const NAV_LINKS = [
  { label: "Каталог", href: "/catalog" },
  { label: "Категории", href: "/categories" },
  { label: "Топ недели", href: "/top" },
  { label: "О проекте", href: "/about" },
];
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl border-gray-100 py-3 shadow-sm" 
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        
        {/* ЛОГОТИП */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-[#3168EB] rounded-xl flex items-center justify-center shadow-[0_4px_15px_rgba(49,104,235,0.3)] transition-transform group-hover:rotate-[10deg]">
            <Sparkles size={22} className="text-white fill-white/20" />
          </div>
          <div className="flex flex-col">
            <span className="text-[20px] font-black text-[#1F2937] leading-none tracking-tighter">
              AICATALOG
            </span>
            <span className="text-[10px] font-bold text-[#3168EB] uppercase tracking-[0.2em] mt-0.5">
              Kazakhstan
            </span>
          </div>
        </Link>

        {/* НАВИГАЦИЯ (DESKTOP) */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
  <Link
    key={item.href}
    href={item.href}
    className="text-sm font-bold text-[#4B5563] hover:text-[#3168EB] transition-colors"
  >
    {item.label}
  </Link>
))}
        </nav>

        {/* ПРАВАЯ ЧАСТЬ: ПОИСК И КНОПКА */}
        <div className="hidden md:flex items-center gap-4">
          <Link
  href="/login"
  className="px-5 py-2.5 rounded-xl bg-[#F3F4F6] text-[#1F2937] text-sm font-bold hover:bg-gray-200 transition-all"
>
  Войти
</Link>
          <Link
  href="/submit"
  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#3168EB] text-white text-sm font-bold shadow-[0_8px_20px_rgba(49,104,235,0.2)] hover:bg-[#2552C7] hover:shadow-none transition-all active:scale-95"
>
  <Plus size={18} />
  Добавить ИИ
</Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden p-2 text-[#1F2937]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-6 md:hidden animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((item) => (
  <Link
    key={item.href}
    href={item.href}
    className="text-lg font-bold text-[#1F2937]"
  >
    {item.label}
  </Link>
))}
          </nav>
          <div className="flex flex-col gap-3">
            <Link
  href="/login"
  className="w-full py-4 rounded-2xl bg-[#F3F4F6] font-bold text-center"
>
  Войти
</Link>

<Link
  href="/submit"
  className="w-full py-4 rounded-2xl bg-[#3168EB] text-white font-bold flex items-center justify-center gap-2"
>
  <Plus size={20} />
  Добавить ИИ
</Link>
          </div>
        </div>
      )}
    </header>
  );
}