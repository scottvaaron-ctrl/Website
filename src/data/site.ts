// Everything about you that appears in more than one place lives here.
// Facts come from your November 2026 resumes (QSR-Ops, Consulting-BD, Civic-Policy, General-ATS).

// Which look the site uses: 'editorial' (A, cream) or 'bold' (B, dark navy).
export const THEME: 'editorial' | 'bold' = 'editorial';

export const profile = {
  name: 'Aaron Scott',
  tagline:
    'Food service operations leader with a background in politics and sales. I identify where businesses break down and build the systems that fix them.',
  roles: ['Multi-Unit General Manager', 'Founder & CEO, Backhouse Group', 'AI Systems Builder', 'Creator, Breakdown'],
  email: 'scottvaaron@gmail.com',
  github: 'https://github.com/scottvaaron-ctrl',
  linkedin: 'https://www.linkedin.com/in/aaron-scott-63b716305/',
  twoTail: 'https://two-tail-technologies.github.io/Website/',
  // Put your photo at public/headshot.jpg and change this to 'headshot.jpg'.
  headshot: '' as string,
  // Contact form: create a free Web3Forms access key at https://web3forms.com
  // with the email that should receive messages, then paste the key here.
  // While it's empty, the Contact page shows an email button instead of the form.
  web3formsKey: '' as string,
  // Résumé download: put a PDF with no phone number or town at
  // public/files/aaron-scott-resume.pdf, then change this to 'files/aaron-scott-resume.pdf'.
  // While it's empty, no download button shows.
  resume: '' as string,
};

// Your own answers for the About page. Each one shows as its own short section
// once you fill it in; while a field is empty, nothing shows for it.
// One paragraph per string, e.g. whyRestaurants: ['First paragraph.', 'Second paragraph.'].
export const aboutAnswers = {
  whyRestaurants: [] as string[], // Why restaurants?
  trainingMoment: [] as string[], // A moment that shaped how you train people
  whyPolitics: [] as string[], // Why politics?
  goals: [] as string[], // What you're building toward (long-range goals, across industries)
  outsideWork: [] as string[], // Who you are outside work (replaces the current one-line "Outside of work")
};

// Homepage numbers. Each one is in your resumes word for word.
export const proof = [
  { value: '4', label: 'new restaurants opened and trained' },
  { value: '20+', label: 'underperforming stores audited and retrained' },
  { value: '~100', label: 'SOPs written across 3 locations' },
  { value: '2,000+', label: 'voters reached through phone banking' },
];

// The four doors on the homepage, one per kind of visitor.
export const paths = [
  {
    kicker: 'For employers',
    title: 'Operations leadership',
    text: 'Eight years of progression at Qdoba, from server to New Restaurant Opening Trainer. Now leading two Freddy’s locations.',
    href: 'experience/',
    cta: 'View experience',
  },
  {
    kicker: 'For businesses',
    title: 'Backhouse Group',
    text: 'Operational assessments, SOP development and staff training for small businesses.',
    href: 'projects/backhouse-group/',
    cta: 'Explore Backhouse Group',
  },
  {
    kicker: 'For collaborators',
    title: 'Projects and research',
    text: 'AI agents, software, policy research and media, including Breakdown.',
    href: 'projects/',
    cta: 'View projects',
  },
  {
    kicker: 'For admissions and policy',
    title: 'Civic and policy work',
    text: 'A political science degree, county party and campaign work, and co-authored research on ID access for Passaic County’s homeless population.',
    href: 'experience/#civic',
    cta: 'View civic and policy work',
  },
];

export type Job = {
  org: string;
  title: string;
  period: string;
  note?: string;
  ladder?: string[];
  summary?: string; // one line for the homepage; falls back to the first story paragraph
  highlights?: string[];
  story: string[];
};

