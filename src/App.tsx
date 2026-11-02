import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';
import { services } from '@/data/site';
import { usePathname } from '@/lib/router';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import ServicesPage from '@/pages/ServicesPage';

function renderPage(path: string) {
  const [, section, slug] = path.split('/');

  if (path === '/') return <HomePage />;
  if (path === '/about') return <AboutPage />;
  if (path === '/contact') return <ContactPage />;
  if (section === 'services') {
    const activeSlug = services.some((service) => service.slug === slug) ? slug : undefined;
    return <ServicesPage activeSlug={activeSlug} />;
  }
  return <NotFoundPage />;
}

export default function App() {
  const path = usePathname();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader path={path} />
      <main className="flex-1">{renderPage(path)}</main>
      <SiteFooter />
    </div>
  );
}
