"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LEAD_ARTICLE,
  SECONDARY_ARTICLES,
  OPINION_COLUMNS,
} from "@/data/newspaperData";
import {
  GraduationCap,
  ArrowRight,
  Clock,
  Quote,
} from "lucide-react";

export default function NewspaperHero() {
  const businessStory = SECONDARY_ARTICLES[0];
  const senateStory = SECONDARY_ARTICLES[1];
  const ruralEnergyStory = SECONDARY_ARTICLES[2];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 font-ui">
      {/* 3-Column Broadsheet Newspaper Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* LEFT COLUMN: Secondary News & Market Analysis (3 cols) */}
        <aside className="lg:col-span-3 space-y-4 order-2 lg:order-1 border-t lg:border-t-0 pt-4 lg:pt-0 lg:border-r border-[#dfdad0] lg:pr-5">
          {/* Top Story on Left */}
          <article className="pb-4 border-b border-[#dfdad0]">
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#058c9a] font-ui block">
              {businessStory.kicker}
            </span>
            <Link href="/business" className="group">
              <h2 className="font-headline text-sm sm:text-[15px] font-bold leading-snug mt-0.5 group-hover:text-[#058c9a] transition-colors">
                {businessStory.title}
              </h2>
            </Link>

            {businessStory.image && (
              <div className="relative w-full h-24 sm:h-28 mt-2 overflow-hidden rounded-xs border border-[#dfdad0]">
                <Image
                  src={businessStory.image}
                  alt={businessStory.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 250px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}

            <div className="text-[10px] text-[#78716c] mt-1.5 flex items-center justify-between">
              <span>{businessStory.dateline}</span>
              <span>{businessStory.publishedAt}</span>
            </div>

            <p className="font-body text-[11px] text-[#57534e] mt-1.5 leading-relaxed line-clamp-2">
              {businessStory.excerpt}
            </p>

            <Link
              href="/business"
              className="mt-1.5 inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-[#058c9a] hover:underline"
            >
              <span>Continue Reading &rarr;</span>
            </Link>
          </article>

          {/* Second Story on Left */}
          <article className="pb-4 border-b border-[#dfdad0]">
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#78716c] font-ui block">
              {senateStory.kicker}
            </span>
            <Link href="/politics" className="group">
              <h3 className="font-headline text-xs sm:text-[13px] font-bold leading-snug mt-0.5 group-hover:text-[#058c9a] transition-colors">
                {senateStory.title}
              </h3>
            </Link>
            <p className="font-body text-[11px] text-[#57534e] mt-1 leading-relaxed line-clamp-2">
              {senateStory.excerpt}
            </p>
            <div className="mt-1.5 text-[9px] text-[#78716c] font-medium">
              By {senateStory.author} • {senateStory.readTime}
            </div>
            <Link
              href="/politics"
              className="mt-1 inline-block text-[10px] font-bold text-[#058c9a] hover:underline"
            >
              Read Report &rarr;
            </Link>
          </article>

          {/* Third Story on Left */}
          <article className="pb-3">
            <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-800 font-ui block">
              {ruralEnergyStory.kicker}
            </span>
            <Link href="/investigation" className="group">
              <h3 className="font-headline text-xs font-semibold leading-snug mt-0.5 group-hover:text-[#058c9a] transition-colors">
                {ruralEnergyStory.title}
              </h3>
            </Link>
            <p className="font-body text-[11px] text-[#57534e] mt-1 line-clamp-2">
              {ruralEnergyStory.excerpt}
            </p>
            <Link
              href="/investigation"
              className="mt-1 text-[10px] font-bold text-[#058c9a] hover:underline block"
            >
              View Investigation &rarr;
            </Link>
          </article>

          {/* Editorial Fact Box */}
        
        </aside>

        {/* CENTER COLUMN: THE MAIN LEAD HEADLINE STORY (6 cols) */}
        <main className="lg:col-span-6 order-1 lg:order-2 pb-6 border-b lg:border-b-0">
          <article>
            {/* Main Lead Photo with Authentic Photojournalist Caption - Image First */}
            {LEAD_ARTICLE.image && (
              <figure className="mb-4">
                <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-xs border border-[#1e1b18] shadow-xs">
                  <Image
                    src={LEAD_ARTICLE.image}
                    alt={LEAD_ARTICLE.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-[11px] text-[#57534e] italic mt-1.5 leading-snug px-1 border-b border-[#dfdad0] pb-2">
                  <span className="font-bold not-italic text-[#141414]">
                    Photo Dispatch:
                  </span>{" "}
                  {LEAD_ARTICLE.imageCaption}
                </figcaption>
              </figure>
            )}

            {/* Kicker Tag */}
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-[#058c9a] text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-xs">
                {LEAD_ARTICLE.kicker}
              </span>
            </div>

            {/* Lead Headline */}
            <h1 className="font-headline text-lg sm:text-xl md:text-2xl lg:text-[26px] font-bold leading-snug text-[#141414] tracking-normal">
              {LEAD_ARTICLE.title}
            </h1>

            {/* Dateline and Author Byline */}
            <div className="flex flex-wrap items-center justify-between text-xs text-[#57534e] mt-3 pb-3 border-b border-[#1e1b18] gap-2">
              <div>
                <span className="font-bold text-[#141414] uppercase tracking-wide">
                  {LEAD_ARTICLE.dateline}
                </span>{" "}
                — {LEAD_ARTICLE.author} ({LEAD_ARTICLE.authorRole})
              </div>
              <div className="flex items-center space-x-2 text-[11px]">
                <Clock className="w-3.5 h-3.5" />
                <span>{LEAD_ARTICLE.readTime}</span>
              </div>
            </div>

            {/* Editorial Lead Prose with Drop Cap */}
            <div className="mt-4 text-[#1e1b18] font-body text-sm sm:text-base leading-relaxed">
              <p className="drop-cap">
                {LEAD_ARTICLE.excerpt} The landmark declaration comes against the
                backdrop of exponential advancements in artificial
                intelligence, cloud software engineering, and the critical need
                to equip Africa’s burgeoning youth demographic with competitive,
                globally relevant capabilities.
              </p>
              <p className="mt-3">
                Industry titans, cabinet representatives, and academic leaders
                emphasized that independent media, responsible data governance,
                and digital journalism stand at the very core of sustainable
                economic stability and democracy.
              </p>
            </div>


            {/* Action footer */}
            <div className="mt-4 pt-3 border-t border-[#dfdad0] flex items-center justify-between">
              <Link
                href="/technology"
                className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#058c9a] hover:underline"
              >
                <span>Read Full Coverage in Technology Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
             
            </div>
          </article>
        </main>

        {/* RIGHT COLUMN: Outstanding SCHOLARSHIP Callout & OPINION COLUMNS (3 cols) */}
        <aside className="lg:col-span-3 space-y-6 order-3 border-t lg:border-t-0 pt-6 lg:pt-0 lg:border-l border-[#dfdad0] lg:pl-6">
          {/* PROMINENT SCHOLARSHIP CARD */}
          <div className="bg-gradient-to-br from-[#fef3c7] via-[#fffbeb] to-[#fde68a] border-2 border-[#b45309] p-4 rounded shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#b45309] text-white text-[9px] font-black uppercase px-2 py-0.5 tracking-wider font-ui rounded-bl">
              100% Free Tuition
            </div>

            <div className="flex items-center space-x-1.5 text-[#058c9a] text-xs font-bold uppercase tracking-wider font-ui">
              <GraduationCap className="w-5 h-5 text-[#b45309]" />
              <span>For Ebonyi State Indigenes</span>
            </div>

            <h3 className="font-headline text-lg font-black text-[#1e1b18] mt-1.5 leading-snug">
              EboTech Free Digital Skills Training Project
            </h3>

            <p className="text-xs font-body text-[#451a03] mt-2 leading-relaxed">
              A 1-month practical training initiative equipping Ebonyi indigenes with in-demand
              skills in Canva Design, CapCut Video, AI Content, Digital Marketing, Data Analysis, and Remote Work.
            </p>

            <div className="mt-3 py-2 border-t border-b border-[#d97706]/30 text-[11px] font-ui space-y-1 text-[#78350f]">
              <div className="flex justify-between font-semibold">
                <span>Application Status:</span>
                <span className="text-[#058c9a]">NOW OPEN</span>
              </div>
              <div className="flex justify-between">
                <span>Duration:</span>
                <span className="font-bold text-[#1e1b18]">4 Weeks Max</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery:</span>
                <span className="font-bold text-[#1e1b18]">Online + Partner Hubs</span>
              </div>
              <div className="flex justify-between">
                <span>Structure:</span>
                <span className="font-bold text-[#1e1b18]">1 Track Per Person</span>
              </div>
            </div>

            <Link
              href="/scholarship"
              className="mt-3.5 w-full inline-flex items-center justify-center space-x-2 bg-[#058c9a] hover:bg-[#04727d] text-white font-ui font-extrabold text-xs uppercase tracking-wider py-2.5 px-4 rounded shadow transition-all transform hover:scale-[1.02]"
            >
              <span>Apply For Free Training</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* OPINION & EDITORIAL SECTION */}
          <div className="pt-2">
            <div className="flex items-center justify-between border-b-2 border-[#1e1b18] pb-1">
              <h3 className="font-headline text-sm font-bold uppercase tracking-widest text-[#1e1b18]">
                Opinion & Voices
              </h3>
              <Link
                href="/opinion"
                className="text-[10px] text-[#058c9a] font-bold uppercase hover:underline"
              >
                All Columns &rarr;
              </Link>
            </div>

            <div className="divide-y divide-[#dfdad0] mt-3">
              {OPINION_COLUMNS.map((col) => (
                <article key={col.id} className="py-3">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#78716c] block">
                    {col.topic}
                  </span>
                  <Link href="/opinion" className="group">
                    <h4 className="font-headline text-xs font-bold leading-snug mt-1 group-hover:text-[#058c9a] transition-colors">
                      &ldquo;{col.title}&rdquo;
                    </h4>
                  </Link>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[#1e1b18] shrink-0">
                      <Image
                        src={col.avatar}
                        alt={col.author}
                        fill
                        sizes="28px"
                        className="object-cover"
                      />
                    </div>
                    <div className="text-[11px] leading-tight">
                      <p className="font-bold text-[#1e1b18]">{col.author}</p>
                      <p className="text-[9px] text-[#78716c] truncate max-w-[170px]">
                        {col.role}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* QUOTE OF THE DAY BOX */}
          <div className="p-3.5 bg-[#f5f2eb] border border-[#d6cfc4] rounded-xs text-xs">
            <div className="flex items-center space-x-1.5 text-[#058c9a] font-bold text-[10px] uppercase tracking-wider">
              <Quote className="w-3.5 h-3.5" />
              <span>Quote of the Day</span>
            </div>
            <p className="font-serif italic text-xs text-[#292524] mt-2 leading-relaxed">
              &ldquo;The future belongs not to those who merely consume digital
              technologies, but to those who master the craft of building and
              questioning them.&rdquo;
            </p>
            <p className="text-[10px] font-ui font-semibold text-[#57534e] mt-1 text-right">
              — Editorial Board, Ebotech Digital Media
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