export const tracks: { id: string; name: string; intro: string; jobs: Job[] }[] = [
  {
    id: 'operations',
    name: 'Operations',
    intro: 'Nearly a decade in food service, from server to multi-unit management.',
    jobs: [
      {
        org: "Freddy's Frozen Custard & Steakburgers",
        title: 'Multi-Unit General Manager',
        period: '10/2026 – Present',
        highlights: ['2 stores', '60–80 staff', 'Team Member → Multi-Unit GM in one week'],
        story: [
          'Hired as a team member, I was promoted to Assistant General Manager and then to Multi-Unit General Manager for both locations within one week.',
          'I lead two stores with a combined team of 60–80 people. I hire, onboard and train new employees to the brand’s standards for service, product and food safety, and I am responsible for daily operations and product quality at both stores as a ServSafe-certified Food Protection Manager.',
        ],
      },
      {
        org: 'Bang Cookies',
        title: 'Operations',
        period: '01/2026 – 08/2026',
        highlights: ['~$2M in annual revenue', '~100 SOPs', '~$3,000/week catering line', '1 workday a week saved'],
        story: [
          'I joined on the sales and fundraising side and moved into operations, where I owned the New Jersey locations: about $2M in annual revenue, a team of 4, and daily coordination with department heads across the company.',
          'On the business development side I built a field sales system (a Field Manual, an Outreach Tracker and a Route Planning SOP) for outreach to about 100 businesses a week. I designed, tested and launched a breakfast and bundle catering line on ezCater that generated approximately $3,000 per week (about $150K annualized), wrote a 90-day marketing plan for three product launches (Breakfast, Boba Tea and B2B Catering) with the email flows and lead-capture forms behind it, and led community and B2B fundraising across Monmouth County.',
          'I developed the company’s operating documentation: about 100 SOPs across 3 locations, including a 60+ document operating system spanning 11 departments for the American Dream store. I built procedure suites for high-constraint environments, including dishwashing and equipment at the Newark Airport (EWR) location, plus a Point of Sale SOP and a Daily Shift Checklist that standardized open to close.',
          'For the Las Vegas flagship opening I designed a multi-phase SOP system built to double as a franchise-readiness template for future units, and a hiring playbook tailored to the Las Vegas hospitality labor market.',
          'I advised the CEO directly on organizational structure, recommending that store-level decision authority move to unit managers and correcting misalignment between product and brand, from menu board design to pastry visual identity. I also built an AI inventory bot that flags low stock and triggers reorders at the factory and store level, saving roughly one full workday of manual ordering each week.',
        ],
      },
      {
        org: 'Qdoba',
        title: 'Server → New Restaurant Opening Trainer',
        summary: 'Eight years from server to New Restaurant Opening Trainer: 4 openings and 20+ turnarounds across four markets.',
        period: '03/2018 – 05/2026',
        ladder: ['Server', 'Cook', 'Shift Supervisor', 'Assistant GM', 'General Manager', 'Brand Operations Specialist', 'New Restaurant Opening Trainer'],
        highlights: ['20+ turnarounds', 'Labor cost up to −8%', 'Food cost up to −7%', 'Relaunch sales doubled in 2 months (avg.)', '4 openings'],
        story: [
          'I started as a server and advanced through each role shown above. As General Manager I managed 6–12 employees daily and oversaw operations, payroll and inventory.',
          'Then I moved into brand operations. As Brand Operations Specialist I audited and retrained more than 20 underperforming stores across four markets, stores that averaged about $40,000 a week, with catering orders of $1,500 or more. I reworked their workflows, which cut labor cost by up to 8% and food cost by up to 7%. With store managers and marketing teams I relaunched each store through specials and community partnerships, and on average sales doubled within two months of retraining.',
          'As New Restaurant Opening Trainer I opened 4 new restaurants, training each crew in the Toyota Production System and TWI Job Instruction before grand opening, and worked with store managers and marketing on opening specials and with local community organizations. Between openings, I continued audit and retraining work at underperforming stores.',
          'Every retraining included the store’s General Manager alongside the crew. Over time I trained about 5 District Managers and 12 General Managers and built each store’s action plan with its District Manager. After each retraining, I visited nearby businesses with complimentary meal cards to rebuild community awareness.',
        ],
      },
      {
        org: "Jersey Mike's",
        title: 'Shift Manager',
        period: '08/2021 – 06/2022',
        highlights: ['2.5 → 1.5 min per order', 'Food waste −13%'],
        story: [
          'I reduced average service time from 2.5 minutes to 1.5 minutes per transaction through targeted skill-building on the line. I reduced food waste by 13% with just-in-time prep and color-coded expiration labels, and worked with the General Manager to balance labor efficiency with community outreach.',
        ],
      },
      {
        org: 'Walmart',
        title: 'Deli Manager',
        period: '03/2020 – 03/2021',
        note: 'Full-time, temporary (COVID era)',
        story: [
          'I managed daily deli operations during the pandemic: 2–3 staff a shift, 7am to 8pm, seven days a week, inside a department of about 15 people. I owned food safety and ordering for the deli, bakery and grab-and-go sections.',
        ],
      },
    ],
  },
  {
    id: 'business',
    name: 'Business development',
    intro: 'Consulting, business-to-business and field sales.',
    jobs: [
      {
        org: 'Backhouse Group',
        title: 'Founder / CEO',
        period: '05/2026 – Present',
        summary: 'Operations consulting for small businesses: SOPs rebuilt where they break down, and staff trained to follow them. Also the parent company for my ventures.',
        highlights: ['Two-person practice', 'Ventures + consulting'],
        story: [
          'Backhouse Group is the parent company for my ventures. Early-stage ventures are housed within Backhouse; as they mature, they are spun off into independent companies, with Backhouse moving into a holding-company role.',
          'Backhouse is also an operations consulting practice for small businesses. We rebuild or build standard operating procedures where they break down and train staff to follow them. I lead a two-person practice, set strategic direction, and review my partner’s work on parallel client projects. I conduct end-to-end assessments of staffing, customer engagement and workflow to identify and prioritize improvements.',
          'I also built the practice’s internal tools: a Discord-based AI consulting assistant and a lead research bot, both described on the Projects page.',
        ],
      },
      {
        org: 'Garden State Consultants',
        title: 'Customer Representative (Sales)',
        period: '06/2025 – 12/2025',
        highlights: ['100% of quota in two weeks'],
        story: ['I sold AT&T and Primo Water subscriptions and hit 100% of quota within two weeks.'],
      },
      {
        org: 'Success LLC',
        title: 'Key Holder',
        period: '06/2022 – 01/2023',
        highlights: ['Average ticket $11 → $18', 'Up to 8 weekly B2B accounts'],
        story: [
          'I closed recurring business accounts worth about $300 a week each, with up to eight active weekly orders at a time. On the retail side I raised the average ticket from $11 to $18, a 64% increase, through product knowledge and consultative upselling. I also ran inventory and daily sales forecasts, phased out underperforming products, and launched new items monthly based on customer feedback.',
        ],
      },
    ],
  },
  {
    id: 'civic',
    name: 'Civic & policy',
    intro: 'Campaigns, county party work, advocacy and university policy research.',
    jobs: [
      {
        org: 'Montclair State University',
        title: 'Policy Research Co-Author',
        period: '09/2023 – 01/2024',
        highlights: ['Certificate of Recognition'],
        story: [
          'I co-authored research on why the homeless population of Passaic County could not obtain critical state and federal identification. We diagnosed the policy failures through stakeholder interviews and research on the people affected, then worked with state agencies and a mayoral innovation office on data-driven fixes. I analyzed the data in RStudio and SPSS and presented the findings to decision-makers and street-level bureaucrats. The work earned a Certificate of Recognition for Solving Authentic Complex Problems.',
        ],
      },
      {
        org: 'Monmouth County Democrats',
        title: 'Intern',
        period: '09/2024 – 06/2025',
        story: [
          'I analyzed constituent communications every week and turned them into summaries staff could act on. I kept the voter, legislation-tracking and public-statement databases current, and connected officials with constituents through events, canvassing and phone banking.',
        ],
      },
      {
        org: 'Josh4Jersey',
        title: 'Intern',
        period: '01/2025 – 04/2025',
        story: ['I did in-person outreach to residents of Monmouth and Ocean counties, securing ballot access and building support for the candidate, and staffed events with elected officials and community leaders.'],
      },
      {
        org: 'Fahem School Board Re-Election',
        title: 'Volunteer Coordinator',
        period: '2021 and 2023 campaigns',
        highlights: ['2,000+ voters'],
        story: [
          'I ran phone banking that reached more than 2,000 voters, talked with residents by phone, at the door and at polling places, and maintained precinct vote counts to inform election-day strategy.',
        ],
      },
      {
        org: 'Clean Water Action',
        title: 'Outdoor Sales Representative',
        period: '03/2025 – 12/2025',
        story: ['I canvassed door to door across Philadelphia, presenting the organization’s environmental mission and securing individual donations.'],
      },
      {
        org: 'Englishtown Police Department',
        title: 'Intern',
        period: '09/2019 – 05/2020',
        story: ['I cleaned and organized department databases ahead of a system-wide update, participated in ride-alongs, and supported community relations on walking-beat patrols.'],
      },
    ],
  },
];

