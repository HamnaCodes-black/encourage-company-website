import PageMeta from '@/components/layout/PageMeta';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';
import { services } from '@/data/site';
import { usePathname } from '@/lib/router';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import ServicesPage from '@/pages/ServicesPage';

const serviceRoute = /^\/services\/([^/]+)$/;

function renderPage(path: string) {
  if (path === '/') return <HomePage />;
  if (path === '/about') return <AboutPage />;
  if (path === '/contact') return <ContactPage />;
  if (path === '/services') return <ServicesPage />;

  const slug = path.match(serviceRoute)?.[1];
  if (slug && services.some((service) => service.slug === slug)) {
    return <ServicesPage activeSlug={slug} />;
  }
  return <NotFoundPage />;
}

export default function App() {
  const path = usePathname();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <PageMeta path={path} />
      <SiteHeader path={path} />
      <main className="flex-1">{renderPage(path)}</main>
      <SiteFooter />
    </div>
  );
}
