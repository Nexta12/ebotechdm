import React from "react";
import NewspaperHero from "@/components/NewspaperHero";
import CategoryDigestSection from "@/components/CategoryDigestSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfbf7] divide-y divide-[#dfdad0]">
      <NewspaperHero />
      <CategoryDigestSection />
    </main>
  );
}
