"use client";

import React from "react";
import Link from "next/link";
import { NEWSPAPER_CONFIG } from "@/data/newspaperData";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#181614] text-[#d6d3cd] border-t-4 border-[#058c9a] font-ui mt-16">
      {/* Top Banner inside Footer */}

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand & Editorial Policy */}
          <div className="lg:col-span-2">
            <h2 className="font-masthead text-2xl font-black text-white tracking-wider">
              {NEWSPAPER_CONFIG.name}
            </h2>
            <p className="font-serif italic text-xs text-[#a8a29e] mt-1">
              &ldquo;{NEWSPAPER_CONFIG.motto}&rdquo;
            </p>
            <p className="text-xs text-[#a8a29e] mt-3 leading-relaxed font-body">
              An independent, Pan-African digital news enterprise providing high-integrity investigative journalism, technological intelligence, and human capital development. Dedicated to civic accountability and empowering youth talent across the continent.
            </p>
            <div className="mt-4 flex items-center space-x-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#a8a29e]">
                Follow Us:
              </span>
              <a
                href={NEWSPAPER_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-[#06b6d4] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="font-ui font-semibold">Facebook</span>
              </a>
            </div>
          </div>

          {/* Col 2: News Desks */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-[#36322d] pb-2 font-headline">
              Editorial Desks
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/politics" className="hover:text-white transition-colors">
                  National Politics
                </Link>
              </li>
              <li>
                <Link href="/business" className="hover:text-white transition-colors">
                  Business & Markets
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-white transition-colors">
                  Technology & AI
                </Link>
              </li>
              <li>
                <Link href="/sports" className="hover:text-white transition-colors">
                  Sports Gazette
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Youth & Education */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-[#36322d] pb-2 font-headline">
              Academy & Programs
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/scholarship#tracks" className="hover:text-white transition-colors">
                  Available Skill Tracks
                </Link>
              </li>
              <li>
                <Link href="/scholarship#eligibility" className="hover:text-white transition-colors">
                  Eligibility Criteria
                </Link>
              </li>
              <li>
                <Link href="/scholarship#faq" className="hover:text-white transition-colors">
                  Scholarship FAQs
                </Link>
              </li>
              <li>
                <Link href="/opinion" className="hover:text-white transition-colors">
                  Opinion & Columnists
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Print Edition & Delivery */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-[#36322d] pb-2 font-headline">
              Daily Dispatch
            </h4>
            <p className="text-xs text-[#a8a29e] mt-3">
              Receive top investigative headlines and scholarship updates delivered directly to your inbox every morning.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#24211e] border border-[#3e3a35] text-xs text-white px-3 py-2 rounded-l w-full focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="bg-[#058c9a] text-white px-3 py-2 rounded-r hover:bg-[#04727d] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="border-t border-[#292524] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#78716c] gap-4">
          <p>
            &copy; {new Date().getFullYear()} {NEWSPAPER_CONFIG.name}. All rights reserved. ISSN: 2940-192X.
          </p>
          <div className="flex space-x-4">
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy & Cookies
            </Link>
            <Link href="/ethics" className="hover:underline">
              Editorial Standards
            </Link>
            <Link href="/contact" className="hover:underline">
              Newsroom Contacts
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
