import { FontItem } from '../types/font';

export const POPULAR_PREVIEW_TEXTS = [
  { label: 'Sentence', text: 'All their equipment and instruments are alive.' },
  { label: 'Alphabet', text: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789' },
  { label: 'Pangram', text: 'The quick brown fox jumps over the lazy dog.' },
  { label: 'Paragraph', text: 'Typography is the art and technique of arranging type to make written language legible, readable and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing.' },
  { label: 'Numerals', text: '1234567890 !@#$%^&*()_+ []:;<>?,./' },
  { label: 'Bangla Script', text: 'আমার সোনার বাংলা, আমি তোমায় ভালোবাসি। চিরদিন তোমার আকাশ, তোমার বাতাস, আমার প্রাণে বাজায় বাঁশি।' },
  { label: 'Display & Branding', text: 'NexVora Studio · Inspiring Digital Creativity' },
];

export const FONTS_DATA: FontItem[] = [
  {
    id: 'roboto',
    name: 'Roboto',
    category: 'sans-serif',
    designer: 'Christian Robertson',
    designerBio: 'Christian Robertson is a type designer based in California and the Principal Designer at Google.',
    stylesCount: 12,
    isVariable: true,
    sampleSentence: 'Almost before we knew it, we had left the ground behind us.',
    styles: [
      { id: 'roboto-100', name: 'Thin 100', weight: 100, isItalic: false },
      { id: 'roboto-300', name: 'Light 300', weight: 300, isItalic: false },
      { id: 'roboto-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'roboto-500', name: 'Medium 500', weight: 500, isItalic: false },
      { id: 'roboto-700', name: 'Bold 700', weight: 700, isItalic: false },
      { id: 'roboto-900', name: 'Black 900', weight: 900, isItalic: false },
    ],
    scripts: ['Latin', 'Cyrillic', 'Greek', 'Vietnamese'],
    description: 'Roboto has a dual nature. It has a mechanical skeleton and the forms are largely geometric. At the same time, the font features friendly and open curves.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 1,
    releaseYear: 2011,
    glyphCount: 1290,
    pairings: [
      { fontName: 'Roboto Mono', role: 'Data & Code', rationale: 'Harmonious monospace companion with identical proportion logic.' },
      { fontName: 'Playfair Display', role: 'Editorial Headline', rationale: 'Classic high-contrast serif headers balanced by neutral modern sans body.' }
    ]
  },
  {
    id: 'open-sans',
    name: 'Open Sans',
    category: 'sans-serif',
    designer: 'Steve Matteson',
    designerBio: 'Steve Matteson is an American typeface designer who designed Open Sans, Droid, and Microsoft Segoe.',
    stylesCount: 10,
    isVariable: true,
    sampleSentence: 'Appropriately transition out of corporate deliverables and synergy.',
    styles: [
      { id: 'open-sans-300', name: 'Light 300', weight: 300, isItalic: false },
      { id: 'open-sans-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'open-sans-600', name: 'SemiBold 600', weight: 600, isItalic: false },
      { id: 'open-sans-700', name: 'Bold 700', weight: 700, isItalic: false },
      { id: 'open-sans-800', name: 'ExtraBold 800', weight: 800, isItalic: false },
    ],
    scripts: ['Latin', 'Cyrillic', 'Greek', 'Hebrew'],
    description: 'Open Sans is a humanist sans serif typeface designed with an upright stress, open forms and a neutral, yet friendly appearance.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 2,
    releaseYear: 2010,
    glyphCount: 1063,
    pairings: [
      { fontName: 'Lora', role: 'Classic Serif', rationale: 'Pair with warm contemporary serif for long-form essays.' }
    ]
  },
  {
    id: 'montserrat',
    name: 'Montserrat',
    category: 'sans-serif',
    designer: 'Julieta Ulanovsky',
    designerBio: 'Julieta Ulanovsky is an Argentine graphic designer and founder of ZkySky studio in Buenos Aires.',
    stylesCount: 18,
    isVariable: true,
    sampleSentence: 'Old posters and signs in the traditional Montserrat neighborhood.',
    styles: [
      { id: 'montserrat-100', name: 'Thin 100', weight: 100, isItalic: false },
      { id: 'montserrat-300', name: 'Light 300', weight: 300, isItalic: false },
      { id: 'montserrat-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'montserrat-500', name: 'Medium 500', weight: 500, isItalic: false },
      { id: 'montserrat-600', name: 'SemiBold 600', weight: 600, isItalic: false },
      { id: 'montserrat-700', name: 'Bold 700', weight: 700, isItalic: false },
      { id: 'montserrat-800', name: 'ExtraBold 800', weight: 800, isItalic: false },
      { id: 'montserrat-900', name: 'Black 900', weight: 900, isItalic: false },
    ],
    scripts: ['Latin', 'Cyrillic', 'Vietnamese'],
    description: 'The old posters and signs in the traditional neighborhood of Buenos Aires called Montserrat inspired Julieta Ulanovsky to design this typeface and rescue the beauty of urban typography.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 3,
    releaseYear: 2011,
    glyphCount: 1943,
    pairings: [
      { fontName: 'Merriweather', role: 'Body Text', rationale: 'Punchy geometric headline with highly readable serif body copy.' }
    ]
  },
  {
    id: 'inter',
    name: 'Inter',
    category: 'sans-serif',
    designer: 'Rasmus Andersson',
    designerBio: 'Rasmus Andersson is a Swedish software engineer and typeface designer who created Inter for modern UI screens.',
    stylesCount: 9,
    isVariable: true,
    sampleSentence: 'Crafted specifically for user interfaces and high-density computer displays.',
    styles: [
      { id: 'inter-200', name: 'ExtraLight 200', weight: 200, isItalic: false },
      { id: 'inter-300', name: 'Light 300', weight: 300, isItalic: false },
      { id: 'inter-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'inter-500', name: 'Medium 500', weight: 500, isItalic: false },
      { id: 'inter-600', name: 'SemiBold 600', weight: 600, isItalic: false },
      { id: 'inter-700', name: 'Bold 700', weight: 700, isItalic: false },
      { id: 'inter-900', name: 'Black 900', weight: 900, isItalic: false },
    ],
    scripts: ['Latin', 'Cyrillic', 'Greek', 'Vietnamese'],
    description: 'Inter is a typeface specially designed for user interfaces with focus on high legibility of text on computer screens. The family features a tall x-height.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 4,
    releaseYear: 2016,
    glyphCount: 2254,
    pairings: [
      { fontName: 'JetBrains Mono', role: 'Developer Monospace', rationale: 'The ideal UI combination for modern software dashboards.' }
    ]
  },
  {
    id: 'poppins',
    name: 'Poppins',
    category: 'sans-serif',
    designer: 'Indian Type Foundry',
    designerBio: 'Indian Type Foundry (ITF) designs digital fonts for Indian and Latin scripts, founded by Satya Rajpurohit and Peter Biľak.',
    stylesCount: 18,
    isVariable: false,
    sampleSentence: 'Harmonious geometric construction with international versatility.',
    styles: [
      { id: 'poppins-200', name: 'ExtraLight 200', weight: 200, isItalic: false },
      { id: 'poppins-300', name: 'Light 300', weight: 300, isItalic: false },
      { id: 'poppins-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'poppins-500', name: 'Medium 500', weight: 500, isItalic: false },
      { id: 'poppins-600', name: 'SemiBold 600', weight: 600, isItalic: false },
      { id: 'poppins-700', name: 'Bold 700', weight: 700, isItalic: false },
      { id: 'poppins-800', name: 'ExtraBold 800', weight: 800, isItalic: false },
    ],
    scripts: ['Latin', 'Devanagari'],
    description: 'Poppins is one of the new comers to this long tradition. With support for the Devanagari and Latin writing systems, it is an internationalist take on the geometric sans genre.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 5,
    releaseYear: 2014,
    glyphCount: 1022,
    pairings: [
      { fontName: 'Playfair Display', role: 'Contrasting Headline', rationale: 'Round friendly geometric sans with stately classical serif.' }
    ]
  },
  {
    id: 'playfair-display',
    name: 'Playfair Display',
    category: 'serif',
    designer: 'Claus Eggers Sørensen',
    designerBio: 'Claus Eggers Sørensen is a Danish type designer with a Master’s degree in Typeface Design from University of Reading.',
    stylesCount: 6,
    isVariable: true,
    sampleSentence: 'In the transitional period of the European Enlightenment.',
    styles: [
      { id: 'playfair-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'playfair-500', name: 'Medium 500', weight: 500, isItalic: false },
      { id: 'playfair-600', name: 'SemiBold 600', weight: 600, isItalic: false },
      { id: 'playfair-700', name: 'Bold 700', weight: 700, isItalic: false },
      { id: 'playfair-900', name: 'Black 900', weight: 900, isItalic: false },
    ],
    scripts: ['Latin', 'Cyrillic', 'Vietnamese'],
    description: 'Playfair is a transitional design. In the European Enlightenment in the late 18th century, broad nib quills were replaced by pointed steel pens. This led to high contrast letterforms.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 6,
    releaseYear: 2011,
    glyphCount: 1140,
    pairings: [
      { fontName: 'Plus Jakarta Sans', role: 'Modern Clean Body', rationale: 'Luxurious high-fashion headline with crisp modern clean copy.' }
    ]
  },
  {
    id: 'plus-jakarta-sans',
    name: 'Plus Jakarta Sans',
    category: 'sans-serif',
    designer: 'Gumpita Rahayu',
    designerBio: 'Gumpita Rahayu is an Indonesian type designer and founder of Tokotype, creating distinctive contemporary letterforms.',
    stylesCount: 8,
    isVariable: true,
    sampleSentence: 'Contemporary proportions built with warmth, energy, and precision.',
    styles: [
      { id: 'pjs-300', name: 'Light 300', weight: 300, isItalic: false },
      { id: 'pjs-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'pjs-500', name: 'Medium 500', weight: 500, isItalic: false },
      { id: 'pjs-600', name: 'SemiBold 600', weight: 600, isItalic: false },
      { id: 'pjs-700', name: 'Bold 700', weight: 700, isItalic: false },
      { id: 'pjs-800', name: 'ExtraBold 800', weight: 800, isItalic: false },
    ],
    scripts: ['Latin', 'Vietnamese'],
    description: 'Plus Jakarta Sans was commissioned by the Provincial Government of DKI Jakarta in 2020. It combines geometric warmth with razor-sharp editorial balance.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 7,
    releaseYear: 2020,
    glyphCount: 712,
    pairings: [
      { fontName: 'Lora', role: 'Editorial Body', rationale: 'Contemporary geometric tech vibe paired with literary warmth.' }
    ]
  },
  {
    id: 'merriweather',
    name: 'Merriweather',
    category: 'serif',
    designer: 'Sorkin Type',
    designerBio: 'Eben Sorkin is a type designer based in Massachusetts, focusing on readability and digital publishing typefaces.',
    stylesCount: 8,
    isVariable: false,
    sampleSentence: 'Designed to be a text face that is pleasant to read on screens.',
    styles: [
      { id: 'merriweather-300', name: 'Light 300', weight: 300, isItalic: false },
      { id: 'merriweather-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'merriweather-700', name: 'Bold 700', weight: 700, isItalic: false },
      { id: 'merriweather-900', name: 'Black 900', weight: 900, isItalic: false },
    ],
    scripts: ['Latin', 'Cyrillic'],
    description: 'Merriweather features a very large x-height, slightly condensed letterforms, a mild diagonal stress, sturdy serifs and open forms.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 8,
    releaseYear: 2010,
    glyphCount: 980,
    pairings: [
      { fontName: 'Open Sans', role: 'Header & UI', rationale: 'One of the most battle-tested typography pairings on the web.' }
    ]
  },
  {
    id: 'oswald',
    name: 'Oswald',
    category: 'sans-serif',
    designer: 'Vernon Adams',
    designerBio: 'Vernon Adams was an esteemed British type designer who made numerous open source fonts for the web.',
    stylesCount: 6,
    isVariable: true,
    sampleSentence: 'A rework of the classic style historically represented by Alternate Gothic.',
    styles: [
      { id: 'oswald-200', name: 'ExtraLight 200', weight: 200, isItalic: false },
      { id: 'oswald-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'oswald-500', name: 'Medium 500', weight: 500, isItalic: false },
      { id: 'oswald-600', name: 'SemiBold 600', weight: 600, isItalic: false },
      { id: 'oswald-700', name: 'Bold 700', weight: 700, isItalic: false },
    ],
    scripts: ['Latin', 'Cyrillic', 'Vietnamese'],
    description: 'The characters of Oswald were re-drawn and reformed to better fit the pixel grid of standard digital screens. Designed to be freely used across internet browsers.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 9,
    releaseYear: 2011,
    glyphCount: 1100,
    pairings: [
      { fontName: 'Roboto', role: 'Body Copy', rationale: 'Tight condensed headlines over clean open sans body text.' }
    ]
  },
  {
    id: 'lora',
    name: 'Lora',
    category: 'serif',
    designer: 'Cyreal',
    designerBio: 'Cyreal is a digital type foundry dedicated to open-source fonts for global languages.',
    stylesCount: 4,
    isVariable: true,
    sampleSentence: 'A well-balanced contemporary serif with roots in calligraphy.',
    styles: [
      { id: 'lora-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'lora-500', name: 'Medium 500', weight: 500, isItalic: false },
      { id: 'lora-600', name: 'SemiBold 600', weight: 600, isItalic: false },
      { id: 'lora-700', name: 'Bold 700', weight: 700, isItalic: false },
    ],
    scripts: ['Latin', 'Cyrillic', 'Vietnamese'],
    description: 'Lora is a well-balanced contemporary serif with roots in calligraphy. It has moderate contrast suited for body text and is optimized for screen reading.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 10,
    releaseYear: 2011,
    glyphCount: 1320,
    pairings: [
      { fontName: 'Outfit', role: 'Modern Title', rationale: 'Crisp geometric brand presence backed by literary grace.' }
    ]
  },
  {
    id: 'outfit',
    name: 'Outfit',
    category: 'sans-serif',
    designer: 'Rodrigo Fuenzalida',
    designerBio: 'Rodrigo Fuenzalida is a Venezuelan-born type designer known for striking geometric type systems.',
    stylesCount: 9,
    isVariable: true,
    sampleSentence: 'Engineered for cutting-edge brand systems and forward-thinking digital apps.',
    styles: [
      { id: 'outfit-200', name: 'ExtraLight 200', weight: 200, isItalic: false },
      { id: 'outfit-300', name: 'Light 300', weight: 300, isItalic: false },
      { id: 'outfit-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'outfit-500', name: 'Medium 500', weight: 500, isItalic: false },
      { id: 'outfit-600', name: 'SemiBold 600', weight: 600, isItalic: false },
      { id: 'outfit-700', name: 'Bold 700', weight: 700, isItalic: false },
      { id: 'outfit-800', name: 'ExtraBold 800', weight: 800, isItalic: false },
    ],
    scripts: ['Latin', 'Vietnamese'],
    description: 'Outfit is a modern geometric sans-serif typeface designed with immaculate clarity, wide apertures, and vibrant rhythm for digital interfaces.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 11,
    releaseYear: 2021,
    glyphCount: 654,
    pairings: [
      { fontName: 'DM Sans', role: 'Supportive Body', rationale: 'Harmonious geometric duo for SaaS and technological landing pages.' }
    ]
  },
  {
    id: 'dm-sans',
    name: 'DM Sans',
    category: 'sans-serif',
    designer: 'Colophon Foundry',
    designerBio: 'Colophon Foundry is an international award-winning type foundry based in London and Los Angeles.',
    stylesCount: 10,
    isVariable: true,
    sampleSentence: 'Low-contrast geometric sans serif designed for smaller text sizes.',
    styles: [
      { id: 'dm-sans-300', name: 'Light 300', weight: 300, isItalic: false },
      { id: 'dm-sans-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'dm-sans-500', name: 'Medium 500', weight: 500, isItalic: false },
      { id: 'dm-sans-700', name: 'Bold 700', weight: 700, isItalic: false },
      { id: 'dm-sans-900', name: 'Black 900', weight: 900, isItalic: false },
    ],
    scripts: ['Latin', 'Latin-ext'],
    description: 'DM Sans is a low-contrast geometric sans-serif typeface, intended for use at text sizes. It was designed to accompany DM Serif.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 12,
    releaseYear: 2019,
    glyphCount: 928,
    pairings: [
      { fontName: 'Syne', role: 'Avant-garde Display', rationale: 'Bold artistic display titles anchored by restrained DM Sans text.' }
    ]
  },
  {
    id: 'syne',
    name: 'Syne',
    category: 'display',
    designer: 'Lucas Descroix',
    designerBio: 'Lucas Descroix is an independent French graphic and type designer exploring visual tension and unexpected rhythm.',
    stylesCount: 5,
    isVariable: true,
    sampleSentence: 'Artistic typography with experimental contrast and high personality.',
    styles: [
      { id: 'syne-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'syne-500', name: 'Medium 500', weight: 500, isItalic: false },
      { id: 'syne-600', name: 'SemiBold 600', weight: 600, isItalic: false },
      { id: 'syne-700', name: 'Bold 700', weight: 700, isItalic: false },
      { id: 'syne-800', name: 'ExtraBold 800', weight: 800, isItalic: false },
    ],
    scripts: ['Latin'],
    description: 'Syne was designed for the visual identity of "Synesthésie", a contemporary art center in Saint-Denis. It features an extraordinary progression into wide, expressive extremes.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 13,
    releaseYear: 2020,
    glyphCount: 520,
    pairings: [
      { fontName: 'Inter', role: 'Calm Interface', rationale: 'Let the dramatic flair of Syne lead hero headers while Inter grounds UI elements.' }
    ]
  },
  {
    id: 'bebas-neue',
    name: 'Bebas Neue',
    category: 'display',
    designer: 'Ryoichi Tsunekawa',
    designerBio: 'Ryoichi Tsunekawa is an architect and type designer from Nagoya, Japan, known for tall impactful sans designs.',
    stylesCount: 1,
    isVariable: false,
    sampleSentence: 'THE MONUMENTAL ALL-CAPS TITLING SANS OF MODERN POSTER DESIGN.',
    styles: [
      { id: 'bebas-400', name: 'Regular 400', weight: 400, isItalic: false },
    ],
    scripts: ['Latin'],
    description: 'Bebas Neue is a display family suitable for headlines, captions, and packaging, created by Ryoichi Tsunekawa. Its condensed stature gives it immense visual weight.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 14,
    releaseYear: 2018,
    glyphCount: 420,
    pairings: [
      { fontName: 'Montserrat', role: 'Subtitle & Body', rationale: 'Tall architectural uppercase display headers matched with wide geometric sans.' }
    ]
  },
  {
    id: 'caveat',
    name: 'Caveat',
    category: 'handwriting',
    designer: 'Impallari Type',
    designerBio: 'Pablo Impallari was a type designer from Rosario, Argentina, passionate about open-source digital lettering.',
    stylesCount: 4,
    isVariable: true,
    sampleSentence: 'Natural handwritten notes with joyful playful strokes and ligatures.',
    styles: [
      { id: 'caveat-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'caveat-500', name: 'Medium 500', weight: 500, isItalic: false },
      { id: 'caveat-600', name: 'SemiBold 600', weight: 600, isItalic: false },
      { id: 'caveat-700', name: 'Bold 700', weight: 700, isItalic: false },
    ],
    scripts: ['Latin', 'Cyrillic'],
    description: 'Caveat is a handwriting typeface designed by Pablo Impallari. It has open counters and comfortable reading proportions, ideal for short notes, annotations, and personal messages.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 15,
    releaseYear: 2015,
    glyphCount: 680,
    pairings: [
      { fontName: 'Open Sans', role: 'Clean Prose', rationale: 'Handwritten callouts overlaying structured editorial text.' }
    ]
  },
  {
    id: 'fira-code',
    name: 'Fira Code',
    category: 'monospace',
    designer: 'Nikita Prokopov',
    designerBio: 'Nikita Prokopov is a software engineer and typeface designer known for coding ligatures.',
    stylesCount: 5,
    isVariable: true,
    sampleSentence: 'const calculateElevation = (x: number, y: number) => x !== y ? x ** 2 : null;',
    styles: [
      { id: 'fira-300', name: 'Light 300', weight: 300, isItalic: false },
      { id: 'fira-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'fira-500', name: 'Medium 500', weight: 500, isItalic: false },
      { id: 'fira-600', name: 'SemiBold 600', weight: 600, isItalic: false },
      { id: 'fira-700', name: 'Bold 700', weight: 700, isItalic: false },
    ],
    scripts: ['Latin', 'Cyrillic', 'Greek'],
    description: 'Fira Code is a free monospaced font containing ligatures for common programming multi-character combinations like ->, !==, <=, and ===.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 16,
    releaseYear: 2014,
    glyphCount: 1580,
    pairings: [
      { fontName: 'Plus Jakarta Sans', role: 'Dashboard UI', rationale: 'Modern developer docs pairing code blocks with high-precision UI text.' }
    ]
  },
  {
    id: 'jetbrains-mono',
    name: 'JetBrains Mono',
    category: 'monospace',
    designer: 'JetBrains',
    designerBio: 'Crafted by JetBrains design team with Philipp Nurullin for developers.',
    stylesCount: 8,
    isVariable: true,
    sampleSentence: 'System.out.println("Building next-generation digital tools");',
    styles: [
      { id: 'jb-300', name: 'Light 300', weight: 300, isItalic: false },
      { id: 'jb-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'jb-500', name: 'Medium 500', weight: 500, isItalic: false },
      { id: 'jb-700', name: 'Bold 700', weight: 700, isItalic: false },
      { id: 'jb-800', name: 'ExtraBold 800', weight: 800, isItalic: false },
    ],
    scripts: ['Latin', 'Cyrillic', 'Greek'],
    description: 'JetBrains Mono’s letterforms have increased height, distinct oval shapes, and clear ligatures to reduce eye strain while scanning through thousands of lines of code.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 17,
    releaseYear: 2020,
    glyphCount: 1620,
    pairings: [
      { fontName: 'Inter', role: 'Application Frame', rationale: 'The quintessential developer ecosystem pairing.' }
    ]
  },
  {
    id: 'cinzel',
    name: 'Cinzel',
    category: 'serif',
    designer: 'Natanael Gama',
    designerBio: 'Natanael Gama is a Portuguese graphic and type designer inspired by historical epigraphy.',
    stylesCount: 6,
    isVariable: true,
    sampleSentence: 'IN THE TRADITION OF FIRST CENTURY ROMAN INSCRIPTIONS.',
    styles: [
      { id: 'cinzel-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'cinzel-500', name: 'Medium 500', weight: 500, isItalic: false },
      { id: 'cinzel-600', name: 'SemiBold 600', weight: 600, isItalic: false },
      { id: 'cinzel-700', name: 'Bold 700', weight: 700, isItalic: false },
    ],
    scripts: ['Latin'],
    description: 'Cinzel is a typeface inspired by first century Roman inscriptions, and based on classical proportions. However it is not a simple revivalism: it incorporates modern elegance.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 18,
    releaseYear: 2012,
    glyphCount: 540,
    pairings: [
      { fontName: 'Lora', role: 'Article Prose', rationale: 'Majestic classical titling with warm, legible serif body.' }
    ]
  },
  {
    id: 'cormorant-garamond',
    name: 'Cormorant Garamond',
    category: 'serif',
    designer: 'Christian Thalmann',
    designerBio: 'Christian Thalmann is a Swiss type designer and founder of Catharsis Fonts in Zurich.',
    stylesCount: 10,
    isVariable: true,
    sampleSentence: 'Bespoke high-contrast display serif reviving Claude Garamont originals.',
    styles: [
      { id: 'cg-300', name: 'Light 300', weight: 300, isItalic: false },
      { id: 'cg-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'cg-600', name: 'SemiBold 600', weight: 600, isItalic: false },
      { id: 'cg-700', name: 'Bold 700', weight: 700, isItalic: false },
    ],
    scripts: ['Latin', 'Cyrillic'],
    description: 'Cormorant Garamond is a free display type family inspired by the famous 16th century French typographer Claude Garamont.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 19,
    releaseYear: 2015,
    glyphCount: 1420,
    pairings: [
      { fontName: 'Montserrat', role: 'Modern Subheading', rationale: 'Poetic literary grace contrasted with modern Buenos Aires geometric sans.' }
    ]
  },
  {
    id: 'pacifico',
    name: 'Pacifico',
    category: 'handwriting',
    designer: 'Vernon Adams',
    designerBio: 'Vernon Adams was an English typeface designer whose fun retro script gained worldwide celebration.',
    stylesCount: 1,
    isVariable: false,
    sampleSentence: 'Golden sands, Pacific waves, and vintage retro surf vibes.',
    styles: [
      { id: 'pacifico-400', name: 'Regular 400', weight: 400, isItalic: false },
    ],
    scripts: ['Latin', 'Cyrillic'],
    description: 'Pacifico is an original and fun brush script handwriting typeface inspired by the 1950s American surf culture.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 20,
    releaseYear: 2011,
    glyphCount: 480,
    pairings: [
      { fontName: 'Open Sans', role: 'Clean Balance', rationale: 'Casual retro brand mark balanced by neutral legible text.' }
    ]
  },
  {
    id: 'dancing-script',
    name: 'Dancing Script',
    category: 'handwriting',
    designer: 'Impallari Type',
    designerBio: 'Pablo Impallari crafted lively casual scripts for spontaneous headings.',
    stylesCount: 4,
    isVariable: true,
    sampleSentence: 'Bouncy script where caps bounce below the baseline.',
    styles: [
      { id: 'ds-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'ds-600', name: 'SemiBold 600', weight: 600, isItalic: false },
      { id: 'ds-700', name: 'Bold 700', weight: 700, isItalic: false },
    ],
    scripts: ['Latin', 'Vietnamese'],
    description: 'Dancing Script is a lively casual script where the letters bounce and change size slightly. Big caps go below the baseline.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 21,
    releaseYear: 2011,
    glyphCount: 520,
    pairings: [
      { fontName: 'Roboto', role: 'Supportive Body', rationale: 'Playful handwritten touch anchored by solid neutral typography.' }
    ]
  },
  {
    id: 'space-grotesk',
    name: 'Space Grotesk',
    category: 'sans-serif',
    designer: 'Florian Karsten',
    designerBio: 'Florian Karsten is a Czech graphic designer and type foundry founder in Brno.',
    stylesCount: 5,
    isVariable: true,
    sampleSentence: 'Proportional grotesque derived from Colophon’s Space Mono.',
    styles: [
      { id: 'sg-300', name: 'Light 300', weight: 300, isItalic: false },
      { id: 'sg-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'sg-500', name: 'Medium 500', weight: 500, isItalic: false },
      { id: 'sg-600', name: 'SemiBold 600', weight: 600, isItalic: false },
      { id: 'sg-700', name: 'Bold 700', weight: 700, isItalic: false },
    ],
    scripts: ['Latin', 'Vietnamese'],
    description: 'Space Grotesk is a proportional sans-serif variant of Colophon Foundry’s fixed-width Space Mono family. It retains quirky monospace details.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 22,
    releaseYear: 2020,
    glyphCount: 680,
    pairings: [
      { fontName: 'DM Sans', role: 'Body Paragraph', rationale: 'Quirky retro-futuristic headings with balanced text.' }
    ]
  },
  {
    id: 'hind-siliguri',
    name: 'Hind Siliguri',
    category: 'sans-serif',
    designer: 'Indian Type Foundry',
    designerBio: 'Indian Type Foundry developed Hind Siliguri for Bengali and Latin scripts with clear geometric structure.',
    stylesCount: 5,
    isVariable: false,
    sampleSentence: 'প্রকৃতি ও মানুষের মেলবন্ধনে গড়ে ওঠে নতুন প্রযুক্তি ও স্বপ্ন।',
    styles: [
      { id: 'hs-300', name: 'Light 300', weight: 300, isItalic: false },
      { id: 'hs-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'hs-500', name: 'Medium 500', weight: 500, isItalic: false },
      { id: 'hs-600', name: 'SemiBold 600', weight: 600, isItalic: false },
      { id: 'hs-700', name: 'Bold 700', weight: 700, isItalic: false },
    ],
    scripts: ['Bengali', 'Latin'],
    description: 'Hind Siliguri is an open-source typeface supporting the Bengali and Latin scripts. It has a monolinear sans-serif feel with humanist touches.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 23,
    releaseYear: 2015,
    glyphCount: 840,
    pairings: [
      { fontName: 'Inter', role: 'Latin Match', rationale: 'Flawless bilingual compatibility between Bengali text and Latin UI.' }
    ]
  },
  {
    id: 'noto-sans-bengali',
    name: 'Noto Sans Bengali',
    category: 'sans-serif',
    designer: 'Google',
    designerBio: 'Google Noto is a global font family designed to visually harmonize all world languages with zero missing glyph tofu.',
    stylesCount: 9,
    isVariable: true,
    sampleSentence: 'সব মানুষ স্বাধীনভাবে সমান মর্যাদা এবং অধিকার নিয়ে জন্মগ্রহণ করে।',
    styles: [
      { id: 'nsb-300', name: 'Light 300', weight: 300, isItalic: false },
      { id: 'nsb-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'nsb-500', name: 'Medium 500', weight: 500, isItalic: false },
      { id: 'nsb-600', name: 'SemiBold 600', weight: 600, isItalic: false },
      { id: 'nsb-700', name: 'Bold 700', weight: 700, isItalic: false },
    ],
    scripts: ['Bengali'],
    description: 'Noto Sans Bengali is an unmodulated ("sans-serif") design for texts in the Indic Bengali (Bangla) script, accommodating standard and conjunct consonants.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 24,
    releaseYear: 2016,
    glyphCount: 1100,
    pairings: [
      { fontName: 'Roboto', role: 'Global Partner', rationale: 'Harmonious weight scales across multilingual web applications.' }
    ]
  },
  {
    id: 'great-vibes',
    name: 'Great Vibes',
    category: 'handwriting',
    designer: 'TypeSETit',
    designerBio: 'Robert E. Leuschke has designed more than 250 calligraphic typefaces with graceful flourish loops.',
    stylesCount: 1,
    isVariable: false,
    sampleSentence: 'Flourished calligraphy with graceful loops and flowing ligatures.',
    styles: [
      { id: 'gv-400', name: 'Regular 400', weight: 400, isItalic: false },
    ],
    scripts: ['Latin'],
    description: 'Great Vibes is a beautifully flowing connecting script with cleanly formed loops and ascenders, perfect for luxury invitations and delicate brands.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 25,
    releaseYear: 2012,
    glyphCount: 420,
    pairings: [
      { fontName: 'Plus Jakarta Sans', role: 'Modern UI', rationale: 'Elegance meets sharp digital ergonomics.' }
    ]
  },
  {
    id: 'comfortaa',
    name: 'Comfortaa',
    category: 'display',
    designer: 'Johan Aakerlund',
    designerBio: 'Johan Aakerlund is a Danish design engineer who crafted Comfortaa as a rounded geometric sans.',
    stylesCount: 5,
    isVariable: true,
    sampleSentence: 'Soft rounded geometric curves providing warm organic energy.',
    styles: [
      { id: 'comf-300', name: 'Light 300', weight: 300, isItalic: false },
      { id: 'comf-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'comf-600', name: 'SemiBold 600', weight: 600, isItalic: false },
      { id: 'comf-700', name: 'Bold 700', weight: 700, isItalic: false },
    ],
    scripts: ['Latin', 'Cyrillic', 'Greek'],
    description: 'Comfortaa is a rounded geometric sans-serif type design intended for large sizes. It is welcoming, modern, and distinctively approachable.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 26,
    releaseYear: 2011,
    glyphCount: 780,
    pairings: [
      { fontName: 'Open Sans', role: 'Prose', rationale: 'Friendly playful headlines backed by clear functional body text.' }
    ]
  },
  {
    id: 'lexend',
    name: 'Lexend',
    category: 'sans-serif',
    designer: 'Thomas Jockin',
    designerBio: 'Thomas Jockin is a type designer and researcher specializing in typography for reading fluency and comprehension.',
    stylesCount: 9,
    isVariable: true,
    sampleSentence: 'Empirically designed to improve reading proficiency and reduce visual stress.',
    styles: [
      { id: 'lexend-300', name: 'Light 300', weight: 300, isItalic: false },
      { id: 'lexend-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'lexend-500', name: 'Medium 500', weight: 500, isItalic: false },
      { id: 'lexend-600', name: 'SemiBold 600', weight: 600, isItalic: false },
      { id: 'lexend-700', name: 'Bold 700', weight: 700, isItalic: false },
    ],
    scripts: ['Latin', 'Vietnamese'],
    description: 'Lexend was envisioned to change how we read. Guided by educational research into typographic spacing and cognitive load, it maximizes visual pacing.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 27,
    releaseYear: 2019,
    glyphCount: 890,
    pairings: [
      { fontName: 'Lora', role: 'Classic Contrast', rationale: 'State-of-the-art reading science paired with timeless book serif.' }
    ]
  },
  {
    id: 'rubik',
    name: 'Rubik',
    category: 'sans-serif',
    designer: 'Hubert & Fischer',
    designerBio: 'Philipp Hubert and Sebastian Fischer are type designers in Berlin and New York.',
    stylesCount: 10,
    isVariable: true,
    sampleSentence: 'Slightly rounded corners for an inviting and solid mechanical feel.',
    styles: [
      { id: 'rubik-300', name: 'Light 300', weight: 300, isItalic: false },
      { id: 'rubik-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'rubik-500', name: 'Medium 500', weight: 500, isItalic: false },
      { id: 'rubik-700', name: 'Bold 700', weight: 700, isItalic: false },
      { id: 'rubik-900', name: 'Black 900', weight: 900, isItalic: false },
    ],
    scripts: ['Latin', 'Cyrillic', 'Hebrew'],
    description: 'Rubik is a sans-serif font family with slightly rounded corners designed for the Rubik’s Cube exhibition.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 28,
    releaseYear: 2015,
    glyphCount: 940,
    pairings: [
      { fontName: 'Fira Code', role: 'Code Snippets', rationale: 'Friendly rounded UI paired with crisp monospaced code blocks.' }
    ]
  },
  {
    id: 'anton',
    name: 'Anton',
    category: 'sans-serif',
    designer: 'Vernon Adams',
    designerBio: 'Vernon Adams redesigned this traditional advertising sans for high impact web banners.',
    stylesCount: 1,
    isVariable: false,
    sampleSentence: 'DYNAMIC ULTRA-BOLD SANS FOR AUDACIOUS HEADLINES.',
    styles: [
      { id: 'anton-400', name: 'Regular 400', weight: 400, isItalic: false },
    ],
    scripts: ['Latin'],
    description: 'Anton is a reworking of a traditional advertising sans serif typeface. The letterforms have been digitized and reshaped for web browsers.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 29,
    releaseYear: 2011,
    glyphCount: 410,
    pairings: [
      { fontName: 'Roboto', role: 'Support Text', rationale: 'Thunderous bold poster titles over calm neutral body.' }
    ]
  },
  {
    id: 'abril-fatface',
    name: 'Abril Fatface',
    category: 'serif',
    designer: 'TypeTogether',
    designerBio: 'TypeTogether is an independent type foundry created by Veronika Burian and José Scaglione.',
    stylesCount: 1,
    isVariable: false,
    sampleSentence: 'Reminiscent of 19th-century British and French advertising titling.',
    styles: [
      { id: 'abril-400', name: 'Regular 400', weight: 400, isItalic: false },
    ],
    scripts: ['Latin'],
    description: 'Abril Fatface is part of a larger type family system. It recalls the heavy titling fonts used on advertising posters in 19th century Britain and France.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 30,
    releaseYear: 2011,
    glyphCount: 460,
    pairings: [
      { fontName: 'Raleway', role: 'Subtle Serif Complement', rationale: 'Grand display contrast over delicate geometric sans.' }
    ]
  },
  {
    id: 'raleway',
    name: 'Raleway',
    category: 'sans-serif',
    designer: 'Matt McInerney',
    designerBio: 'Matt McInerney is an American designer who crafted Raleway as a single thin weight before it expanded globally.',
    stylesCount: 18,
    isVariable: true,
    sampleSentence: 'Elegant neo-grotesque sans inspired by classic Bauhaus and art deco.',
    styles: [
      { id: 'raleway-200', name: 'ExtraLight 200', weight: 200, isItalic: false },
      { id: 'raleway-300', name: 'Light 300', weight: 300, isItalic: false },
      { id: 'raleway-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'raleway-600', name: 'SemiBold 600', weight: 600, isItalic: false },
      { id: 'raleway-700', name: 'Bold 700', weight: 700, isItalic: false },
    ],
    scripts: ['Latin', 'Cyrillic'],
    description: 'Raleway is an elegant sans-serif typeface family intended for headings and other large usage. It features distinct diagonal crossed ‘W’ and low crossbar.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 31,
    releaseYear: 2012,
    glyphCount: 960,
    pairings: [
      { fontName: 'Merriweather', role: 'Serif Article', rationale: 'Sophisticated geometric heading with comfortable reading serif.' }
    ]
  },
  {
    id: 'nunito',
    name: 'Nunito',
    category: 'sans-serif',
    designer: 'Vernon Adams',
    designerBio: 'Vernon Adams developed Nunito as a rounded display sans, later extended with full non-rounded weights.',
    stylesCount: 14,
    isVariable: true,
    sampleSentence: 'A well balanced rounded terminal sans for delightful user interfaces.',
    styles: [
      { id: 'nunito-300', name: 'Light 300', weight: 300, isItalic: false },
      { id: 'nunito-400', name: 'Regular 400', weight: 400, isItalic: false },
      { id: 'nunito-600', name: 'SemiBold 600', weight: 600, isItalic: false },
      { id: 'nunito-700', name: 'Bold 700', weight: 700, isItalic: false },
      { id: 'nunito-800', name: 'ExtraBold 800', weight: 800, isItalic: false },
    ],
    scripts: ['Latin', 'Cyrillic', 'Vietnamese'],
    description: 'Nunito is an exceptionally balanced rounded sans serif typeface. Its soft terminal ends evoke warm human friendliness on digital screens.',
    license: 'Open Font License (OFL 1.1)',
    popularityRank: 32,
    releaseYear: 2012,
    glyphCount: 1150,
    pairings: [
      { fontName: 'Playfair Display', role: 'Editorial Flair', rationale: 'Soft modern UI sans paired with high-fashion serif.' }
    ]
  }
];
