"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { FeaturedCard } from "@/components/featured-card";
import {
  CATEGORY_OPTIONS,
  CATEGORY_RULES,
  CATEGORY_PROMPTS,
  CATEGORY_LIBRARIES,
  CategoryOption,
} from "@/constants/categories";
import {
  featuredRules,
  featuredPrompts,
  featuredLibraries,
} from "@/data/featured-data";

const categoryMap = {
  [CATEGORY_RULES]: { items: featuredRules, type: "rule" },
  [CATEGORY_PROMPTS]: { items: featuredPrompts, type: "prompt" },
  [CATEGORY_LIBRARIES]: { items: featuredLibraries, type: "library" },
} as const;

export default function ListPage() {
  const [selected, setSelected] = useState<CategoryOption[]>([
    CATEGORY_RULES,
    CATEGORY_PROMPTS,
    CATEGORY_LIBRARIES,
  ]);

  const toggleCategory = (category: CategoryOption) => {
    setSelected((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const items = selected.flatMap((category) => {
    const { items, type } = categoryMap[category];
    return items.map((item) => ({ item, type }));
  });

  return (
    <div className="flex p-8 gap-8">
      <aside className="w-48 space-y-4">
        {CATEGORY_OPTIONS.map((cat) => (
          <label key={cat} className="flex items-center space-x-2">
            <Checkbox
              checked={selected.includes(cat)}
              onCheckedChange={() => toggleCategory(cat)}
            />
            <span>{cat}</span>
          </label>
        ))}
      </aside>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({ item, type }) => (
          <FeaturedCard key={item.id} item={item as any} type={type} />
        ))}
      </main>
    </div>
  );
}
