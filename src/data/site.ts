import {
  BarChart3,
  Database,
  FileCheck2,
  Layers,
  Lightbulb,
  Network,
  PenTool,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  Globe2,
  Handshake,
  Gauge,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  icon: LucideIcon;
  image: string;
  highlights: string[];
  benefits: { title: string; description: string }[];
  process: string[];
};

export const services: Service[] = [
  {
    slug: 'data-entry',
    title: 'Data Entry',
    tagline: 'Accurate, organised and ready to use',
    summary:
      'We turn scattered paperwork, spreadsheets and legacy records into clean, structured information your teams can trust and act on.',
    icon: Database,
    image:
      'https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: [
      'Spreadsheet management',
      'Document digitization',
      'Database updates',
      'Data cleaning',
      'Information organization',
      'Data processing',
    ],
    benefits: [
      {
        title: 'Accuracy you can rely on',
        description: 'Multi-stage quality checks catch errors before they reach your systems.',
      },
      {
        title: 'Organised from day one',
        description: 'Consistent naming, categories and structures make records easy to find.',
      },
      {
        title: 'Faster turnaround',
        description: 'Dedicated operators and clear schedules keep large backlogs moving.',
      },
      {
        title: 'Secure handling',
        description: 'Access controls and confidentiality agreements protect sensitive information.',
      },
    ],
    process: [
      'Scope and sample review',
      'Structured capture and entry',
      'Two-stage quality validation',
      'Delivery and database update',
    ],
  },
  {
    slug: 'article-writing',
    title: 'Article Writing',
    tagline: 'Clear, engaging content that earns trust',
    summary:
      'Our writers produce well-researched articles, blog posts and long-form content that inform readers, support search visibility and reflect your brand voice.',
    icon: PenTool,
    image:
      'https://images.pexels.com/photos/8374287/pexels-photo-8374287.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: [
      'Blog and editorial articles',
      'Long-form thought leadership',
      'SEO-aligned content',
      'Product and technical writing',
      'Editing and proofreading',
      'Content planning',
    ],
    benefits: [
      {
        title: 'Research-led writing',
        description: 'Every article is grounded in credible sources and written for your audience.',
      },
      {
        title: 'Consistent brand voice',
        description: 'We follow your style guide so every piece sounds like it came from you.',
      },
      {
        title: 'Search-ready structure',
        description: 'Headings, metadata and keyword planning help content get discovered.',
      },
      {
        title: 'Editorial calendar support',
        description: 'Predictable delivery schedules keep your publishing on track.',
      },
    ],
    process: [
      'Brief, audience and tone alignment',
      'Research and outline approval',
      'Drafting and internal editing',
      'Final proofing and publication support',
    ],
  },
  {
    slug: 'team-management',
    title: 'Team Management',
    tagline: 'Organised teams that deliver on time',
    summary:
      'We coordinate people, tasks and workflows so projects move forward with clear ownership, steady progress and fewer bottlenecks.',
    icon: Workflow,
    image:
      'https://images.pexels.com/photos/17724731/pexels-photo-17724731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: [
      'Team coordination',
      'Task management',
      'Workflow organization',
      'Project coordination',
      'Team collaboration',
      'Productivity improvement',
      'Efficient business operations management',
    ],
    benefits: [
      {
        title: 'Clear accountability',
        description: 'Every task has an owner, a deadline and a visible status.',
      },
      {
        title: 'Higher productivity',
        description: 'Streamlined routines and regular reviews help teams achieve more with less effort.',
      },
      {
        title: 'Smoother collaboration',
        description: 'Shared priorities and clear communication rhythms keep everyone aligned.',
      },
      {
        title: 'Efficient operations',
        description: 'Day-to-day business processes run in a predictable, well-managed way.',
      },
    ],
    process: [
      'Assess current workflows and roles',
      'Set priorities, tasks and milestones',
      'Coordinate delivery with regular check-ins',
      'Measure progress and refine the workflow',
    ],
  },
  {
    slug: 'networking',
    title: 'Networking',
    tagline: 'Reliable connectivity for your business',
    summary:
      'From initial setup to day-to-day maintenance, we design, configure and look after the networks your business depends on, so your people stay connected.',
    icon: Network,
    image:
      'https://images.pexels.com/photos/6466143/pexels-photo-6466143.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: [
      'Network setup',
      'Network administration',
      'Network configuration',
      'Network troubleshooting',
      'Connectivity solutions',
      'Infrastructure management',
      'Network maintenance',
    ],
    benefits: [
      {
        title: 'Reliable connectivity',
        description: 'Well-configured networks reduce downtime and keep your systems available.',
      },
      {
        title: 'Faster problem resolution',
        description: 'A structured troubleshooting process finds and fixes faults quickly.',
      },
      {
        title: 'Well-managed infrastructure',
        description: 'Properly administered networks are easier to monitor, protect and scale.',
      },
      {
        title: 'Planned maintenance',
        description: 'Routine checks and updates prevent issues before they disrupt your work.',
      },
    ],
    process: [
      'Audit the existing network and business needs',
      'Design and configure the setup',
      'Install, test and document connectivity',
      'Administer, maintain and troubleshoot ongoing',
    ],
  },
];

