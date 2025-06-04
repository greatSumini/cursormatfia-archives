"use client";

import { FeaturedCard } from "./featured-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Rule, Prompt, Library } from "@/types";

interface FeaturedSectionProps {
  title: string;
  description: string;
  items: (Rule | Prompt | Library)[];
  type: "rule" | "prompt" | "library";
  sectionId: string;
}

export function FeaturedSection({
  title,
  description,
  items,
  type,
  sectionId,
}: FeaturedSectionProps) {
  return (
    <section
      id={sectionId}
      className="section-padding border-t border-gray-200"
    >
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="heading-lg mb-4">{title}</h2>
            <p className="body-lg max-w-2xl">{description}</p>
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button className="btn-primary">
              모두 보기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {items.map((item) => (
            <FeaturedCard key={item.id} item={item} type={type} />
          ))}
        </div>
      </div>
    </section>
  );
}
