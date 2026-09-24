import React from "react";
import Link from "next/link";
import {
  Landmark,
  Cpu,
  TrendingUp,
  Trophy,
  ArrowRight,
} from "lucide-react";

export default function CategoryDigestSection() {
  const sections = [
    {
      title: "Politics & National Affairs",
      slug: "politics",
      icon: <Landmark className="w-4 h-4 text-[#058c9a]" />,
      lead: "Electoral Reform Commission submits recommendations on electronic transmission of results.",
      items: [
        "Budget Defense: Tech infrastructure takes precedence in 2027 fiscal projections.",
        "Governors forum convenes over state-level digital taxation policies.",
        "National Youth Council petitions parliament over educational digital device tariffs.",
      ],
    },
    {
      title: "Technology & AI Frontiers",
      slug: "technology",
      icon: <Cpu className="w-4 h-4 text-blue-700" />,
      lead: "Open-source African language models benchmarked against global GPT systems with 89% accuracy.",
      items: [
        "Fintech security audit exposes 40 zero-day vulnerabilities in regional banking APIs.",
        "Local software engineers debut offline-first agricultural mapping software.",
        "Fiber connectivity milestone reached in 300 regional tertiary institutions.",
      ],
    },
    {
      title: "Business & Financial Markets",
      slug: "business",
      icon: <TrendingUp className="w-4 h-4 text-emerald-700" />,
      lead: "Local manufacturing sector rebounds as interbank foreign exchange liquidity stabilizes.",
      items: [
        "Venture capital firms raise $240M specialized fund for Pan-African green energy.",
        "Commodities exchange lists first digitized grain warehouse receipts.",
        "Port automated clearing system cuts customs inspection delays by 45%.",
      ],
    },
    {
      title: "Sports & Culture Gazette",
      slug: "sports",
      icon: <Trophy className="w-4 h-4 text-amber-700" />,
      lead: "Continental Club Championship: Local champions qualify for group stage with 3-1 aggregate win.",
      items: [
        "Athletics federation opens talent identification camps for junior sprinters.",
        "National basketball league inks broadcast rights agreement with streaming platform.",
        "Grassroots academy graduates first cohort into European developmental leagues.",
      ],
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 border-t-4 border-[#1e1b18] font-ui">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-[#1e1b18] pb-2 mb-6">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#058c9a]">
            SPECIAL EDITORIAL DIGEST
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-black text-[#141414]">
            Newspaper Desks & Categorized Dispatches
          </h2>
        </div>
        <p className="text-xs text-[#78716c] italic mt-1 sm:mt-0 font-serif">
          Updated continuously throughout each publishing cycle
        </p>
      </div>

      {/* Grid of 4 Desks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sections.map((sec) => (
          <div
            key={sec.slug}
            className="border border-[#dfdad0] bg-[#fdfcf9] p-4 flex flex-col justify-between hover:shadow-md transition-shadow relative"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-[#1e1b18] pb-2">
                <div className="flex items-center space-x-1.5">
                  {sec.icon}
                  <h3 className="font-headline text-xs font-bold uppercase tracking-wider text-[#1e1b18]">
                    {sec.title}
                  </h3>
                </div>
              </div>

              {/* Lead dispatch */}
              <Link href={`/${sec.slug}`} className="group block mt-3">
                <p className="font-headline text-sm font-bold text-[#141414] leading-snug group-hover:text-[#058c9a] transition-colors">
                  {sec.lead}
                </p>
              </Link>

              {/* Sub items */}
              <ul className="mt-3.5 space-y-2.5 border-t border-[#dfdad0] pt-3 text-xs font-body text-[#44403c]">
                {sec.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-1.5 group">
                    <span className="text-[#058c9a] font-black text-[10px] mt-0.5">
                      ▸
                    </span>
                    <Link
                      href={`/${sec.slug}`}
                      className="hover:text-[#058c9a] transition-colors leading-relaxed line-clamp-2"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Read Desk CTA */}
            <div className="mt-5 pt-3 border-t border-[#dfdad0]">
              <Link
                href={`/${sec.slug}`}
                className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-[#058c9a] hover:underline"
              >
                <span>Open {sec.title.split("&")[0]} Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Mid-Page Editorial Scholarship Banner */}
    
    </section>
  );
}
