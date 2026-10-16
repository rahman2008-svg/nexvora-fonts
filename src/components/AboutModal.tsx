import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  MessageSquare, 
  Copy, 
  Check, 
  Building2, 
  UserCheck, 
  Sparkles, 
  Code2, 
  Smartphone, 
  ShieldCheck, 
  Globe2
} from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-[#202124] rounded-3xl w-full max-w-3xl max-h-[92vh] overflow-y-auto shadow-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#1a73e8] to-indigo-600 flex items-center justify-center text-white shadow-md">
              <span className="font-bold text-xl">NV</span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-neutral-900 dark:text-neutral-100">
                About NexVora Fonts
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Created by Prince AR Abdur Rahman · Published by NexVora Lab's Ofc
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section 1: About Developer */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
            <UserCheck className="w-4 h-4" />
            <span>About Developer</span>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-[#1a1b1e] border border-neutral-200 dark:border-neutral-800 space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                Prince AR Abdur Rahman
              </h3>
              <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">
                Independent App Developer
              </p>
            </div>

            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Independent App Developer passionate about building modern Android applications, productivity tools, AI-powered experiences, media players, educational apps, and next-generation digital products.
            </p>

            {/* Specialties Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'Android Applications',
                'Productivity Tools',
                'AI-Powered Experiences',
                'Media Players',
                'Educational Apps',
                'Digital Products'
              ].map((badge) => (
                <span
                  key={badge}
                  className="text-xs px-2.5 py-1 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Contact Details & Social Links */}
            <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800/80 space-y-3">
              <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
                Direct Contact & Social Profiles
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* WhatsApp 1 */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                      WA
                    </div>
                    <div>
                      <div className="text-[11px] text-emerald-800 dark:text-emerald-300 font-medium">WhatsApp 1</div>
                      <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">01707424006</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleCopy('01707424006', 'wa1')}
                      className="p-1.5 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
                      title="Copy phone number"
                    >
                      {copiedText === 'wa1' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <a
                      href="https://wa.me/8801707424006"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-medium transition-colors"
                    >
                      Chat
                    </a>
                  </div>
                </div>

                {/* WhatsApp 2 */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                      WA
                    </div>
                    <div>
                      <div className="text-[11px] text-emerald-800 dark:text-emerald-300 font-medium">WhatsApp 2</div>
                      <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">01796951709</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleCopy('01796951709', 'wa2')}
                      className="p-1.5 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
                      title="Copy phone number"
                    >
                      {copiedText === 'wa2' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <a
                      href="https://wa.me/8801796951709"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-medium transition-colors"
                    >
                      Chat
                    </a>
                  </div>
                </div>

                {/* Facebook Link */}
                <a
                  href="https://www.facebook.com/share/1BNn32qoJo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/40 hover:bg-blue-100/60 dark:hover:bg-blue-900/30 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#1877f2] text-white flex items-center justify-center font-bold text-xs">
                      FB
                    </div>
                    <div>
                      <div className="text-[11px] text-blue-800 dark:text-blue-300 font-medium">Facebook Profile</div>
                      <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">Prince AR Abdur Rahman</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Instagram Link */}
                <a
                  href="https://www.instagram.com/ur___abdur____rahman__2008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-pink-50/60 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-800/40 hover:bg-pink-100/60 dark:hover:bg-pink-900/30 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center font-bold text-xs">
                      IG
                    </div>
                    <div>
                      <div className="text-[11px] text-pink-800 dark:text-pink-300 font-medium">Instagram Profile</div>
                      <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">ur___abdur____rahman__2008</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-rose-600 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: About Company */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
            <Building2 className="w-4 h-4" />
            <span>About Company</span>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-[#1a1b1e] border border-neutral-200 dark:border-neutral-800 space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                NexVora Lab's Ofc
              </h3>
              <p className="text-xs font-medium text-neutral-500 mt-0.5">
                Technology & Mobile Software Studio
              </p>
            </div>

            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              NexVora Lab's Ofc focuses on creating innovative Android applications designed to improve productivity, entertainment, learning, and digital experiences.
            </p>

            <div className="p-4 rounded-xl bg-white dark:bg-[#252729] border border-neutral-200 dark:border-neutral-700 space-y-1">
              <span className="text-xs font-semibold text-[#1a73e8] dark:text-[#8ab4f8] uppercase tracking-wider">
                Our Mission
              </span>
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                "Build fast, beautiful, privacy-friendly, and user-focused applications accessible to everyone."
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Technical Information & Credits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-[#1a1b1e] border border-neutral-200 dark:border-neutral-800 space-y-2">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5" />
              Technical Information
            </span>
            <div className="text-sm text-neutral-700 dark:text-neutral-300 space-y-1 pt-1">
              <div className="flex justify-between">
                <span>Version:</span>
                <span className="font-semibold text-neutral-900 dark:text-neutral-100 font-mono">1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span>Platform:</span>
                <span className="font-medium">Web & Android Compatible</span>
              </div>
              <div className="flex justify-between">
                <span>Design System:</span>
                <span className="font-medium">Google Fonts Spec & Material 3</span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-[#1a1b1e] border border-neutral-200 dark:border-neutral-800 space-y-2">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Credits
            </span>
            <div className="text-sm text-neutral-700 dark:text-neutral-300 space-y-1 pt-1">
              <div>
                Developed by <strong className="text-neutral-900 dark:text-neutral-100 font-medium">Prince AR Abdur Rahman</strong>
              </div>
              <div>
                Published by <strong className="text-neutral-900 dark:text-neutral-100 font-medium">NexVora Lab's Ofc</strong>
              </div>
              <div className="text-xs text-neutral-500 pt-1">
                © 2026 NexVora Lab's Ofc. All Rights Reserved
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-medium shadow-xs transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
