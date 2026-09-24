"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NEWSPAPER_CONFIG } from "@/data/newspaperData";
import { Search, Menu, X, GraduationCap, Flame } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header className="w-full bg-[#fcfbf7] border-b border-[#1e1b18] text-[#141414] select-none">
      {/* Top Utility Bar: Weather, Date, Edition, Markets */}
    
      {/* Main Masthead: Social Handles (Left), Centralized Logo (Center), Search Bar (Far Right) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 md:py-2.5">
        {/* Desktop Layout (md and up): Classic 3-Part Newspaper Masthead */}
        <div className="hidden md:grid md:grid-cols-12 items-center gap-4">
          {/* Left: Social Handles */}
          <div className="md:col-span-3 flex items-center justify-start space-x-2">
            <span className="text-[10px] uppercase tracking-wider font-bold text-[#78716c] mr-1 hidden lg:inline font-ui">
              Follow Us:
            </span>
            <a
              href={NEWSPAPER_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-[#dfdad0] bg-[#f5f2eb] hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2] text-[#44403c] flex items-center justify-center transition-all duration-200 shadow-xs group"
              aria-label="Facebook"
              title="Follow Ebotech on Facebook"
            >
              <svg
                className="w-4 h-4 fill-current transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-[#dfdad0] bg-[#f5f2eb] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent text-[#44403c] flex items-center justify-center transition-all duration-200 shadow-xs group"
              aria-label="Instagram"
              title="Follow Ebotech on Instagram"
            >
              <svg
                className="w-4 h-4 fill-current transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-[#dfdad0] bg-[#f5f2eb] hover:bg-black hover:text-white hover:border-black text-[#44403c] flex items-center justify-center transition-all duration-200 shadow-xs group"
              aria-label="Twitter"
              title="Follow Ebotech on Twitter (X)"
            >
              <svg
                className="w-3.5 h-3.5 fill-current transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Center: Centralized Logo */}
          <div className="md:col-span-6 flex flex-col items-center justify-center text-center">
            <Link href="/" className="inline-block group focus:outline-none">
              <div className="relative flex items-center justify-center py-0.5">
                <Image
                  src="/images/logo.png"
                  alt={NEWSPAPER_CONFIG.name}
                  width={400}
                  height={160}
                  priority
                  className="h-14 md:h-16 lg:h-18 w-auto object-contain mix-blend-multiply group-hover:opacity-95 transition-all duration-200"
                />
              </div>
            </Link>
          </div>

          {/* Far Right: Search Bar */}
          <div className="md:col-span-3 flex items-center justify-end">
            <form
              onSubmit={handleSearch}
              className="relative w-full max-w-[240px] sm:max-w-[260px]"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search news, topics..."
                className="w-full bg-[#f5f2eb] hover:bg-white focus:bg-white text-xs font-body text-[#1e1b18] placeholder-[#78716c] pl-3.5 pr-8 py-2 border border-[#dfdad0] focus:border-[#058c9a] rounded-full transition-all focus:outline-none focus:ring-1 focus:ring-[#058c9a] shadow-xs"
              />
              <button
                type="submit"
                aria-label="Search"
                className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 text-[#57534e] hover:text-[#058c9a] transition-colors rounded-full focus:outline-none"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Mobile Layout (below md): Clean, proportional 2-row layout */}
        <div className="md:hidden flex flex-col items-center space-y-2">
          {/* Row 1: Logo, prominently sized & centered */}
          <Link href="/" className="inline-block group focus:outline-none py-1">
            <Image
              src="/images/logo.png"
              alt={NEWSPAPER_CONFIG.name}
              width={360}
              height={144}
              priority
              className="h-16 sm:h-20 w-auto max-w-[280px] sm:max-w-[340px] object-contain mix-blend-multiply"
            />
          </Link>

          {/* Row 2: Social Handles on the Left, Search Bar on the Right */}
          <div className="w-full flex items-center justify-between gap-2.5 pt-2 border-t border-[#dfdad0]/60">
            {/* Social Icons */}
            <div className="flex items-center space-x-1.5 shrink-0">
              <a
                href={NEWSPAPER_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full border border-[#dfdad0] bg-[#f5f2eb] hover:bg-[#1877f2] hover:text-white text-[#44403c] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full border border-[#dfdad0] bg-[#f5f2eb] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white text-[#44403c] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full border border-[#dfdad0] bg-[#f5f2eb] hover:bg-black hover:text-white text-[#44403c] flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            {/* Compact Search Bar */}
            <form onSubmit={handleSearch} className="relative flex-1 max-w-[210px]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full bg-[#f5f2eb] hover:bg-white focus:bg-white text-xs font-body text-[#1e1b18] placeholder-[#78716c] pl-3 pr-7 py-1.5 border border-[#dfdad0] focus:border-[#058c9a] rounded-full transition-all focus:outline-none focus:ring-1 focus:ring-[#058c9a]"
              />
              <button
                type="submit"
                aria-label="Search"
                className="absolute right-1 top-1/2 -translate-y-1/2 p-1 text-[#57534e] hover:text-[#058c9a] transition-colors rounded-full"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Breaking News Ticker Bar */}
      <div className="border-t border-b border-[#1e1b18] bg-[#1a1816] text-[#fafaf9] overflow-hidden flex items-stretch text-xs font-ui">
        <div className="bg-[#058c9a] text-white font-extrabold uppercase px-3 sm:px-4 py-1.5 flex items-center space-x-1.5 tracking-wider shrink-0 z-10 shadow-md">
          <Flame className="w-3.5 h-3.5 animate-bounce text-amber-300" />
          <span className="text-[11px] sm:text-xs font-ui tracking-widest">
            BREAKING NEWS
          </span>
        </div>
        <div className="relative w-full overflow-hidden py-1.5 flex items-center">
          <div className="animate-ticker text-xs font-serif text-[#f5f5f4] tracking-wide flex items-center">
            {NEWSPAPER_CONFIG.breakingNews.map((item, idx) => (
              <span key={idx} className="mx-6 inline-flex items-center">
                <span>{item}</span>
                <span className="ml-6 text-[#06b6d4] font-black font-sans">
                  ◆
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Newspaper Navigation Ribbon with Double Rules */}
      <div className="newspaper-double-bottom bg-[#fcfbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center py-1">
            {/* Desktop Navigation Links (Centralized) */}
            <nav className="hidden lg:flex items-center justify-center flex-wrap gap-y-1 space-x-1 xl:space-x-3 py-1 font-serif text-sm">
              {NEWSPAPER_CONFIG.categories.map((cat) => {
                const href = cat.slug === "" ? "/" : `/${cat.slug}`;
                const isActive =
                  cat.slug === ""
                    ? pathname === "/"
                    : pathname === `/${cat.slug}` ||
                      pathname === `/category/${cat.slug}`;

                return (
                  <Link
                    key={cat.name}
                    href={href}
                    className={`px-2.5 py-1 text-xs uppercase tracking-wider font-bold transition-all relative border-b-2 ${
                      isActive
                        ? "text-[#058c9a] border-[#058c9a] bg-[#eef7f8]"
                        : "text-[#1e1b18] border-transparent hover:text-[#058c9a] hover:border-[#058c9a]"
                    }`}
                  >
                    {cat.name}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Nav Button (Centralized) */}
            <div className="lg:hidden flex items-center justify-center py-1 w-full">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 border border-[#1e1b18] rounded bg-[#f5f2eb] hover:bg-[#ede8df] transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
                <span>Browse Sections</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b-2 border-[#1e1b18] bg-[#fbf9f4] p-4 shadow-lg animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2 pb-3">
            {NEWSPAPER_CONFIG.categories.map((cat) => {
              const href = cat.slug === "" ? "/" : `/${cat.slug}`;
              return (
                <Link
                  key={cat.name}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-bold font-serif uppercase tracking-wider text-[#1e1b18] hover:bg-[#ede8df] rounded border border-[#dfdad0] flex items-center justify-between"
                >
                  <span>{cat.name}</span>
                  {cat.isComingSoon && (
                    <span className="text-[9px] text-[#78716c] font-ui lowercase">
                      soon
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
          <div className="border-t border-[#dfdad0] pt-3">
            <Link
              href="/scholarship"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 bg-[#058c9a] hover:bg-[#04727d] text-white py-2.5 rounded font-bold font-ui text-sm uppercase tracking-wider transition-colors"
            >
              <GraduationCap className="w-4 h-4 text-amber-300" />
              <span>Apply for Skill Acquisition Scholarship</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
