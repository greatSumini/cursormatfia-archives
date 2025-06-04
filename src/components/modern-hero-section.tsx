"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function ModernHeroSection() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className="section-padding bg-white">
      <div className="container-narrow text-center">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="TypeScript 최적화, React 성능, Next.js SEO..."
                className="pl-10 pr-4 py-3 text-base border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-lg"
              />
            </div>
            <Button className="btn-primary px-6 py-3">검색</Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto text-center">
          <div>
            <div className="text-sm text-gray-600">Rules</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">6개</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">프롬프트</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">10개</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Libraries</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">10개</div>
          </div>
        </div>
      </div>
    </section>
  );
}
