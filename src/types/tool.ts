//src/types/tool.ts
export type Audience = {
  icon: string;
  title: string;
  description: string;
};

export type Tool = {
  id: string;
  slug: string;
  name: string;
  category: string;
  short_description: string;
  pricing: string;
  best_for: string;
  website_url: string;
  image_url: string;
  tags: string[];
  features: string[];
  pros: string[];
  cons: string[];
  audience: Audience[];
  created_at: string;
  logo_url?: string; // Добавляем поле для логотипа (опционально)
};