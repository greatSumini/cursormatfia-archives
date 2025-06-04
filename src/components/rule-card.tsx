"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Copy, Heart, Share2, ExternalLink } from "lucide-react";
import { Rule } from "@/types";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

interface RuleCardProps {
  rule: Rule;
}

export function RuleCard({ rule }: RuleCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(rule.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy prompt:", err);
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: rule.title,
        text: rule.description,
        url: window.location.href,
      });
    } catch (err) {
      // Fallback to copying URL
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  const truncatedPrompt =
    rule.prompt.length > 300
      ? rule.prompt.substring(0, 300) + "..."
      : rule.prompt;

  const visibleTags = rule.tags.slice(0, 3);
  const remainingTagsCount = rule.tags.length - 3;

  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-200 hover:shadow-lg group">
      <CardContent className="p-6">
        {/* Card Top Actions */}
        <div className="flex justify-end gap-2 mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopyPrompt}
            className="text-gray-400 hover:text-white hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Copy className="h-4 w-4" />
            {copied && <span className="ml-1 text-xs">Copied!</span>}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity ${
              isLiked ? "text-red-500" : "text-gray-400 hover:text-white"
            }`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleShare}
            className="text-gray-400 hover:text-white hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Prompt Snippet */}
        <Dialog>
          <DialogTrigger asChild>
            <div className="cursor-pointer mb-4">
              <code className="block bg-gray-900 text-gray-300 p-4 rounded-md text-sm font-mono leading-relaxed overflow-hidden hover:bg-gray-850 transition-colors">
                {truncatedPrompt}
              </code>
            </div>
          </DialogTrigger>
          <DialogContent className="bg-gray-800 border-gray-700 max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-white flex items-center gap-2">
                {rule.title}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyPrompt}
                  className="text-gray-400 hover:text-white"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <pre className="bg-gray-900 text-gray-300 p-4 rounded-md text-sm font-mono leading-relaxed whitespace-pre-wrap overflow-x-auto">
                {rule.prompt}
              </pre>
            </div>
          </DialogContent>
        </Dialog>

        {/* Rule Title */}
        <div className="mb-4">
          <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
            {rule.title}
          </h3>
          <p className="text-gray-400 text-sm mt-1">{rule.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {visibleTags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-gray-700 text-gray-300 hover:bg-gray-600 text-xs px-2 py-1"
            >
              {tag}
            </Badge>
          ))}
          {remainingTagsCount > 0 && (
            <Dialog>
              <DialogTrigger asChild>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-300 hover:bg-gray-600 text-xs px-2 py-1 cursor-pointer"
                >
                  +{remainingTagsCount} more
                </Badge>
              </DialogTrigger>
              <DialogContent className="bg-gray-800 border-gray-700">
                <DialogHeader>
                  <DialogTitle className="text-white">모든 태그</DialogTitle>
                </DialogHeader>
                <div className="flex flex-wrap gap-2 mt-4">
                  {rule.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-gray-700 text-gray-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>

        {/* Rule Info */}
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-4">
            <span>by {rule.author}</span>
            <span>{rule.likes} likes</span>
          </div>
          <div className="flex items-center gap-2">
            <span>
              {formatDistanceToNow(new Date(rule.updatedAt), {
                addSuffix: true,
                locale: ko,
              })}
            </span>
            <Link
              href={`/rules/${rule.id}`}
              className="text-blue-400 hover:text-blue-300"
            >
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
