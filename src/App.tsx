/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { FontCard } from './components/FontCard';
import { FontSpecimenModal } from './components/FontSpecimenModal';
import { SelectedFamiliesDrawer } from './components/SelectedFamiliesDrawer';
import { IconsCatalog } from './components/IconsCatalog';
import { KnowledgeSection } from './components/KnowledgeSection';
import { AboutModal } from './components/AboutModal';
import { Footer } from './components/Footer';
import { FONTS_DATA } from './data/fonts';
import { FontItem, FontCategory } from './types/font';
import { 
  Sparkles, 
  ExternalLink, 
  Check, 
  Globe2, 
  Smartphone, 
  MessageSquare,
  ShieldCheck,
  Building2,
  UserCheck,
  Code2
} from 'lucide-react';

export default function App() {
  // Theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  // Navigation tab
  const [activeTab, setActiveTab] = useState<'fonts' | 'noto' | 'icons' | 'knowledge' | 'about'>('fonts');

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [previewText, setPreviewText] = useState('');
  const [fontSize, setFontSize] = useState(40);
  const [selectedCategory, setSelectedCategory] = useState<FontCategory | 'all'>('all');
  const [selectedScript, setSelectedScript] = useState('All languages');
  const [sortBy, setSortBy] = useState<'popularity' | 'trending' | 'newest' | 'name'>('popularity');
  const [isVariableOnly, setIsVariableOnly] = useState(false);
  const [minStyles, setMinStyles] = useState(1);
  const [layoutMode, setLayoutMode] = useState<'grid' | 'list'>('grid');

  // Selected fonts collection (for embed code & CSS generation)
  const [selectedFonts, setSelectedFonts] = useState<FontItem[]>(() => {
    // Default with Roboto and Montserrat for instant live preview demo
    return [FONTS_DATA[0], FONTS_DATA[2]];
  });

  const [selectedWeightsMap, setSelectedWeightsMap] = useState<Record<string, number[]>>({
    'roboto': [400, 700],
    'montserrat': [400, 600]
  });

  // Favorites
  const [favorites, setFavorites] = useState<string[]>(['roboto', 'montserrat', 'plus-jakarta-sans']);

  // Modals & Drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [specimenModalFont, setSpecimenModalFont] = useState<FontItem | null>(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Toggle favorite
  const handleToggleFavorite = (fontId: string) => {
    if (favorites.includes(fontId)) {
      setFavorites(favorites.filter(id => id !== fontId));
      showToast('Removed from favorites');
    } else {
      setFavorites([...favorites, fontId]);
      showToast('Added to favorites');
    }
  };

  // Toggle selection for embed drawer
  const handleToggleSelect = (font: FontItem) => {
    const isAlreadySelected = selectedFonts.some(f => f.id === font.id);
    if (isAlreadySelected) {
      setSelectedFonts(selectedFonts.filter(f => f.id !== font.id));
      const newMap = { ...selectedWeightsMap };
      delete newMap[font.id];
      setSelectedWeightsMap(newMap);
      showToast(`Removed ${font.name} from selected families`);
    } else {
      setSelectedFonts([...selectedFonts, font]);
      setSelectedWeightsMap({
        ...selectedWeightsMap,
        [font.id]: font.styles.slice(0, 2).map(s => s.weight)
      });
      showToast(`Added ${font.name} to selected families`);
      setIsDrawerOpen(true);
    }
  };

  // Toggle weight selection for a font
  const handleToggleWeight = (fontId: string, weight: number) => {
    const currentWeights = selectedWeightsMap[fontId] || [];
    let updated: number[];
    if (currentWeights.includes(weight)) {
      updated = currentWeights.filter(w => w !== weight);
      if (updated.length === 0) updated = [400]; // Keep at least regular
    } else {
      updated = [...currentWeights, weight];
    }

    setSelectedWeightsMap({
      ...selectedWeightsMap,
      [fontId]: updated
    });

    // Ensure the font is in selectedFonts list
    if (!selectedFonts.some(f => f.id === fontId)) {
      const targetFont = FONTS_DATA.find(f => f.id === fontId);
      if (targetFont) {
        setSelectedFonts([...selectedFonts, targetFont]);
      }
    }
    showToast(`Updated weight ${weight} for font`);
  };

  const handleRemoveFont = (fontId: string) => {
    setSelectedFonts(selectedFonts.filter(f => f.id !== fontId));
    const newMap = { ...selectedWeightsMap };
    delete newMap[fontId];
    setSelectedWeightsMap(newMap);
  };

  const handleClearAll = () => {
    setSelectedFonts([]);
    setSelectedWeightsMap({});
    showToast('Cleared all selected families');
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setPreviewText('');
    setSelectedCategory('all');
    setSelectedScript('All languages');
    setSortBy('popularity');
    setIsVariableOnly(false);
    setMinStyles(1);
    setFontSize(40);
    showToast('Filters reset to default');
  };

  // Filter fonts
  const filteredFonts = useMemo(() => {
    return FONTS_DATA.filter((font) => {
      // Tab Noto filter
      if (activeTab === 'noto') {
        const isNotoOrMultilingual = 
          font.id.includes('noto') || 
          font.scripts.some(s => s !== 'Latin');
        if (!isNotoOrMultilingual) return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = font.name.toLowerCase().includes(query);
        const matchesDesigner = font.designer.toLowerCase().includes(query);
        const matchesScript = font.scripts.some(s => s.toLowerCase().includes(query));
        if (!matchesName && !matchesDesigner && !matchesScript) return false;
      }

      // Category
      if (selectedCategory !== 'all' && font.category !== selectedCategory) {
        return false;
      }

      // Script
      if (selectedScript !== 'All languages') {
        if (!font.scripts.includes(selectedScript)) {
          return false;
        }
      }

      // Variable
      if (isVariableOnly && !font.isVariable) {
        return false;
      }

      // Min styles
      if (font.stylesCount < minStyles) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'popularity') return a.popularityRank - b.popularityRank;
      if (sortBy === 'trending') return b.glyphCount - a.glyphCount;
      if (sortBy === 'newest') return b.releaseYear - a.releaseYear;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedScript, isVariableOnly, minStyles, sortBy, activeTab]);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#1f1f1f] text-neutral-900 dark:text-neutral-100 flex flex-col font-sans transition-colors">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-neutral-900/90 dark:bg-white/90 text-white dark:text-neutral-900 px-4 py-2 rounded-full text-xs font-medium shadow-lg backdrop-blur-xs flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-150">
          <Check className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCount={selectedFonts.length}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        isDark={isDark}
        toggleTheme={toggleTheme}
        onOpenAbout={() => setIsAboutModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* VIEW 1 & 2: FONTS & NOTO TAB */}
        {(activeTab === 'fonts' || activeTab === 'noto') && (
          <div className="space-y-6">
            
            {/* Noto special informational banner */}
            {activeTab === 'noto' && (
              <div className="bg-[#e8f0fe] dark:bg-[#1a73e8]/15 border-b border-[#1a73e8]/20 py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1440px] mx-auto space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#1a73e8] dark:text-[#8ab4f8] uppercase tracking-wider">
                    <Globe2 className="w-4 h-4" />
                    <span>Global Scripts & Noto Typefaces</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-medium text-neutral-900 dark:text-neutral-100 font-sans">
                    Universal typography for every language on Earth
                  </h1>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
                    Explore typefaces supporting Bengali, Devanagari, Arabic, Cyrillic, Greek, Hebrew, and Latin with complete glyph parity and zero tofu boxes.
                  </p>
                </div>
              </div>
            )}

            {/* Google Fonts Filter Bar */}
            <FilterBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              previewText={previewText}
              setPreviewText={setPreviewText}
              fontSize={fontSize}
              setFontSize={setFontSize}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedScript={selectedScript}
              setSelectedScript={setSelectedScript}
              sortBy={sortBy}
              setSortBy={setSortBy}
              isVariableOnly={isVariableOnly}
              setIsVariableOnly={setIsVariableOnly}
              minStyles={minStyles}
              setMinStyles={setMinStyles}
              layoutMode={layoutMode}
              setLayoutMode={setLayoutMode}
              onReset={handleResetFilters}
              totalVisible={filteredFonts.length}
            />

            {/* Catalog Grid */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-2">
              {filteredFonts.length === 0 ? (
                <div className="py-24 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-400">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                    No matching fonts found
                  </h3>
                  <p className="text-sm text-neutral-500 max-w-sm mx-auto">
                    Try searching for different keywords, resetting filters, or choosing "All categories".
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="px-4 py-2 rounded-full bg-[#1a73e8] text-white text-xs font-medium hover:bg-[#1557b0] transition-colors"
                  >
                    Reset all filters
                  </button>
                </div>
              ) : (
                <div className={
                  layoutMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                    : 'flex flex-col gap-4'
                }>
                  {filteredFonts.map((font) => (
                    <FontCard
                      key={font.id}
                      font={font}
                      previewText={previewText}
                      fontSize={fontSize}
                      isSelected={selectedFonts.some(f => f.id === font.id)}
                      onToggleSelect={handleToggleSelect}
                      onOpenSpecimen={(f) => setSpecimenModalFont(f)}
                      isFavorite={favorites.includes(font.id)}
                      onToggleFavorite={handleToggleFavorite}
                      layoutMode={layoutMode}
                    />
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

        {/* VIEW 3: ICONS TAB */}
        {activeTab === 'icons' && (
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-6 space-y-1">
              <h1 className="text-2xl sm:text-3xl font-medium text-neutral-900 dark:text-neutral-100 font-sans">
                Material Symbols & Icons
              </h1>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Over 100+ production symbols in Outlined, Rounded, and Sharp styles with variable weight and fill.
              </p>
            </div>
            <IconsCatalog />
          </div>
        )}

        {/* VIEW 4: KNOWLEDGE TAB */}
        {activeTab === 'knowledge' && (
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <KnowledgeSection />
          </div>
        )}

        {/* VIEW 5: ABOUT & DEVELOPER TAB (Full Page View) */}
        {activeTab === 'about' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
            {/* Header intro */}
            <div className="space-y-3 text-center sm:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
                NexVora Ecosystem
              </span>
              <h1 className="text-3xl sm:text-4xl font-medium text-neutral-900 dark:text-neutral-100 font-sans">
                About Developer & Company
              </h1>
              <p className="text-base text-neutral-600 dark:text-neutral-300 max-w-2xl">
                NexVora Fonts is an open-source typography directory developed by Prince AR Abdur Rahman and published by NexVora Lab's Ofc.
              </p>
            </div>

            {/* Developer Card */}
            <div className="p-8 rounded-3xl bg-white dark:bg-[#252729] border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-6">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
                <UserCheck className="w-5 h-5" />
                <span>About Developer</span>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  Prince AR Abdur Rahman
                </h2>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                  Independent App Developer
                </p>
              </div>

              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">
                Independent App Developer passionate about building modern Android applications, productivity tools, AI-powered experiences, media players, educational apps, and next-generation digital products.
              </p>

              {/* Developer Competencies */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                {[
                  { title: 'Android Applications', desc: 'Modern Kotlin, Compose & Architecture' },
                  { title: 'Productivity Tools', desc: 'High-speed utilities & task planners' },
                  { title: 'AI-Powered Experiences', desc: 'Generative models & smart assistants' },
                  { title: 'Media Players', desc: 'Audio/video rendering & hardware decoding' },
                  { title: 'Educational Apps', desc: 'Interactive simulations & learning' },
                  { title: 'Digital Products', desc: 'Full-stack web & cloud interfaces' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-neutral-50 dark:bg-[#1a1b1e] border border-neutral-200 dark:border-neutral-800 space-y-1">
                    <div className="font-semibold text-xs text-neutral-900 dark:text-neutral-100">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-neutral-500">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact buttons */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 space-y-3">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                  Direct Contact & Social Profiles
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* WhatsApp 1 */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40">
                    <div>
                      <div className="text-xs text-emerald-800 dark:text-emerald-300 font-medium">WhatsApp Contact 1</div>
                      <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100">01707424006</div>
                    </div>
                    <a
                      href="https://wa.me/8801707424006"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>

                  {/* WhatsApp 2 */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40">
                    <div>
                      <div className="text-xs text-emerald-800 dark:text-emerald-300 font-medium">WhatsApp Contact 2</div>
                      <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100">01796951709</div>
                    </div>
                    <a
                      href="https://wa.me/8801796951709"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>

                  {/* Facebook Link */}
                  <a
                    href="https://www.facebook.com/share/1BNn32qoJo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/40 hover:bg-blue-100/70 transition-colors group"
                  >
                    <div>
                      <div className="text-xs text-blue-800 dark:text-blue-300 font-medium">Official Facebook Profile</div>
                      <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100">Prince AR Abdur Rahman</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* Instagram Link */}
                  <a
                    href="https://www.instagram.com/ur___abdur____rahman__2008"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-pink-50 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-800/40 hover:bg-pink-100/70 transition-colors group"
                  >
                    <div>
                      <div className="text-xs text-pink-800 dark:text-pink-300 font-medium">Official Instagram Profile</div>
                      <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100">@ur___abdur____rahman__2008</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-rose-600 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Company Card */}
            <div className="p-8 rounded-3xl bg-white dark:bg-[#252729] border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-6">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
                <Building2 className="w-5 h-5" />
                <span>About Company</span>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  NexVora Lab's Ofc
                </h2>
                <p className="text-sm font-medium text-neutral-500 mt-1">
                  Technology, Mobile Applications & Creative Laboratory
                </p>
              </div>

              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">
                NexVora Lab's Ofc focuses on creating innovative Android applications designed to improve productivity, entertainment, learning, and digital experiences.
              </p>

              <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-[#1a1b1e] border border-neutral-200 dark:border-neutral-800 space-y-2">
                <span className="text-xs font-semibold text-[#1a73e8] dark:text-[#8ab4f8] uppercase tracking-wider">
                  Company Mission
                </span>
                <p className="text-base font-medium text-neutral-900 dark:text-neutral-100 italic">
                  "Build fast, beautiful, privacy-friendly, and user-focused applications accessible to everyone."
                </p>
              </div>
            </div>

            {/* Technical Information & Credits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-white dark:bg-[#252729] border border-neutral-200 dark:border-neutral-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  <Code2 className="w-4 h-4" />
                  <span>Technical Information</span>
                </div>
                <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <div className="flex justify-between py-1 border-b border-neutral-100 dark:border-neutral-800">
                    <span>Release Version:</span>
                    <span className="font-bold text-neutral-900 dark:text-neutral-100 font-mono">1.0.0</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-100 dark:border-neutral-800">
                    <span>Target Platforms:</span>
                    <span className="font-medium">Web, Android, Desktop PWA</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Architecture:</span>
                    <span className="font-medium">Vite + React 19 + Tailwind v4</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-[#252729] border border-neutral-200 dark:border-neutral-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  <Sparkles className="w-4 h-4" />
                  <span>Credits</span>
                </div>
                <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <div className="py-1 border-b border-neutral-100 dark:border-neutral-800">
                    Developed by: <strong className="text-neutral-900 dark:text-neutral-100 font-medium">Prince AR Abdur Rahman</strong>
                  </div>
                  <div className="py-1 border-b border-neutral-100 dark:border-neutral-800">
                    Published by: <strong className="text-neutral-900 dark:text-neutral-100 font-medium">NexVora Lab's Ofc</strong>
                  </div>
                  <div className="text-xs text-neutral-500 pt-1">
                    © 2026 NexVora Lab's Ofc. All Rights Reserved
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* Font Specimen Modal */}
      <FontSpecimenModal
        font={specimenModalFont}
        onClose={() => setSpecimenModalFont(null)}
        isSelected={specimenModalFont ? selectedFonts.some(f => f.id === specimenModalFont.id) : false}
        onToggleSelect={handleToggleSelect}
        selectedWeights={specimenModalFont ? (selectedWeightsMap[specimenModalFont.id] || []) : []}
        onToggleWeight={handleToggleWeight}
      />

      {/* Selected Families Slide-over Drawer */}
      <SelectedFamiliesDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        selectedFonts={selectedFonts}
        selectedWeightsMap={selectedWeightsMap}
        onRemoveFont={handleRemoveFont}
        onClearAll={handleClearAll}
        onToggleWeight={handleToggleWeight}
      />

      {/* Quick About Modal */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />

      {/* Google Fonts styled Footer */}
      <Footer
        onOpenAbout={() => setIsAboutModalOpen(true)}
        onNavigateTab={(tab) => setActiveTab(tab)}
      />

    </div>
  );
}
