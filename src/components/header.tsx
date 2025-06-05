"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Github, Menu, Moon } from "lucide-react";
import {
  CATEGORY_RULES,
  CATEGORY_PROMPTS,
  CATEGORY_LIBRARIES,
} from "@/constants/categories";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-semibold text-white">
                CursorMatfia&apos;s Archive
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {CATEGORY_RULES}
            </Link>
            <Link
              href="/generate"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Generate
            </Link>

            {/* More Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  More
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 border-gray-700">
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                  Categories
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                  About
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                  Contact
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex text-gray-300 hover:text-white hover:bg-gray-800"
            >
              <Moon className="h-4 w-4" />
            </Button>

            {/* GitHub link */}
            <Link
              href="https://github.com/cursormatfia"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <Github className="h-4 w-4" />
              </Button>
            </Link>

            {/* Sign In Button */}
            <Button
              variant="default"
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md"
            >
              Sign In
            </Button>

            {/* Mobile menu */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-300 hover:text-white hover:bg-gray-800"
                  >
                    <Menu className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-800 border-gray-700">
                  <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                    {CATEGORY_RULES}
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                    Generate
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                    Categories
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                    About
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
