export type FontCategory = 'sans-serif' | 'serif' | 'display' | 'handwriting' | 'monospace';

export interface FontStyle {
  id: string;
  name: string;
  weight: number;
  isItalic: boolean;
}

export interface FontPairing {
  fontName: string;
  role: string;
  rationale: string;
}

export interface FontItem {
  id: string;
  name: string;
  category: FontCategory;
  designer: string;
  designerBio?: string;
  stylesCount: number;
  isVariable: boolean;
  sampleSentence: string;
  styles: FontStyle[];
  scripts: string[];
  description: string;
  license: string;
  popularityRank: number;
  releaseYear: number;
  glyphCount: number;
  pairings: FontPairing[];
}

export interface SelectedStyle {
  fontId: string;
  fontName: string;
  category: FontCategory;
  weights: number[];
}

export interface IconItem {
  name: string;
  label: string;
  category: string;
  codepoint: string;
  tags: string[];
}

export interface KnowledgeArticle {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  content: string[];
}
