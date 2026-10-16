import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Copy, 
  Check, 
  Download, 
  Code, 
  Terminal,
  ExternalLink,
  Info
} from 'lucide-react';
import { FontItem } from '../types/font';

interface SelectedFamiliesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFonts: FontItem[];
  selectedWeightsMap: Record<string, number[]>;
  onRemoveFont: (fontId: string) => void;
  onClearAll: () => void;
  onToggleWeight: (fontId: string, weight: number) => void;
}

export const SelectedFamiliesDrawer: React.FC<SelectedFamiliesDrawerProps> = ({
  isOpen,
  onClose,
  selectedFonts,
  selectedWeightsMap,
  onRemoveFont,
  onClearAll,
  onToggleWeight
}) => {
  const [embedMode, setEmbedMode] = useState<'link' | 'import'>('link');
  const [copiedEmbed, setCopiedEmbed] = useState(false);
  const [copiedRule, setCopiedRule] = useState<string | null>(null);

  if (!isOpen) return null;

  // Build the Google Fonts URL query dynamically
  const fontQueries = selectedFonts.map((font) => {
    const weights = selectedWeightsMap[font.id] || [400];
    const sortedWeights = [...weights].sort((a, b) => a - b);
    const formattedWeights = sortedWeights.join(';');
    return `family=${font.name.replace(/\s+/g, '+')}:wght@${formattedWeights}`;
  });

  const queryString = fontQueries.length > 0 ? fontQueries.join('&') : 'family=Roboto:wght@400';
  const fontsUrl = `https://fonts.googleapis.com/css2?${queryString}&display=swap`;

  const linkCode = `<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="${fontsUrl}" rel="stylesheet">`;
  const importCode = `<style>\n@import url('${fontsUrl}');\n</style>`;

  const handleCopyEmbed = () => {
    const code = embedMode === 'link' ? linkCode : importCode;
    navigator.clipboard.writeText(code);
    setCopiedEmbed(true);
    setTimeout(() => setCopiedEmbed(false), 2000);
  };

  const handleCopyCSS = (fontName: string, category: string) => {
    const fallback = category === 'serif' ? 'serif' : category === 'monospace' ? 'monospace' : category === 'handwriting' ? 'cursive' : 'sans-serif';
    const rule = `font-family: '${fontName}', ${fallback};`;
    navigator.clipboard.writeText(rule);
    setCopiedRule(fontName);
    setTimeout(() => setCopiedRule(null), 2000);
  };

  const handleDownloadBundle = () => {
    const content = `/* NexVora Fonts - Selected Collection Bundle */\n/* Generated on ${new Date().toLocaleDateString()} */\n\n${importCode}\n\n/* CSS Rules: */\n${selectedFonts.map(f => `/* ${f.name} */\n.font-${f.id} {\n  font-family: '${f.name}', ${f.category};\n}`).join('\n\n')}\n`;
    const blob = new Blob([content], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nexvora-fonts-collection.css`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white dark:bg-[#202124] h-full shadow-2xl flex flex-col border-l border-neutral-200 dark:border-neutral-800 animate-in slide-in-from-right duration-250"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-lg text-neutral-900 dark:text-neutral-100">
              Selected families
            </h3>
            <span className="text-xs bg-[#e8f0fe] dark:bg-[#1a73e8]/20 text-[#1a73e8] dark:text-[#8ab4f8] px-2 py-0.5 rounded-full font-semibold">
              {selectedFonts.length}
            </span>
          </div>

          <div className="flex items-center gap-1">
            {selectedFonts.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-neutral-500 hover:text-red-500 px-2 py-1 transition-colors"
                title="Remove all selected families"
              >
                Clear all
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {selectedFonts.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-400">
                <Code className="w-6 h-6" />
              </div>
              <h4 className="text-base font-medium text-neutral-800 dark:text-neutral-200">
                No families selected
              </h4>
              <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                Explore font cards and click "Add" to generate embed code for your website or app.
              </p>
            </div>
          ) : (
            <>
              {/* Selected Font List */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Configured Fonts
                </div>

                <div className="space-y-3">
                  {selectedFonts.map((font) => {
                    const weights = selectedWeightsMap[font.id] || [400];
                    return (
                      <div 
                        key={font.id} 
                        className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#1a1b1e] space-y-2.5"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-medium text-sm text-neutral-900 dark:text-neutral-100">
                              {font.name}
                            </span>
                            <span className="text-xs text-neutral-400 ml-2 capitalize">
                              {font.category}
                            </span>
                          </div>
                          <button
                            onClick={() => onRemoveFont(font.id)}
                            className="text-neutral-400 hover:text-red-500 p-1 transition-colors"
                            title="Remove family"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Weights badges */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {font.styles.map((style) => {
                            const isIncluded = weights.includes(style.weight);
                            return (
                              <button
                                key={style.id}
                                onClick={() => onToggleWeight(font.id, style.weight)}
                                className={`text-[11px] px-2 py-0.5 rounded-md transition-colors ${
                                  isIncluded
                                    ? 'bg-[#1a73e8] text-white font-medium shadow-xs'
                                    : 'bg-neutral-200/60 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-300 dark:hover:bg-neutral-700'
                                }`}
                                title={`Toggle weight ${style.weight}`}
                              >
                                {style.name}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Embed Code Section */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Use on the web
                  </span>
                  
                  {/* Link / @import toggle */}
                  <div className="flex items-center bg-neutral-100 dark:bg-neutral-800 p-0.5 rounded-lg text-xs">
                    <button
                      onClick={() => setEmbedMode('link')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        embedMode === 'link'
                          ? 'bg-white dark:bg-[#2d2e30] text-neutral-900 dark:text-white font-medium shadow-xs'
                          : 'text-neutral-500 hover:text-neutral-800'
                      }`}
                    >
                      &lt;link&gt;
                    </button>
                    <button
                      onClick={() => setEmbedMode('import')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        embedMode === 'import'
                          ? 'bg-white dark:bg-[#2d2e30] text-neutral-900 dark:text-white font-medium shadow-xs'
                          : 'text-neutral-500 hover:text-neutral-800'
                      }`}
                    >
                      @import
                    </button>
                  </div>
                </div>

                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  To embed your selected fonts into a webpage, copy this code into the &lt;head&gt; of your HTML.
                </p>

                {/* Code block */}
                <div className="relative group">
                  <pre className="p-3.5 bg-neutral-900 text-neutral-100 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-neutral-800">
                    {embedMode === 'link' ? linkCode : importCode}
                  </pre>
                  <button
                    onClick={handleCopyEmbed}
                    className="absolute right-2.5 top-2.5 px-2.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    {copiedEmbed ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* CSS Rules Section */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  CSS rules to specify families
                </span>

                <div className="space-y-2">
                  {selectedFonts.map((font) => (
                    <div 
                      key={font.id} 
                      className="p-3 bg-neutral-100 dark:bg-[#1a1b1e] rounded-xl flex items-center justify-between gap-2 border border-neutral-200 dark:border-neutral-800"
                    >
                      <code className="text-xs font-mono text-neutral-800 dark:text-neutral-200 truncate">
                        font-family: '{font.name}', {font.category === 'serif' ? 'serif' : font.category === 'monospace' ? 'monospace' : 'sans-serif'};
                      </code>
                      <button
                        onClick={() => handleCopyCSS(font.name, font.category)}
                        className="p-1.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white shrink-0"
                        title="Copy CSS rule"
                      >
                        {copiedRule === font.name ? (
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

        </div>

        {/* Drawer Footer Actions */}
        {selectedFonts.length > 0 && (
          <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#1a1b1e] flex gap-3">
            <button
              onClick={handleDownloadBundle}
              className="flex-1 py-2.5 px-4 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-medium flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download collection CSS</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