export const earlier = "Shift Lead, Wendy's (2017–2019) · Camp Counselor, Haycock Ministries (seasonal, 2016–2019)";

export const education = {
  degree: 'B.A. Political Science',
  minors: 'Minors in Policy Studies and Global Security & Diplomacy',
  school: 'Montclair State University',
  year: '12/2024',
  honors: ['GPA 3.78', "Dean's List 2023–2024", 'Certificate of Recognition for Solving Authentic Complex Problems'],
  certs: ['ServSafe Food Protection Manager (expires 10/2031)'],
};

export const skills = [
  {
    group: 'Operations',
    items: ['Multi-unit SOP architecture', 'New restaurant openings', 'Franchise readiness', 'Multi-unit auditing', 'Toyota Production System / Kaizen', 'TWI Job Instruction', 'Hiring playbooks', 'Food safety compliance'],
  },
  {
    group: 'Business development',
    items: ['B2B & catering sales', 'Field sales systems', 'Corporate & nonprofit partnerships', 'Consultative selling', 'Product launches', 'Pricing & promotions'],
  },
  {
    group: 'Civic & research',
    items: ['Field organizing', 'Phone banking & canvassing', 'Policy analysis', 'R / RStudio', 'SPSS', 'Public speaking'],
  },
  {
    group: 'AI & tools',
    items: ['AI agents (Claude API)', 'Workflow automation', 'Discord.js', 'Google Apps Script', 'Klaviyo', 'GoHighLevel', 'Advanced Excel systems'],
  },
];

// The "Now" page. Update it whenever things change; the date shows on the page.
export const now = {
  updated: 'November 2026',
  items: [
    'Running two Freddy’s stores as Multi-Unit General Manager.',
    'Relaunching Backhouse Group’s consulting practice.',
    'Writing the Breakdown pilot, “Killing an Institution Without Repealing It.”',
    'Building version 4 of my trading agent. Versions 1 through 3 traded paper money.',
    'Developing Consultobot with my brother through Two Tail Technologies.',
  ],
};
