import { ArrowUpRight, Globe2, Mail, MapPin, Phone } from 'lucide-react';
import Logo from '@/components/layout/Logo';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '#/about' },
      { label: 'Our mission', href: '#/about' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Data entry', href: '#/services/data-entry' },
      { label: 'Article writing', href: '#/services/article-writing' },
      { label: 'Team management', href: '#/services/team-management' },
      { label: 'Networking', href: '#/services/networking' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact us', href: '#/contact' },
      { label: 'Start a project', href: '#/contact' },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-200">
      <div
        className="pointer-events-none absolute inset-0 grid-pattern opacity-40"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-royal-600/20 blur-3xl" aria-hidden="true" />

      <div className="section-shell relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-300">
              Trusted data, content and technology services for organisations across the world. Accuracy,
              speed and partnership in every engagement.
            </p>
            <a
              href="#/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-white"
            >
              Talk to our team
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5 lg:col-start-6">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-navy-300 transition-colors duration-200 hover:text-cyan-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-12">
            <ul className="grid gap-4 border-y border-white/10 py-6 text-sm text-navy-300 sm:grid-cols-3">
              <li className="flex items-center gap-3">
                <Globe2 className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                Serving clients in 35+ countries
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                Confidential handling of your data
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                Support across all time zones
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-navy-400 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} ENCOURAGE IT DEVELOPMENT PRIVATE-LTD. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Delivering globally, managed with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
