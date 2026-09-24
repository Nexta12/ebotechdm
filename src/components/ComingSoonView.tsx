"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { NEWSPAPER_CONFIG } from "@/data/newspaperData";

interface ComingSoonViewProps {
  categorySlug: string;
}

export default function ComingSoonView({ categorySlug }: ComingSoonViewProps) {
  const categoryMatch = NEWSPAPER_CONFIG.categories.find(
    (c) => c.slug.toLowerCase() === categorySlug.toLowerCase()
  );

  const categoryName = categoryMatch
    ? categoryMatch.name
    : categorySlug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-12 sm:py-20 text-center font-ui">
      {/* Editorial Subtitle */}
      {categoryName && (
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#058c9a] block mb-3">
          {categoryName} Desk
        </span>
      )}

      {/* Main Beautiful Headline */}
      <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl font-black text-[#141414] tracking-tight">
        Coming Soon
      </h1>

      {/* Decorative Editorial Rule */}
      <div className="flex items-center justify-center space-x-3 my-6">
        <span className="h-[1px] w-12 sm:w-20 bg-[#dfdad0]"></span>
        <span className="text-[#058c9a] text-xs">◆</span>
        <span className="h-[1px] w-12 sm:w-20 bg-[#dfdad0]"></span>
      </div>

      <p className="font-body text-sm sm:text-base text-[#57534e] max-w-md mx-auto leading-relaxed">
        This section is currently under editorial preparation. Please check back soon.
      </p>

      {/* Return to Front Page Link */}
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#1e1b18] hover:text-[#058c9a] border-b border-[#1e1b18] hover:border-[#058c9a] pb-1 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Front Page</span>
        </Link>
      </div>
    </div>
  );
}