export const stats = [
  { value: 12, suffix: '+', label: 'Years of delivery', icon: Rocket },
  { value: 480, suffix: '+', label: 'Projects completed', icon: FileCheck2 },
  { value: 35, suffix: '+', label: 'Countries served', icon: Globe2 },
  { value: 98, suffix: '%', label: 'Client retention rate', icon: Handshake },
];

export const whyChooseUs: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Global delivery teams',
    description: 'Round-the-clock capacity across time zones, so work keeps moving while you sleep.',
    icon: Globe2,
  },
  {
    title: 'Quality by design',
    description: 'Layered reviews, measurable accuracy targets and transparent reporting on every engagement.',
    icon: ShieldCheck,
  },
  {
    title: 'Technology-enabled',
    description: 'Modern tools and workflow automation that cut costs without compromising precision.',
    icon: Gauge,
  },
  {
    title: 'Flexible engagement',
    description: 'Scale teams up for peak periods or run a dedicated, long-term operation.',
    icon: Layers,
  },
];

export const processPrinciples = [
  {
    title: 'Mission',
    description:
      'To give businesses reliable, high-quality information services that free their people to focus on growth.',
    icon: Target,
  },
  {
    title: 'Vision',
    description:
      'To be the most trusted service partner for organisations that depend on accurate data and compelling content.',
    icon: Lightbulb,
  },
  {
    title: 'Values',
    description:
      'Integrity in every commitment, precision in every deliverable, and genuine partnership with every client.',
    icon: Sparkles,
  },
];

export const coreValues = [
  { title: 'Integrity', description: 'We say what we will do, do what we say, and report honestly when things change.' },
  { title: 'Precision', description: 'Small details matter. We measure quality and treat every record and sentence with care.' },
  { title: 'Partnership', description: 'We work as an extension of your team, not just a vendor on an invoice.' },
  { title: 'Continuous growth', description: 'We invest in training and tooling so our people and our results keep improving.' },
];

export const goals = [
  { title: 'Expand our global footprint', icon: Globe2 },
  { title: 'Automate repeatable workflows', icon: Gauge },
  { title: 'Deepen long-term client partnerships', icon: Users },
  { title: 'Lead in data quality standards', icon: BarChart3 },
];

export const projects = [
  {
    title: 'Records Digitization Programme',
    client: 'Regional healthcare network',
    result: '1.2M documents digitised in 9 months',
    image:
      'https://images.pexels.com/photos/8102000/pexels-photo-8102000.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Global Content Hub',
    client: 'International SaaS company',
    result: '600+ articles published across 8 languages',
    image:
      'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Financial Data Cleansing',
    client: 'Investment management firm',
    result: 'Duplicate and error rate cut by 96%',
    image:
      'https://images.pexels.com/photos/5833762/pexels-photo-5833762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Customer Database Modernisation',
    client: 'Multinational retail group',
    result: 'Unified 14 legacy systems into one source',
    image:
      'https://images.pexels.com/photos/7433847/pexels-photo-7433847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const testimonials = [
  {
    quote:
      'ENCOURAGE IT DEVELOPMENT PRIVATE-LTD cleaned up years of inconsistent records in a matter of weeks. Our reporting is finally trustworthy.',
    name: 'Sarah Lindqvist',
    role: 'Operations Director',
    company: 'Nordic Logistics Group',
  },
  {
    quote:
      'Their writers understand our voice immediately. The articles read like they came from our own editorial team.',
    name: 'Michael Adeyemi',
    role: 'Head of Marketing',
    company: 'Brightpath Software',
  },
  {
    quote:
      'Responsive, precise and easy to work with. They scaled up for our year-end peak without a single missed deadline.',
    name: 'Chen Wei',
    role: 'Finance Manager',
    company: 'Apex Capital Partners',
  },
];

export const participantReviews = [
  "Today's meeting was nice. It's a good habit of yours to talk about skills, so we can achieve our goals.",
  "Today's meeting was great. You gave us more motivation. I hope to give a perfect interview, insha Allah. I am excited.",
  'It was good, not disappointing. Quite motivational also.',
  'Thank you so much, sir, for the training and the motivation. You explained it very well.',
  'I am satisfied. Finally I found the right platform and the right business.',
  "I liked the meeting and I am excited for tomorrow's interview. Thank you.",
];

export const serviceOptions = services.map((service) => service.title);

export const contactInfo = {
  address: ['Near civic center Bahria town phase 4', 'Islamabad'],
  mapsUrl: 'https://maps.app.goo.gl/1gbaLomaSeTT9GeE9',
  timings: [
    { day: 'Monday', hours: '9:00 to 17:00' },
    { day: 'Tuesday', hours: '9:00 to 17:00' },
    { day: 'Wednesday', hours: '9:00 to 17:00' },
    { day: 'Thursday', hours: '9:00 to 17:00' },
    { day: 'Friday', hours: '9:00 to 12:00' },
    { day: 'Saturday', hours: '9:00 to 17:00' },
  ],
};
