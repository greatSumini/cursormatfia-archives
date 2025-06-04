"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface LoadMoreButtonProps {
  onLoadMore: () => Promise<void>;
  hasMore: boolean;
}

export function LoadMoreButton({ onLoadMore, hasMore }: LoadMoreButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = async () => {
    setIsLoading(true);
    try {
      await onLoadMore();
    } catch (error) {
      console.error("Failed to load more rules:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!hasMore) {
    return null;
  }

  return (
    <div className="flex justify-center mt-12">
      <Button
        onClick={handleLoadMore}
        disabled={isLoading}
        variant="outline"
        className="border-gray-600 hover:border-blue-500 text-gray-200 hover:text-blue-400 bg-transparent hover:bg-gray-800/50 px-8 py-3 text-lg font-medium"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Loading more...
          </>
        ) : (
          "Load More Rules"
        )}
      </Button>
    </div>
  );
}
