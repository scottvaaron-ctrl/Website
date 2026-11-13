// Everything about you that appears in more than one place lives here.
// Edit this file to change your name, tagline, contact info or experience.

// Which look the site uses: 'editorial' (A, cream) or 'bold' (B, dark navy).
export const THEME: 'editorial' | 'bold' = 'editorial';

export const profile = {
  name: 'Aaron Scott',
  tagline: 'I build the systems that keep restaurants running, and I explain why things break.',
  roles: [
    'Multi-Unit General Manager',
    'Founder, Backhouse Group',
    'AI tool builder',
    'Creator, drBreakdown',
  ],
  email: 'scottvaaron@gmail.com',
  github: 'https://github.com/scottvaaron-ctrl',
  // Put your photo at public/headshot.jpg and change this to 'headshot.jpg'.
  headshot: '' as string,
};

// Numbers shown in the homepage proof strip. Each one is taken word for word
// from Aaron_Scott_Resume_General-ATS_2026-11.docx.
export const proof = [
  { value: '4', label: 'new restaurants opened and trained' },
  { value: '20+', label: 'underperforming stores audited and retrained' },
  { value: '~100', label: 'SOPs written across 3 locations' },
  { value: '60–80', label: 'staff led across two stores' },
];

// The three doors on the homepage, one per kind of visitor.
export const paths = [
  {
    kicker: 'Hiring?',
    title: 'Operations leader',
    text: 'Eight years from crew to multi-unit training. Openings, turnarounds, SOP systems.',
    href: 'experience/',
    cta: 'See experience',
  },
  {
    kicker: 'Own a restaurant?',
    title: 'Backhouse Group',
    text: 'Operations consulting: SOPs, training systems and franchise infrastructure.',
    href: 'projects/backhouse-group/',
    cta: 'Work with Backhouse',
  },
  {
    kicker: 'Curious?',
    title: 'Builder and explainer',
    text: 'AI tools, apps, a restaurant game, and a channel about what breaks and why.',
    href: 'projects/',
    cta: 'See projects',
  },
];

export const experience = [
  {
    org: "Freddy's Frozen Custard & Steakburgers",
    title: 'Multi-Unit General Manager',
    period: '10/2026 – Present',
    points: [
      'Lead two Freddy’s locations as Multi-Unit GM, overseeing 60–80 staff.',
      'Hire, onboard, and train new employees across both locations.',
    ],
  },
  {
    org: 'Backhouse Group',
    title: 'Founder',
    period: '05/2026 – Present',
    points: [
      'Restaurant operations consulting practice: SOPs, training systems, and franchise infrastructure.',
    ],
  },
  {
    org: 'Bang Cookies',
    title: 'Marketing, Corporate Accounts & Fundraising → Operations',
    period: '01/2026 – 08/2026',
    points: [
      'Owned operations for NJ locations (~$2M annual revenue), leading a team of 4.',
      'Authored ~100 SOPs across 3 locations, including a 60+ document system spanning 11 departments.',
      'Launched a breakfast and bundle catering line on ezCater generating ~$3,000/week (~$150K annualized).',
    ],
  },
  {
    org: 'Qdoba',
    title: 'Progressive Operations and Training Roles',
    period: '03/2018 – 05/2026',
    ladder:
      'Server → Cook → Shift Supervisor → Assistant General Manager → General Manager → Brand Operations Specialist → New Restaurant Opening Trainer',
    points: [
      'Opened 4 new restaurant locations, training staff in Toyota Production System and TWI Job Instruction methodology; on average doubled sales within two months of opening.',
      'Audited and retrained staff at 20+ underperforming stores across four markets, reducing labor cost by up to 8% and food cost by up to 7%.',
      'Progressed from crew to multi-unit training and operations roles over roughly eight years, managing 6–12 employees daily as General Manager.',
    ],
  },
];

export const additionalExperience =
  "Deli Manager, Walmart (2020–2021) · Shift Lead, Wendy's (2017–2019) · Intern, Englishtown Police Department (2019–2020) · Camp Counselor, Haycock Ministries (seasonal, 2016–2019)";

export const education = {
  degree: 'B.A. Political Science',
  school: 'Montclair State University',
  year: '2024',
  certs: ['ServSafe Food Protection Manager'],
};

export const skills = [
  {
    group: 'Operations & Management',
    items: ['Multi-unit SOP architecture', 'New restaurant openings', 'Multi-unit auditing', 'Toyota Production System / Kaizen', 'TWI Job Instruction', 'Staff training & development', 'Scheduling & labor optimization', 'Food safety compliance'],
  },
  {
    group: 'Business Development',
    items: ['B2B & catering sales', 'Corporate partnerships', 'Consultative selling', 'Account management', 'Pricing & promotions'],
  },
  {
    group: 'Technical / AI',
    items: ['AI tool development (Claude API)', 'Workflow automation', 'Google Apps Script', 'Discord.js', 'Prompt & context engineering', 'Python scripting', 'Advanced Excel systems'],
  },
];
