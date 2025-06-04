"use client";

import { RuleCard } from "./rule-card";
import { RuleCategory } from "@/types";

interface RuleCategorySectionProps {
  category: RuleCategory;
}

export function RuleCategorySection({ category }: RuleCategorySectionProps) {
  if (category.rules.length === 0) {
    return null;
  }

  return (
    <section className="mb-16">
      {/* Category Header */}
      <div className="mb-8">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
          {category.name}
        </h3>
        <p className="text-gray-400 text-sm sm:text-base">
          {category.description}
        </p>
      </div>

      {/* Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.rules.map((rule) => (
          <RuleCard key={rule.id} rule={rule} />
        ))}
      </div>
    </section>
  );
}
