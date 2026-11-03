import { useEffect } from 'react';
import CallToAction from '@/components/ui/CallToAction';
import PageHero from '@/components/ui/PageHero';
import ServiceDetail from '@/components/services/ServiceDetail';
import { services } from '@/data/site';

type ServicesPageProps = {
  activeSlug?: string;
};

export default function ServicesPage({ activeSlug }: ServicesPageProps) {
  useEffect(() => {
    if (!activeSlug) return;
    document.getElementById(activeSlug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [activeSlug]);

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Specialist services that keep your operations accurate and moving"
        description="Choose the discipline you need or combine them. Every service is delivered by trained specialists under the same quality standards."
      >
        <div className="flex flex-wrap gap-3">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`/services/${service.slug}`}
              className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-white/15"
            >
              {service.title}
            </a>
          ))}
        </div>
      </PageHero>

      {services.map((service, index) => (
        <ServiceDetail key={service.slug} service={service} reversed={index % 2 === 1} />
      ))}

      <CallToAction
        title="Not sure which service fits your needs?"
        description="Describe the challenge and our team will recommend the right mix of services and a clear plan."
      />
    </>
  );
}
