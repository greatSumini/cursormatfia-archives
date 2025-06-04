export interface Rule {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
  tags: string[];
  author: string;
  createdAt: string;
  updatedAt: string;
  likes: number;
  isPublic: boolean;
  isFeatured?: boolean;
  thumbnail?: string;
}

export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  createdAt: string;
  updatedAt: string;
  likes: number;
  downloads: number;
  isFeatured?: boolean;
  thumbnail?: string;
}

export interface Library {
  id: string;
  name: string;
  description: string;
  githubUrl: string;
  npmUrl?: string;
  category: string;
  tags: string[];
  author: string;
  stars: number;
  downloads: number;
  lastUpdate: string;
  isFeatured?: boolean;
  thumbnail?: string;
  logoUrl?: string;
}

export interface RuleCategory {
  name: string;
  description: string;
  rules: Rule[];
}

export interface SearchFilters {
  category?: string;
  tags?: string[];
  author?: string;
  dateRange?: {
    start: string;
    end: string;
  };
}

export interface FeaturedSection {
  title: string;
  description: string;
  items: (Rule | Prompt | Library)[];
}
