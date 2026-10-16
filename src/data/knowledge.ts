import { KnowledgeArticle } from '../types/font';

export const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  {
    id: 'understanding-variable-fonts',
    title: 'Understanding Variable Fonts & Web Performance',
    subtitle: 'How OpenType font variations let a single file contain countless weights, widths, and slants.',
    category: 'Technology',
    readTime: '6 min read',
    author: 'NexVora Type Engineering',
    date: '2026',
    content: [
      'Variable fonts are an evolution of the OpenType font specification that enables many different variations of a typeface in a single font file. Instead of loading separate files for Light, Regular, Medium, Bold, and Black, a single file contains the entire design space defined by continuous axes.',
      'Performance Benefits: A standard font family often requires 4 to 8 separate HTTP requests, easily adding up to 300KB - 800KB of network bandwidth. A single variable font file typically weighs 40KB - 90KB with WOFF2 compression, cutting load times and layout shift dramatically.',
      'CSS Axes Syntax: You can manipulate font variations dynamically using font-variation-settings or modern CSS font-weight: 100 to 900 and font-stretch values. This opens up responsive typography where font weight slightly increases for dark mode to compensate for halation.'
    ]
  },
  {
    id: 'art-of-type-pairing',
    title: 'The Art of Type Pairing: Harmony & Contrast',
    subtitle: 'Proven principles to combine headline and body typefaces without visual discord.',
    category: 'Design Principles',
    readTime: '8 min read',
    author: 'Type Design Council',
    date: '2026',
    content: [
      'When pairing typefaces, your primary objective is either deliberate harmony or intentional contrast. The biggest mistake is pairing two fonts that are almost similar but subtly clash.',
      'Rule 1: Establish clear hierarchy. Let one font be the protagonist (often an expressive serif or display face like Playfair Display or Syne) while the supporting body face remains quiet, legible, and unobtrusive (like Plus Jakarta Sans, DM Sans, or Inter).',
      'Rule 2: Match x-heights and proportions. When fonts share similar structural proportions, text transitions feel seamless to the reader’s eye, even when transitioning between headlines, subheads, and captions.'
    ]
  },
  {
    id: 'web-typography-accessibility',
    title: 'Web Typography Accessibility (WCAG 2.2)',
    subtitle: 'Ensuring legible line lengths, color contrast, and scale ratios for universal readers.',
    category: 'Accessibility',
    readTime: '5 min read',
    author: 'Accessibility WG',
    date: '2026',
    content: [
      'Type is only effective if it can be easily parsed by everyone. Following Web Content Accessibility Guidelines guarantees your application respects cognitive ergonomics.',
      'Measure: Maintain line lengths between 45 and 75 characters per line (approx 65ch). Lines that are too long cause reader disorientation, while overly narrow columns cause awkward word breaks.',
      'Contrast: Strive for at least 4.5:1 contrast for body copy and 3:1 for large display headlines. Never rely on ultra-thin 100 or 200 weights for small body copy on mobile screens.'
    ]
  },
  {
    id: 'noto-world-scripts',
    title: 'Noto: The Universal Alphabet for All Humanity',
    subtitle: 'How Google Noto and open-source foundries eliminated the tofu box across 1,000+ languages.',
    category: 'Global Typography',
    readTime: '7 min read',
    author: 'Global Scripts Initiative',
    date: '2026',
    content: [
      'When text is rendered by a computer, sometimes characters cannot be displayed because no font on the system supports the Unicode codepoint. The system displays a small hollow rectangle: "tofu".',
      'The name Noto is derived from "No More Tofu". Today, Noto supports all written languages across Latin, Cyrillic, Greek, Arabic, Bengali, Devanagari, Japanese Kanji, Korean Hangul, and ancient scripts.',
      'NexVora Fonts makes it simple to integrate multilingual typography with zero tofu, providing fast CDN delivery for global reach.'
    ]
  }
];
