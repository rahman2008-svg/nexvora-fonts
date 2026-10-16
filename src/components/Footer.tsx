import React from 'react';
import { ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  onOpenAbout: () => void;
  onNavigateTab: (tab: 'fonts' | 'noto' | 'icons' | 'knowledge' | 'about') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAbout, onNavigateTab }) => {
  return (
    <footer className="mt-20 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1a1b1e] text-neutral-600 dark:text-neutral-400 text-xs transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: NexVora Fonts Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#1a73e8] text-white flex items-center justify-center font-bold text-xs">
                N
              </div>
              <span className="text-base font-normal text-neutral-900 dark:text-neutral-100">
                <span className="font-semibold text-[#1a73e8] dark:text-[#8ab4f8]">NexVora</span> Fonts
              </span>
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Making the web more beautiful, fast, and open through great typography. An open-source type directory and symbols explorer.
            </p>
            <div className="pt-1">
              <span className="text-[11px] text-neutral-400">
                Technical Version: 1.0.0
              </span>
            </div>
          </div>

          {/* Col 2: About Developer (Prince AR Abdur Rahman) */}
          <div className="space-y-3">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider text-[11px]">
              About Developer
            </h4>
            <div className="space-y-1.5">
              <p className="font-medium text-neutral-800 dark:text-neutral-200">
                Prince AR Abdur Rahman
              </p>
              <p className="text-neutral-500 leading-relaxed text-[11px]">
                Independent App Developer passionate about building modern Android applications, productivity tools, AI-powered experiences, media players, and educational apps.
              </p>
            </div>
            <div className="space-y-1 pt-1">
              <div className="text-[11px]">
                <span className="text-neutral-400">WhatsApp: </span>
                <a href="https://wa.me/8801707424006" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] underline">
                  01707424006
                </a>
                <span className="text-neutral-400"> · </span>
                <a href="https://wa.me/8801796951709" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] underline">
                  01796951709
                </a>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <a 
                  href="https://www.facebook.com/share/1BNn32qoJo/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center gap-1 transition-colors"
                >
                  Facebook <ExternalLink className="w-3 h-3" />
                </a>
                <a 
                  href="https://www.instagram.com/ur___abdur____rahman__2008" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-pink-600 dark:hover:text-pink-400 inline-flex items-center gap-1 transition-colors"
                >
                  Instagram <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: About Company (NexVora Lab's Ofc) */}
          <div className="space-y-3">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider text-[11px]">
              About Company
            </h4>
            <div className="space-y-1.5">
              <p className="font-medium text-neutral-800 dark:text-neutral-200">
                NexVora Lab's Ofc
              </p>
              <p className="text-neutral-500 leading-relaxed text-[11px]">
                Focuses on creating innovative Android applications designed to improve productivity, entertainment, learning, and digital experiences.
              </p>
            </div>
            <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 space-y-1">
              <span className="font-semibold text-[10px] uppercase text-neutral-400">Mission</span>
              <p className="text-[11px] text-neutral-700 dark:text-neutral-300 italic">
                "Build fast, beautiful, privacy-friendly, and user-focused applications accessible to everyone."
              </p>
            </div>
          </div>

          {/* Col 4: Navigation & Credits */}
          <div className="space-y-3">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider text-[11px]">
              Navigation & Credits
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigateTab('fonts')} className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Fonts Directory
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('noto')} className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Noto Global Scripts
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('icons')} className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Material Symbols & Icons
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('knowledge')} className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Typography Knowledge
                </button>
              </li>
              <li>
                <button onClick={onOpenAbout} className="text-[#1a73e8] dark:text-[#8ab4f8] font-medium hover:underline">
                  Developer & Company Full Profile
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & OFL info */}
        <div className="pt-8 mt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 dark:text-neutral-400">
          <div className="space-y-1 text-center sm:text-left">
            <div>
              Developed by <strong>Prince AR Abdur Rahman</strong> · Published by <strong>NexVora Lab's Ofc</strong>
            </div>
            <div className="text-[11px]">
              © 2026 NexVora Lab's Ofc. All Rights Reserved. All typefaces licensed under SIL Open Font License (OFL).
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button onClick={onOpenAbout} className="hover:text-neutral-900 dark:hover:text-white">Privacy Policy</button>
            <span>·</span>
            <button onClick={onOpenAbout} className="hover:text-neutral-900 dark:hover:text-white">Terms of Service</button>
            <span>·</span>
            <button onClick={onOpenAbout} className="hover:text-neutral-900 dark:hover:text-white">Credits</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
