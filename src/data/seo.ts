export const SITE_URL = 'https://encourage-it-company-website.netlify.app';
export const SITE_NAME = 'Encourage IT Solutions';

export type PageSeo = {
  title: string;
  description: string;
};

export const pageSeo: Record<string, PageSeo | undefined> = {
  '/': {
    title: 'Encourage IT Solutions | Technology and Business Services',
    description:
      'Encourage IT Solutions provides data entry, article writing, team management and networking services for organisations worldwide. Accurate, secure and on time.',
  },
  '/about': {
    title: 'About Encourage IT Solutions | Data and Technology Specialists',
    description:
      'Learn how Encourage IT Solutions grew from a focused data team into a global partner for data entry, content writing and IT services.',
  },
  '/services': {
    title: 'Data Entry, Article Writing and IT Services | Encourage IT Solutions',
    description:
      'Explore our data entry, article writing, team management and networking services. Specialist teams, layered quality checks and clear reporting.',
  },
  '/services/data-entry': {
    title: 'Data Entry Services | Encourage IT Solutions',
    description:
      'Accurate data entry, spreadsheet management, document digitization and data cleaning, with multi-stage quality checks on every project.',
  },
  '/services/article-writing': {
    title: 'Article Writing Services | Encourage IT Solutions',
    description:
      'Researched articles, blog posts and long-form content written in your brand voice and planned around your publishing schedule.',
  },
  '/services/team-management': {
    title: 'Team Management Services | Encourage IT Solutions',
    description:
      'Team coordination, task management and workflow organisation with clear ownership, steady progress and fewer bottlenecks.',
  },
  '/services/networking': {
    title: 'Networking and IT Services | Encourage IT Solutions',
    description:
      'Network setup, administration, troubleshooting and maintenance that keep your business connected and your infrastructure reliable.',
  },
  '/contact': {
    title: 'Contact Encourage IT Solutions | Start Your Data or IT Project',
    description:
      'Tell us about your data, content or IT needs. We review every brief personally and send a clear proposal with scope, timeline and pricing.',
  },
};

export const notFoundSeo: PageSeo = {
  title: 'Page Not Found | Encourage IT Solutions',
  description: 'The page you are looking for could not be found. Return to the Encourage IT Solutions homepage or explore our services.',
};
