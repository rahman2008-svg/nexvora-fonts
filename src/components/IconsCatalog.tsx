import React, { useState } from 'react';
import { 
  Search, 
  X, 
  Copy, 
  Check, 
  Download, 
  SlidersHorizontal,
  Layers,
  Sparkles
} from 'lucide-react';
import { ICONS_DATA } from '../data/icons';
import { IconItem } from '../types/font';

export const IconsCatalog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [iconStyle, setIconStyle] = useState<'outlined' | 'rounded' | 'sharp'>('outlined');
  const [iconWeight, setIconWeight] = useState<number>(400);
  const [iconFill, setIconFill] = useState<boolean>(false);
  const [iconSize, setIconSize] = useState<number>(36);
  const [selectedIcon, setSelectedIcon] = useState<IconItem | null>(null);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const categories = ['All', 'Action', 'Navigation', 'Communication', 'Media', 'Editor', 'Device'];

  const filteredIcons = ICONS_DATA.filter((icon) => {
    const matchesSearch = 
      icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      icon.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      icon.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || icon.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCopyCode = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleDownloadSVG = (icon: IconItem) => {
    // Generate clean SVG markup for the icon
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" height="${iconSize}px" viewBox="0 -960 960 960" width="${iconSize}px" fill="currentColor"><text x="50%" y="60%" font-family="Material Symbols Outlined" font-size="800" text-anchor="middle" dominant-baseline="middle">${icon.name}</text></svg>`;
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${icon.name}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Icon Control Bar */}
      <div className="bg-white dark:bg-[#1f1f1f] rounded-2xl p-4 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          
          {/* Search Icons */}
          <div className="md:col-span-5 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search icons (e.g., search, heart, user)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2 text-sm bg-neutral-100 dark:bg-neutral-800 rounded-full border border-transparent focus:border-[#1a73e8] dark:focus:border-[#8ab4f8] focus:bg-white dark:focus:bg-[#252729] outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Style Selector: Outlined, Rounded, Sharp */}
          <div className="md:col-span-4 flex items-center bg-neutral-100 dark:bg-neutral-800 p-1 rounded-full">
            {(['outlined', 'rounded', 'sharp'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setIconStyle(st)}
                className={`flex-1 py-1 px-3 text-xs font-medium rounded-full capitalize transition-colors ${
                  iconStyle === st
                    ? 'bg-white dark:bg-[#252729] text-neutral-900 dark:text-white shadow-xs'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          {/* Size slider & Fill toggle */}
          <div className="md:col-span-3 flex items-center gap-3 bg-neutral-100 dark:bg-neutral-800 px-3.5 py-1.5 rounded-full">
            <span className="text-xs text-neutral-500 shrink-0">{iconSize}px</span>
            <input
              type="range"
              min="20"
              max="64"
              value={iconSize}
              onChange={(e) => setIconSize(Number(e.target.value))}
              className="w-full h-1.5 bg-neutral-300 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#1a73e8]"
            />
            <button
              onClick={() => setIconFill(!iconFill)}
              className={`text-xs px-2 py-0.5 rounded font-medium transition-colors shrink-0 ${
                iconFill
                  ? 'bg-[#1a73e8] text-white'
                  : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300'
              }`}
            >
              Fill
            </button>
          </div>

        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="text-xs text-neutral-400 ml-auto tabular-nums">
            {filteredIcons.length} symbols
          </span>
        </div>
      </div>

      {/* Icons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {filteredIcons.map((icon) => {
          const isSelected = selectedIcon?.name === icon.name;
          return (
            <div
              key={icon.name}
              onClick={() => setSelectedIcon(icon)}
              className={`p-4 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all border ${
                isSelected
                  ? 'border-[#1a73e8] bg-[#e8f0fe] dark:bg-[#1a73e8]/20 shadow-sm'
                  : 'bg-white dark:bg-[#252729] border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-md'
              }`}
            >
              <span 
                className="material-symbols-outlined text-neutral-800 dark:text-neutral-100 transition-all select-none"
                style={{
                  fontSize: `${iconSize}px`,
                  fontVariationSettings: `'FILL' ${iconFill ? 1 : 0}, 'wght' ${iconWeight}, 'GRAD' 0, 'opsz' 48`
                }}
              >
                {icon.name}
              </span>
              <span className="text-[11px] font-medium text-neutral-600 dark:text-neutral-300 truncate max-w-full text-center">
                {icon.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Selected Icon Drawer / Inspector Modal */}
      {selectedIcon && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs flex justify-end">
          <div 
            className="w-full max-w-md bg-white dark:bg-[#202124] h-full shadow-2xl flex flex-col border-l border-neutral-200 dark:border-neutral-800 animate-in slide-in-from-right duration-250 p-6 space-y-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                Icon Details
              </h3>
              <button
                onClick={() => setSelectedIcon(null)}
                className="p-1.5 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Large preview */}
            <div className="p-12 rounded-2xl bg-neutral-100 dark:bg-[#1a1b1e] border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
              <span 
                className="material-symbols-outlined text-neutral-900 dark:text-neutral-100"
                style={{
                  fontSize: '72px',
                  fontVariationSettings: `'FILL' ${iconFill ? 1 : 0}, 'wght' ${iconWeight}, 'GRAD' 0, 'opsz' 48`
                }}
              >
                {selectedIcon.name}
              </span>
            </div>

            <div>
              <h4 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                {selectedIcon.label}
              </h4>
              <p className="text-xs text-neutral-500 mt-1">
                Category: {selectedIcon.category} · Codepoint: {selectedIcon.codepoint}
              </p>
            </div>

            {/* Quick snippet copy */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Web Embedding Snippet
              </span>

              <div className="relative">
                <pre className="p-3 bg-neutral-900 text-neutral-100 rounded-xl text-xs font-mono overflow-x-auto">
                  {`<span class="material-symbols-outlined">${selectedIcon.name}</span>`}
                </pre>
                <button
                  onClick={() => handleCopyCode(`<span class="material-symbols-outlined">${selectedIcon.name}</span>`, 'html')}
                  className="absolute right-2 top-2 p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs"
                >
                  {copiedType === 'html' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="relative">
                <pre className="p-3 bg-neutral-900 text-neutral-100 rounded-xl text-xs font-mono overflow-x-auto">
                  {selectedIcon.name}
                </pre>
                <button
                  onClick={() => handleCopyCode(selectedIcon.name, 'name')}
                  className="absolute right-2 top-2 p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs"
                >
                  {copiedType === 'name' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-4">
              <button
                onClick={() => handleDownloadSVG(selectedIcon)}
                className="flex-1 py-2.5 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-medium flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download SVG</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
