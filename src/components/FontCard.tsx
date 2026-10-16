import React, { useState } from 'react';
import { 
  Heart, 
  Plus, 
  Check, 
  Copy, 
  ExternalLink,
  Sliders,
  Sparkles
} from 'lucide-react';
import { FontItem } from '../types/font';

interface FontCardProps {
  font: FontItem;
  previewText: string;
  fontSize: number;
  isSelected: boolean;
  onToggleSelect: (font: FontItem) => void;
  onOpenSpecimen: (font: FontItem) => void;
  isFavorite: boolean;
  onToggleFavorite: (fontId: string) => void;
  layoutMode: 'grid' | 'list';
}

export const FontCard: React.FC<FontCardProps> = ({
  font,
  previewText,
  fontSize,
  isSelected,
  onToggleSelect,
  onOpenSpecimen,
  isFavorite,
  onToggleFavorite,
  layoutMode
}) => {
  const [copied, setCopied] = useState(false);
  const [cardWeight, setCardWeight] = useState<number>(400);

  const displayText = previewText.trim() ? previewText : font.sampleSentence;

  const handleCopyCSS = (e: React.MouseEvent) => {
    e.stopPropagation();
    const cssCode = `font-family: '${font.name}', ${font.category === 'serif' ? 'serif' : font.category === 'monospace' ? 'monospace' : font.category === 'handwriting' ? 'cursive' : 'sans-serif'};`;
    navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const getFallbackCategory = (cat: string) => {
    switch (cat) {
      case 'serif': return 'serif';
      case 'monospace': return 'monospace';
      case 'handwriting': return 'cursive';
      case 'display': return 'sans-serif';
      default: return 'sans-serif';
    }
  };

  const isList = layoutMode === 'list';

  return (
    <div 
      onClick={() => onOpenSpecimen(font)}
      className={`group relative bg-white dark:bg-[#252729] rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg dark:hover:shadow-black/20 transition-all cursor-pointer flex flex-col justify-between overflow-hidden ${
        isList ? 'p-6 lg:flex-row lg:items-center lg:gap-8' : 'p-6 min-h-[300px]'
      }`}
    >
      {/* Top Header Row of Card */}
      <div className={`flex items-start justify-between gap-4 ${isList ? 'lg:w-1/4 shrink-0' : ''}`}>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors font-sans">
              {font.name}
            </h3>
            {font.isVariable && (
              <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
                Variable
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
            <span>{font.designer}</span>
            <span aria-hidden="true">·</span>
            <span>{font.stylesCount} {font.stylesCount === 1 ? 'style' : 'styles'}</span>
          </div>
        </div>

        {/* Card Header Actions */}
        <div className="flex items-center gap-1 shrink-0" onClick={(e) => e.stopPropagation()}>
          {/* Favorite toggle */}
          <button
            onClick={() => onToggleFavorite(font.id)}
            className={`p-1.5 rounded-full transition-colors ${
              isFavorite
                ? 'text-red-500 bg-red-50 dark:bg-red-950/30'
                : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
            aria-label="Favorite font"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>

          {/* Add to collection button */}
          <button
            onClick={() => onToggleSelect(font)}
            className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full transition-all ${
              isSelected
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700'
            }`}
            title={isSelected ? "Remove from selected collection" : "Add to collection"}
            aria-label={isSelected ? "Selected" : "Add font family"}
          >
            {isSelected ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Selected</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Specimen Preview Area */}
      <div className={`my-4 flex-1 flex items-center ${isList ? 'lg:my-0 lg:flex-1' : ''}`}>
        <p 
          className="text-neutral-900 dark:text-neutral-100 break-words leading-tight transition-all select-all"
          style={{
            fontFamily: `'${font.name}', ${getFallbackCategory(font.category)}`,
            fontSize: `${isList ? Math.min(fontSize, 48) : fontSize}px`,
            fontWeight: cardWeight,
            letterSpacing: 'normal'
          }}
        >
          {displayText}
        </p>
      </div>

      {/* Card Footer: Metadata, weight switcher & Specimen link */}
      <div className={`pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 ${
        isList ? 'lg:w-1/4 lg:pt-0 lg:border-t-0 lg:justify-end lg:gap-4 shrink-0' : ''
      }`}>
        <div className="flex items-center gap-2">
          <span className="capitalize">{font.category}</span>
          <span aria-hidden="true">·</span>
          <span>Rank #{font.popularityRank}</span>
        </div>

        <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
          {/* Quick copy CSS */}
          <button
            onClick={handleCopyCSS}
            className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors"
            title="Copy CSS font-family declaration"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span className="text-[11px]">CSS</span>
              </>
            )}
          </button>

          {/* Open Specimen button */}
          <button
            onClick={() => onOpenSpecimen(font)}
            className="flex items-center gap-1 px-2 py-1 rounded-md text-[#1a73e8] dark:text-[#8ab4f8] hover:bg-[#e8f0fe] dark:hover:bg-[#1a73e8]/20 transition-colors"
            title="Open font specimen & glyph map"
          >
            <span className="text-[11px] font-medium">Explore</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
