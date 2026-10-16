import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X } from 'lucide-react';
import { KNOWLEDGE_ARTICLES } from '../data/knowledge';
import { KnowledgeArticle } from '../types/font';

export const KnowledgeSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<KnowledgeArticle | null>(null);

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-[#1a73e8]/10 via-transparent to-indigo-500/10 rounded-3xl p-8 border border-neutral-200 dark:border-neutral-800">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
            NexVora Fonts Knowledge
          </span>
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100 font-sans">
            A guide to typography on the web
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Curated lessons, guides, and practical insights crafted for developers, UI designers, and typographers to elevate digital communication.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {KNOWLEDGE_ARTICLES.map((art) => (
          <div
            key={art.id}
            onClick={() => setSelectedArticle(art)}
            className="group bg-white dark:bg-[#252729] rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                <span className="font-medium text-[#1a73e8] dark:text-[#8ab4f8]">{art.category}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {art.readTime}
                </span>
              </div>

              <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                {art.title}
              </h3>

              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {art.subtitle}
              </p>
            </div>

            <div className="pt-6 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
              <span>{art.author}</span>
              <span className="flex items-center gap-1 text-[#1a73e8] dark:text-[#8ab4f8] font-medium group-hover:translate-x-1 transition-transform">
                Read article <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div 
            className="bg-white dark:bg-[#202124] rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#1a73e8] dark:text-[#8ab4f8] uppercase tracking-wider">
                  {selectedArticle.category}
                </span>
                <h3 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100">
                  {selectedArticle.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-neutral-500 pt-1">
                  <span>{selectedArticle.author}</span>
                  <span>·</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed border-t border-neutral-200 dark:border-neutral-800 pt-6 font-sans">
              {selectedArticle.content.map((p, i) => (
                <p key={i} className="text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-medium"
              >
                Close article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
