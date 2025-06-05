"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MCPGuideModal from "./mcp-guide-modal";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function ModernHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: "#featured-rules", label: "Rules" },
    { href: "#featured-prompts", label: "Prompts" },
    { href: "#featured-libraries", label: "Libraries" },
  ];

  return (
    <>
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <Image
                src="/images/logo.png"
                alt="CursorMatfia's Archive"
                width={32}
                height={32}
              />
              <span className="text-lg font-semibold text-gray-900">
                CursorMatfia&apos;s Archive
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <MCPGuideModal />
              {/* GitHub link */}
              <Link
                href="https://github.com/cursormatfia"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                GitHub
              </Link>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="btn-ghost p-2"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="max-w-6xl mx-auto px-4 py-4 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
              {/* Mobile GitHub Link */}
              <Link
                href="https://github.com/cursormatfia"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-700 hover:text-gray-900 font-medium py-2"
              >
                GitHub
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
