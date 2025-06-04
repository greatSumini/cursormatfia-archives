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
import {
  Heart,
  Share2,
  Copy,
  Download,
  Star,
  ExternalLink,
  Github,
  Package,
  Calendar,
  User,
} from "lucide-react";
import { Rule, Prompt, Library } from "@/types";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

interface FeaturedCardProps {
  item: Rule | Prompt | Library;
  type: "rule" | "prompt" | "library";
}

export function FeaturedCard({ item, type }: FeaturedCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyContent = async () => {
    try {
      let textToCopy = "";
      if (type === "rule") {
        textToCopy = (item as Rule).prompt;
      } else if (type === "prompt") {
        textToCopy = (item as Prompt).content;
      } else {
        textToCopy = (item as Library).githubUrl;
      }

      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = async () => {
    try {
      const title =
        type === "library"
          ? (item as Library).name
          : (item as Rule | Prompt).title;
      await navigator.share({
        title,
        text: item.description,
        url: window.location.href,
      });
    } catch (err) {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  const renderContent = () => {
    if (type === "library") {
      const library = item as Library;
      return (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {library.name}
            </h3>
            <p className="text-gray-600 text-sm mb-2">by {library.author}</p>
            <p className="text-gray-700 leading-relaxed">
              {library.description}
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              <span>{library.stars.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              <span>{library.downloads.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>
                {formatDistanceToNow(new Date(library.lastUpdate), {
                  addSuffix: true,
                  locale: ko,
                })}
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button asChild size="sm" className="btn-secondary flex-1">
              <Link href={library.githubUrl} target="_blank">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Link>
            </Button>
            {library.npmUrl && (
              <Button asChild size="sm" className="btn-secondary flex-1">
                <Link href={library.npmUrl} target="_blank">
                  <Package className="h-4 w-4 mr-2" />
                  NPM
                </Link>
              </Button>
            )}
          </div>
        </div>
      );
    }

    const ruleOrPrompt = item as Rule | Prompt;
    const content =
      type === "rule"
        ? (ruleOrPrompt as Rule).prompt
        : (ruleOrPrompt as Prompt).content;
    const truncatedContent =
      content.length > 150 ? content.substring(0, 150) + "..." : content;

    return (
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {ruleOrPrompt.title}
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            {ruleOrPrompt.description}
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <div className="cursor-pointer bg-gray-50 p-4 rounded border border-gray-200 hover:border-gray-300 transition-colors">
              <code className="text-gray-700 text-sm font-mono leading-relaxed block">
                {truncatedContent}
              </code>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                {ruleOrPrompt.title}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyContent}
                  className="btn-ghost"
                >
                  <Copy className="h-4 w-4" />
                  {copied && <span className="ml-1 text-xs">복사됨</span>}
                </Button>
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <pre className="bg-gray-50 p-6 rounded border text-gray-700 text-sm leading-relaxed whitespace-pre-wrap overflow-x-auto">
                {content}
              </pre>
            </div>
          </DialogContent>
        </Dialog>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{ruleOrPrompt.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              <span>
                {(ruleOrPrompt as Rule).likes || (ruleOrPrompt as Prompt).likes}
              </span>
            </div>
            {type === "prompt" && (
              <div className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                <span>{(ruleOrPrompt as Prompt).downloads}</span>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopyContent}
              className="btn-ghost p-2"
            >
              <Copy className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`btn-ghost p-2 ${isLiked ? "text-red-500" : ""}`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="btn-ghost p-2"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className="card card-hover">
      <CardContent className="p-6">
        {renderContent()}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200">
          {item.tags.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs px-2 py-1 rounded"
            >
              {tag}
            </Badge>
          ))}
          {item.tags.length > 3 && (
            <Badge
              variant="secondary"
              className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded"
            >
              +{item.tags.length - 3} more
            </Badge>
          )}
        </div>

        {/* View More Link */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
          <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
            {type === "rule"
              ? "AI 규칙"
              : type === "prompt"
                ? "프롬프트"
                : "라이브러리"}
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="link-primary text-sm p-0 h-auto font-medium"
          >
            자세히 보기
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
