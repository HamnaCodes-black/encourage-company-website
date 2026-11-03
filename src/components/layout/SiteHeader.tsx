import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/layout/Logo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

type SiteHeaderProps = {
  path: string;
};

export default function SiteHeader({ path }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  const solid = scrolled || menuOpen;
  const isActive = (href: string) => {
    return href === '/' ? path === '/' : path === href || path.startsWith(`${href}/`);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'border-b border-navy-100 bg-white/90 shadow-lg shadow-navy-900/5 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="section-shell flex h-20 items-center justify-between">
        <a href="/" aria-label="Encourage IT Solutions home">
          <Logo tone={solid ? 'dark' : 'light'} />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const color = solid
              ? active
                ? 'text-royal-600'
                : 'text-navy-700 hover:text-royal-600'
              : active
                ? 'text-cyan-300'
                : 'text-white/85 hover:text-white';
            return (
              <a
                key={link.href}
                href={link.href}
                className={`group relative px-4 py-2 text-sm font-semibold transition-colors duration-300 ${color}`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-cyan-400 transition-transform duration-300 ${
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a href="/contact" className="btn-primary !px-5 !py-2.5">
            Start a project
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors md:hidden ${
            solid ? 'text-navy-900 hover:bg-navy-50' : 'text-white hover:bg-white/10'
          }`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`overflow-hidden bg-white transition-all duration-500 md:hidden ${
          menuOpen ? 'max-h-96 border-t border-navy-100' : 'max-h-0'
        }`}
      >
        <nav className="section-shell flex flex-col gap-1 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                isActive(link.href) ? 'bg-royal-50 text-royal-700' : 'text-navy-800 hover:bg-navy-50'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="/contact" className="btn-primary mt-3">
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}
