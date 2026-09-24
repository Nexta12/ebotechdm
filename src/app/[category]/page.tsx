import React from "react";
import ComingSoonView from "@/components/ComingSoonView";
import { Metadata } from "next";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rawCategory = resolvedParams.category;
  const formattedCategory = rawCategory
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `${formattedCategory} Desk | Coming Soon - Ebotech Digital Media`,
    description: `The ${formattedCategory} desk of Ebotech Digital Media is currently under editorial preparation for our upcoming print & digital edition.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  return (
    <main className="min-h-[70vh] flex items-center justify-center py-10 bg-[#fcfbf7]">
      <ComingSoonView categorySlug={resolvedParams.category} />
    </main>
  );
}
