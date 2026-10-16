import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Plus, 
  Check, 
  Copy, 
  Sliders, 
  Type, 
  Grid, 
  Info, 
  Layers,
  Sparkles,
  Share2
} from 'lucide-react';
import { FontItem, FontStyle } from '../types/font';

interface FontSpecimenModalProps {
  font: FontItem | null;
  onClose: () => void;
  isSelected: boolean;
  onToggleSelect: (font: FontItem) => void;
  selectedWeights: number[];
  onToggleWeight: (fontId: string, weight: number) => void;
}

export const FontSpecimenModal: React.FC<FontSpecimenModalProps> = ({
  font,
  onClose,
  isSelected,
  onToggleSelect,
  selectedWeights,
  onToggleWeight
}) => {
  if (!font) return null;

  const [activeTab, setActiveTab] = useState<'styles' | 'tester' | 'glyphs' | 'about' | 'pairings'>('styles');
  const [testerText, setTesterText] = useState('All their equipment and instruments are alive.');
  const [testerSize, setTesterSize] = useState(48);
  const [testerWeight, setTesterWeight] = useState(400);
  const [testerLineHeight, setTesterLineHeight] = useState(1.2);
  const [testerLetterSpacing, setTesterLetterSpacing] = useState(0);
  const [copiedGlyph, setCopiedGlyph] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Generate character grid
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const numerals = '0123456789'.split('');
  const punctuation = '!@#$%^&*()-_=+[]{}|;:\'",.<>/?`~'.split('');
  const extendedGlyphs = 'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ'.split('');

  const handleCopyGlyph = (char: string) => {
    navigator.clipboard.writeText(char);
    setCopiedGlyph(char);
    setTimeout(() => setCopiedGlyph(null), 1500);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${font.name} - NexVora Fonts`,
        text: `Check out the ${font.name} typeface on NexVora Fonts!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleDownload = () => {
    // Generate clean text spec file or mock zip prompt
    const content = `/* NexVora Fonts - ${font.name} */\n/* Designer: ${font.designer} */\n/* License: ${font.license} */\n\n@import url('https://fonts.googleapis.com/css2?family=${font.name.replace(/\s+/g, '+')}:wght@100..900&display=swap');\n\nfont-family: '${font.name}', sans-serif;\n`;
    const blob = new Blob([content], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${font.name.toLowerCase().replace(/\s+/g, '-')}-spec.css`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-[#202124] rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Specimen Header */}
        <div className="px-6 py-5 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-4 bg-neutral-50/50 dark:bg-[#1a1b1e]">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl sm:text-3xl font-medium text-neutral-900 dark:text-neutral-100 font-sans">
                {font.name}
              </h2>
              {font.isVariable && (
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Variable
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              <span>Designed by <strong className="text-neutral-700 dark:text-neutral-200 font-medium">{font.designer}</strong></span>
              <span aria-hidden="true">·</span>
              <span className="capitalize">{font.category}</span>
              <span aria-hidden="true">·</span>
              <span>{font.releaseYear}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 rounded-full transition-colors"
              title="Share typeface"
              aria-label="Share"
            >
              <Share2 className="w-5 h-5" />
            </button>

            <button
              onClick={handleDownload}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full transition-colors"
              title="Download CSS specimen"
            >
              <Download className="w-4 h-4" />
              <span>Download CSS</span>
            </button>

            <button
              onClick={() => onToggleSelect(font)}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full transition-all ${
                isSelected
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-[#1a73e8] text-white hover:bg-[#1557b0] shadow-xs'
              }`}
            >
              {isSelected ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Selected</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add family</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Specimen Navigation Tabs */}
        <div className="px-6 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-6 overflow-x-auto">
          {[
            { id: 'styles', label: `Styles (${font.styles.length})`, icon: Layers },
            { id: 'tester', label: 'Type Tester', icon: Sliders },
            { id: 'glyphs', label: `Glyphs (${font.glyphCount})`, icon: Grid },
            { id: 'about', label: 'About & License', icon: Info },
            { id: 'pairings', label: 'Pairings', icon: Sparkles },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 py-3.5 text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
                  isActive
                    ? 'border-[#1a73e8] text-[#1a73e8] dark:border-[#8ab4f8] dark:text-[#8ab4f8]'
                    : 'border-transparent text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* TAB 1: STYLES LIST */}
          {activeTab === 'styles' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Select specific weights to include in your web embedding bundle.
                </p>
                <button
                  onClick={() => {
                    font.styles.forEach(s => {
                      if (!selectedWeights.includes(s.weight)) {
                        onToggleWeight(font.id, s.weight);
                      }
                    });
                  }}
                  className="text-xs text-[#1a73e8] dark:text-[#8ab4f8] hover:underline font-medium"
                >
                  Select all styles
                </button>
              </div>

              <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
                {font.styles.map((style) => {
                  const isWeightSelected = selectedWeights.includes(style.weight);
                  return (
                    <div key={style.id} className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="sm:w-1/4 shrink-0">
                        <div className="font-medium text-sm text-neutral-900 dark:text-neutral-100">
                          {style.name}
                        </div>
                        <div className="text-xs text-neutral-400">
                          Weight {style.weight}
                        </div>
                      </div>

                      <div className="flex-1 overflow-hidden">
                        <p 
                          className="text-neutral-900 dark:text-neutral-100 text-2xl truncate select-all"
                          style={{
                            fontFamily: `'${font.name}', sans-serif`,
                            fontWeight: style.weight,
                            fontStyle: style.isItalic ? 'italic' : 'normal'
                          }}
                        >
                          {testerText}
                        </p>
                      </div>

                      <div className="shrink-0">
                        <button
                          onClick={() => onToggleWeight(font.id, style.weight)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                            isWeightSelected
                              ? 'bg-emerald-600 text-white'
                              : 'border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200'
                          }`}
                        >
                          {isWeightSelected ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Style added</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>Select style</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: TYPE TESTER */}
          {activeTab === 'tester' && (
            <div className="space-y-6">
              {/* Controls bar */}
              <div className="p-4 bg-neutral-50 dark:bg-[#1a1b1e] rounded-2xl border border-neutral-200 dark:border-neutral-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-neutral-500">
                    <span>Size</span>
                    <span className="font-mono">{testerSize}px</span>
                  </div>
                  <input
                    type="range"
                    min="14"
                    max="120"
                    value={testerSize}
                    onChange={(e) => setTesterSize(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#1a73e8]"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-neutral-500">
                    <span>Weight</span>
                    <span className="font-mono">{testerWeight}</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="900"
                    step="100"
                    value={testerWeight}
                    onChange={(e) => setTesterWeight(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#1a73e8]"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-neutral-500">
                    <span>Line Height</span>
                    <span className="font-mono">{testerLineHeight.toFixed(1)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.9"
                    max="2.5"
                    step="0.1"
                    value={testerLineHeight}
                    onChange={(e) => setTesterLineHeight(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#1a73e8]"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-neutral-500">
                    <span>Letter Spacing</span>
                    <span className="font-mono">{testerLetterSpacing}px</span>
                  </div>
                  <input
                    type="range"
                    min="-2"
                    max="10"
                    step="0.5"
                    value={testerLetterSpacing}
                    onChange={(e) => setTesterLetterSpacing(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#1a73e8]"
                  />
                </div>
              </div>

              {/* Editable specimen canvas */}
              <div className="min-h-[300px] p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 focus-within:border-[#1a73e8] bg-white dark:bg-[#1a1b1e]">
                <textarea
                  value={testerText}
                  onChange={(e) => setTesterText(e.target.value)}
                  rows={6}
                  className="w-full bg-transparent resize-none border-none outline-none text-neutral-900 dark:text-neutral-100"
                  style={{
                    fontFamily: `'${font.name}', sans-serif`,
                    fontSize: `${testerSize}px`,
                    fontWeight: testerWeight,
                    lineHeight: testerLineHeight,
                    letterSpacing: `${testerLetterSpacing}px`
                  }}
                  placeholder="Click here and start typing to test this font..."
                />
              </div>
            </div>
          )}

          {/* TAB 3: GLYPHS */}
          {activeTab === 'glyphs' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Click on any glyph to copy the character to your clipboard.
                </p>
                {copiedGlyph && (
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full">
                    Copied: "{copiedGlyph}"
                  </span>
                )}
              </div>

              {/* Uppercase */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase text-neutral-400 tracking-wider">
                  Basic Latin Uppercase
                </h4>
                <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-13 gap-2">
                  {uppercaseLetters.map((char) => (
                    <button
                      key={char}
                      onClick={() => handleCopyGlyph(char)}
                      className="h-12 flex items-center justify-center rounded-xl bg-neutral-100 dark:bg-[#1a1b1e] hover:bg-[#e8f0fe] dark:hover:bg-[#1a73e8]/20 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 text-xl transition-all hover:scale-105"
                      style={{ fontFamily: `'${font.name}', sans-serif` }}
                    >
                      {char}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lowercase */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase text-neutral-400 tracking-wider">
                  Basic Latin Lowercase
                </h4>
                <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-13 gap-2">
                  {lowercaseLetters.map((char) => (
                    <button
                      key={char}
                      onClick={() => handleCopyGlyph(char)}
                      className="h-12 flex items-center justify-center rounded-xl bg-neutral-100 dark:bg-[#1a1b1e] hover:bg-[#e8f0fe] dark:hover:bg-[#1a73e8]/20 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 text-xl transition-all hover:scale-105"
                      style={{ fontFamily: `'${font.name}', sans-serif` }}
                    >
                      {char}
                    </button>
                  ))}
                </div>
              </div>

              {/* Numerals & Punctuation */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase text-neutral-400 tracking-wider">
                  Numerals & Symbols
                </h4>
                <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-13 gap-2">
                  {[...numerals, ...punctuation].map((char, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleCopyGlyph(char)}
                      className="h-12 flex items-center justify-center rounded-xl bg-neutral-100 dark:bg-[#1a1b1e] hover:bg-[#e8f0fe] dark:hover:bg-[#1a73e8]/20 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 text-lg transition-all hover:scale-105"
                      style={{ fontFamily: `'${font.name}', sans-serif` }}
                    >
                      {char}
                    </button>
                  ))}
                </div>
              </div>

              {/* Extended Latin */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase text-neutral-400 tracking-wider">
                  Extended Latin & Accents
                </h4>
                <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-13 gap-2">
                  {extendedGlyphs.slice(0, 39).map((char, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleCopyGlyph(char)}
                      className="h-12 flex items-center justify-center rounded-xl bg-neutral-100 dark:bg-[#1a1b1e] hover:bg-[#e8f0fe] dark:hover:bg-[#1a73e8]/20 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 text-lg transition-all hover:scale-105"
                      style={{ fontFamily: `'${font.name}', sans-serif` }}
                    >
                      {char}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ABOUT & LICENSE */}
          {activeTab === 'about' && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                  About {font.name}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {font.description}
                </p>
              </div>

              {font.designerBio && (
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#1a1b1e] border border-neutral-200 dark:border-neutral-800">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                    Designer Biography
                  </h4>
                  <p className="text-sm text-neutral-700 dark:text-neutral-200">
                    {font.designerBio}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#1a1b1e] border border-neutral-200 dark:border-neutral-800">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                    Supported Scripts
                  </h4>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {font.scripts.map((sc) => (
                      <span key={sc} className="text-xs px-2 py-0.5 rounded-md bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                        {sc}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#1a1b1e] border border-neutral-200 dark:border-neutral-800">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                    License Information
                  </h4>
                  <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mt-1">
                    {font.license}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    Free for commercial and personal use across websites, mobile apps, and print.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: PAIRINGS */}
          {activeTab === 'pairings' && (
            <div className="space-y-6">
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Curated type pairings recommended by expert typographers for {font.name}.
              </p>

              <div className="space-y-6">
                {font.pairings.map((pair, idx) => (
                  <div key={idx} className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#1a1b1e] space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-neutral-900 dark:text-neutral-100 text-base">
                          {font.name}
                        </span>
                        <span className="text-neutral-400">+</span>
                        <span className="font-semibold text-[#1a73e8] dark:text-[#8ab4f8] text-base">
                          {pair.fontName}
                        </span>
                      </div>
                      <span className="text-xs text-neutral-500 bg-neutral-200/50 dark:bg-neutral-800 px-2.5 py-1 rounded-full">
                        {pair.role}
                      </span>
                    </div>

                    <div className="space-y-2 p-4 bg-white dark:bg-[#252729] rounded-xl border border-neutral-200 dark:border-neutral-700/50">
                      <h4 
                        className="text-2xl font-bold text-neutral-900 dark:text-neutral-100"
                        style={{ fontFamily: `'${font.name}', sans-serif` }}
                      >
                        Architectural Innovation in Design
                      </h4>
                      <p 
                        className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed"
                        style={{ fontFamily: `'${pair.fontName}', sans-serif` }}
                      >
                        Great typographic pairings create harmonious hierarchy. The expressive presence of the headline works hand in hand with the crystal-clear readability of the body font to deliver effortless communication.
                      </p>
                    </div>

                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                      Rationale: {pair.rationale}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#1a1b1e] flex items-center justify-between text-xs text-neutral-500">
          <span>NexVora Fonts Open Catalog</span>
          <div className="flex items-center gap-4">
            <span>License: {font.license}</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
            >
              Done
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
