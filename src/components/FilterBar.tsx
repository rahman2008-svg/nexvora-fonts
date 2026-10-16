import React, { useState } from 'react';
import { 
  Search, 
  X, 
  SlidersHorizontal, 
  LayoutGrid, 
  List, 
  RotateCcw, 
  ChevronDown,
  Check
} from 'lucide-react';
import { FontCategory } from '../types/font';
import { POPULAR_PREVIEW_TEXTS } from '../data/fonts';

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  previewText: string;
  setPreviewText: (text: string) => void;
  fontSize: number;
  setFontSize: (size: number) => void;
  selectedCategory: FontCategory | 'all';
  setSelectedCategory: (cat: FontCategory | 'all') => void;
  selectedScript: string;
  setSelectedScript: (script: string) => void;
  sortBy: 'popularity' | 'trending' | 'newest' | 'name';
  setSortBy: (sort: 'popularity' | 'trending' | 'newest' | 'name') => void;
  isVariableOnly: boolean;
  setIsVariableOnly: (val: boolean) => void;
  minStyles: number;
  setMinStyles: (val: number) => void;
  layoutMode: 'grid' | 'list';
  setLayoutMode: (mode: 'grid' | 'list') => void;
  onReset: () => void;
  totalVisible: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  setSearchQuery,
  previewText,
  setPreviewText,
  fontSize,
  setFontSize,
  selectedCategory,
  setSelectedCategory,
  selectedScript,
  setSelectedScript,
  sortBy,
  setSortBy,
  isVariableOnly,
  setIsVariableOnly,
  minStyles,
  setMinStyles,
  layoutMode,
  setLayoutMode,
  onReset,
  totalVisible
}) => {
  const [showPresets, setShowPresets] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [showScriptMenu, setShowScriptMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showPropertiesModal, setShowPropertiesModal] = useState(false);

  const categories: { id: FontCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All categories' },
    { id: 'sans-serif', label: 'Sans Serif' },
    { id: 'serif', label: 'Serif' },
    { id: 'display', label: 'Display' },
    { id: 'handwriting', label: 'Handwriting' },
    { id: 'monospace', label: 'Monospace' },
  ];

  const scripts = [
    'All languages',
    'Latin',
    'Bengali',
    'Cyrillic',
    'Greek',
    'Devanagari',
    'Vietnamese',
    'Hebrew'
  ];

  const sortOptions = [
    { id: 'popularity', label: 'Most popular' },
    { id: 'trending', label: 'Trending' },
    { id: 'newest', label: 'Newest' },
    { id: 'name', label: 'Name' },
  ] as const;

  const fontSizes = [14, 20, 24, 32, 40, 56, 72, 96];

  const isFiltered = 
    searchQuery !== '' || 
    selectedCategory !== 'all' || 
    selectedScript !== 'All languages' || 
    isVariableOnly || 
    minStyles > 1 || 
    sortBy !== 'popularity';

  return (
    <div className="bg-white dark:bg-[#1f1f1f] border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 space-y-3">
        
        {/* Row 1: Search & Preview text & Font size slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
          
          {/* Search Fonts */}
          <div className="lg:col-span-4 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 dark:text-neutral-500 pointer-events-none" />
            <input
              type="text"
              placeholder="Search fonts by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2 text-sm bg-neutral-100 dark:bg-neutral-800/80 hover:bg-neutral-200/70 dark:hover:bg-neutral-800 focus:bg-white dark:focus:bg-[#2d2e30] border border-transparent focus:border-[#1a73e8] dark:focus:border-[#8ab4f8] rounded-full text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 transition-all outline-hidden"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Custom Preview Text */}
          <div className="lg:col-span-5 relative">
            <input
              type="text"
              placeholder="Type something to preview..."
              value={previewText}
              onChange={(e) => setPreviewText(e.target.value)}
              className="w-full pl-4 pr-10 py-2 text-sm bg-neutral-100 dark:bg-neutral-800/80 hover:bg-neutral-200/70 dark:hover:bg-neutral-800 focus:bg-white dark:focus:bg-[#2d2e30] border border-transparent focus:border-[#1a73e8] dark:focus:border-[#8ab4f8] rounded-full text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 transition-all outline-hidden"
            />
            <button
              onClick={() => setShowPresets(!showPresets)}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 rounded-full"
              title="Select sample text presets"
              aria-label="Presets"
            >
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Presets Dropdown */}
            {showPresets && (
              <div 
                className="absolute left-0 right-0 mt-2 py-2 bg-white dark:bg-[#282a2c] rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 z-50 text-sm max-h-72 overflow-y-auto"
                onMouseLeave={() => setShowPresets(false)}
              >
                <div className="px-3.5 py-1 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Sample Text Presets
                </div>
                {POPULAR_PREVIEW_TEXTS.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setPreviewText(item.text);
                      setShowPresets(false);
                    }}
                    className="w-full text-left px-3.5 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex flex-col gap-0.5 transition-colors"
                  >
                    <span className="font-medium text-neutral-900 dark:text-neutral-100 text-xs">
                      {item.label}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                      {item.text}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Font Size Slider with pixel readout */}
          <div className="lg:col-span-3 flex items-center gap-3 bg-neutral-100 dark:bg-neutral-800/80 px-3.5 py-1.5 rounded-full border border-transparent">
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 shrink-0">
              {fontSize}px
            </span>
            <input
              type="range"
              min="12"
              max="96"
              step="1"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-full h-1.5 bg-neutral-300 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#1a73e8]"
              aria-label="Font size slider"
            />
            {/* Quick size drop */}
            <div className="flex gap-1 shrink-0">
              {[24, 40, 64].map((sz) => (
                <button
                  key={sz}
                  onClick={() => setFontSize(sz)}
                  className={`text-[11px] px-1.5 py-0.5 rounded transition-colors ${
                    fontSize === sz 
                      ? 'bg-[#1a73e8] text-white' 
                      : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Row 2: Category tabs, Language, Properties, Sort, View mode & Count */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
          
          {/* Left filters: Category chips */}
          <div className="flex items-center flex-wrap gap-1.5">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Right filters: Script, Properties, Sort & View Mode */}
          <div className="flex items-center flex-wrap gap-2">
            
            {/* Language / Script dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowScriptMenu(!showScriptMenu);
                  setShowSortMenu(false);
                  setShowPropertiesModal(false);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                  selectedScript !== 'All languages'
                    ? 'border-[#1a73e8] text-[#1a73e8] dark:border-[#8ab4f8] dark:text-[#8ab4f8] bg-[#e8f0fe] dark:bg-[#1a73e8]/20'
                    : 'border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                <span>{selectedScript}</span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
              </button>

              {showScriptMenu && (
                <div 
                  className="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-[#282a2c] rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 z-50 text-xs"
                  onMouseLeave={() => setShowScriptMenu(false)}
                >
                  <div className="px-3 py-1 font-semibold text-neutral-400 uppercase tracking-wider text-[10px]">
                    Filter by Language / Script
                  </div>
                  {scripts.map((script) => (
                    <button
                      key={script}
                      onClick={() => {
                        setSelectedScript(script);
                        setShowScriptMenu(false);
                      }}
                      className="w-full text-left px-3.5 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-between text-neutral-800 dark:text-neutral-200"
                    >
                      <span>{script}</span>
                      {selectedScript === script && <Check className="w-3.5 h-3.5 text-[#1a73e8]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Font Properties filter */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowPropertiesModal(!showPropertiesModal);
                  setShowScriptMenu(false);
                  setShowSortMenu(false);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                  isVariableOnly || minStyles > 1
                    ? 'border-[#1a73e8] text-[#1a73e8] dark:border-[#8ab4f8] dark:text-[#8ab4f8] bg-[#e8f0fe] dark:bg-[#1a73e8]/20'
                    : 'border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Properties</span>
                {(isVariableOnly || minStyles > 1) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] dark:bg-[#8ab4f8]" />
                )}
              </button>

              {showPropertiesModal && (
                <div 
                  className="absolute right-0 mt-2 w-72 p-4 bg-white dark:bg-[#282a2c] rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 z-50 text-xs space-y-4"
                  onMouseLeave={() => setShowPropertiesModal(false)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">
                      Font Properties
                    </span>
                    <button
                      onClick={() => {
                        setIsVariableOnly(false);
                        setMinStyles(1);
                      }}
                      className="text-[#1a73e8] dark:text-[#8ab4f8] hover:underline text-[11px]"
                    >
                      Reset
                    </button>
                  </div>

                  {/* Variable fonts toggle */}
                  <label className="flex items-center justify-between cursor-pointer py-1">
                    <div>
                      <div className="font-medium text-neutral-800 dark:text-neutral-200">
                        Variable fonts only
                      </div>
                      <div className="text-[11px] text-neutral-500">
                        Smooth continuous weight axis
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={isVariableOnly}
                      onChange={(e) => setIsVariableOnly(e.target.checked)}
                      className="w-4 h-4 rounded text-[#1a73e8] accent-[#1a73e8] focus:ring-0"
                    />
                  </label>

                  {/* Minimum styles slider */}
                  <div className="space-y-1.5 pt-2 border-t border-neutral-100 dark:border-neutral-700">
                    <div className="flex justify-between items-center text-neutral-800 dark:text-neutral-200 font-medium">
                      <span>Number of styles:</span>
                      <span className="text-neutral-500">{minStyles}+</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="12"
                      value={minStyles}
                      onChange={(e) => setMinStyles(Number(e.target.value))}
                      className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#1a73e8]"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowSortMenu(!showSortMenu);
                  setShowScriptMenu(false);
                  setShowPropertiesModal(false);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <span className="text-neutral-400">Sort by:</span>
                <span className="font-medium text-neutral-800 dark:text-neutral-200">
                  {sortOptions.find(s => s.id === sortBy)?.label}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
              </button>

              {showSortMenu && (
                <div 
                  className="absolute right-0 mt-2 w-44 py-2 bg-white dark:bg-[#282a2c] rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 z-50 text-xs"
                  onMouseLeave={() => setShowSortMenu(false)}
                >
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setSortBy(opt.id);
                        setShowSortMenu(false);
                      }}
                      className="w-full text-left px-3.5 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-between text-neutral-800 dark:text-neutral-200"
                    >
                      <span>{opt.label}</span>
                      {sortBy === opt.id && <Check className="w-3.5 h-3.5 text-[#1a73e8]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* View Mode (Grid vs List) */}
            <div className="flex items-center bg-neutral-100 dark:bg-neutral-800 rounded-full p-0.5 border border-neutral-200 dark:border-neutral-700">
              <button
                onClick={() => setLayoutMode('grid')}
                className={`p-1.5 rounded-full transition-colors ${
                  layoutMode === 'grid' 
                    ? 'bg-white dark:bg-[#282a2c] text-neutral-900 dark:text-white shadow-xs' 
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
                title="Grid view"
                aria-label="Grid layout"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setLayoutMode('list')}
                className={`p-1.5 rounded-full transition-colors ${
                  layoutMode === 'list' 
                    ? 'bg-white dark:bg-[#282a2c] text-neutral-900 dark:text-white shadow-xs' 
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
                title="List view"
                aria-label="List layout"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Reset Button (only if filtered) */}
            {isFiltered && (
              <button
                onClick={onReset}
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
                title="Reset all filters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}

            {/* Total Results Count */}
            <div className="pl-1 text-xs text-neutral-500 dark:text-neutral-400 tabular-nums">
              {totalVisible} fonts
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
