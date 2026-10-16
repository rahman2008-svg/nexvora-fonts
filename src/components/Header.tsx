import React from 'react';
import { 
  ShoppingBag, 
  Moon, 
  Sun, 
  Sparkles,
  Info,
  Menu,
  X
} from 'lucide-react';

interface HeaderProps {
  activeTab: 'fonts' | 'noto' | 'icons' | 'knowledge' | 'about';
  setActiveTab: (tab: 'fonts' | 'noto' | 'icons' | 'knowledge' | 'about') => void;
  selectedCount: number;
  onOpenDrawer: () => void;
  isDark: boolean;
  toggleTheme: () => void;
  onOpenAbout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  selectedCount,
  onOpenDrawer,
  isDark,
  toggleTheme,
  onOpenAbout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'fonts', label: 'Fonts' },
    { id: 'noto', label: 'Noto' },
    { id: 'icons', label: 'Icons' },
    { id: 'knowledge', label: 'Knowledge' },
    { id: 'about', label: 'About & Developer' },
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#1f1f1f]/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand Zone */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={() => setActiveTab('fonts')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
            aria-label="NexVora Fonts Home"
          >
            {/* Google Fonts style multi-colored geometric icon */}
            <div className="relative w-8 h-8 flex items-center justify-center rounded-lg overflow-hidden shadow-xs group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 32 32" className="w-full h-full" fill="none">
                <rect width="32" height="32" rx="6" fill={isDark ? "#2d2e30" : "#f1f3f4"} />
                {/* NexVora Google Fonts 'N' and geometry */}
                <path d="M8 8H13L20 20V8H24V24H19L12 12V24H8V8Z" fill="#1a73e8" />
                <circle cx="23" cy="9" r="3" fill="#ea4335" />
                <circle cx="9" cy="23" r="3" fill="#34a853" />
                <circle cx="23" cy="23" r="2.5" fill="#fbbc04" />
              </svg>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-normal tracking-tight text-neutral-800 dark:text-neutral-100 font-sans">
                  <span className="font-semibold text-[#1a73e8] dark:text-[#8ab4f8]">NexVora</span> Fonts
                </span>
              </div>
            </div>
          </button>
        </div>

        {/* Navigation Tabs (Desktop) */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap rounded-full ${
                  isActive
                    ? 'text-[#1a73e8] dark:text-[#8ab4f8] bg-[#e8f0fe] dark:bg-[#1a73e8]/20 font-semibold'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60'
                }`}
              >
                {item.label}
                {item.id === 'about' && (
                  <span className="ml-1.5 inline-block w-2 h-2 rounded-full bg-emerald-500" title="Developer & Company details" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Quick About Dev Button */}
          <button
            onClick={onOpenAbout}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full transition-colors"
            title="View Developer & Company Information"
          >
            <Info className="w-3.5 h-3.5 text-[#1a73e8] dark:text-[#8ab4f8]" />
            <span>Prince AR · NexVora</span>
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
            aria-label="Toggle theme"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Selected Families Bag / Drawer trigger */}
          <button
            onClick={onOpenDrawer}
            className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
              selectedCount > 0
                ? 'bg-[#1a73e8] text-white hover:bg-[#1557b0] shadow-sm'
                : 'text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-700'
            }`}
            aria-label="View selected font families"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">
              {selectedCount > 0 ? `${selectedCount} selected` : 'Selected'}
            </span>
            {selectedCount > 0 && (
              <span className="sm:hidden flex items-center justify-center w-5 h-5 rounded-full bg-white text-[#1a73e8] text-xs font-bold">
                {selectedCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1f1f1f] px-4 py-3 space-y-1 shadow-lg animate-in fade-in duration-150">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                activeTab === item.id
                  ? 'text-[#1a73e8] dark:text-[#8ab4f8] bg-[#e8f0fe] dark:bg-[#1a73e8]/20'
                  : 'text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              <span>{item.label}</span>
              {item.id === 'about' && (
                <span className="text-xs bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-full font-normal">
                  Dev info
                </span>
              )}
            </button>
          ))}
          <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 mt-2">
            <button
              onClick={() => {
                onOpenAbout();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            >
              Developer: Prince AR Abdur Rahman · NexVora Lab's Ofc
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
