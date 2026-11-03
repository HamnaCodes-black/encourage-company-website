import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { services } from '@/data/site';

export default function FeaturedServices() {
  return (
    <section className="relative bg-navy-50/60 py-24 lg:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Featured services"
          title="Focused expertise that removes the operational load"
          description="Four core disciplines, delivered to the same high standard, so your team can focus on the decisions that matter."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 150}>
              <a
                href={`/services/${service.slug}`}
                className="card-surface group flex h-full flex-col overflow-hidden"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} services from Encourage IT Solutions`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" aria-hidden="true" />
                  <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 text-royal-600 shadow-lg transition-transform duration-500 group-hover:-rotate-6">
                    <service.icon className="h-6 w-6" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-600">{service.tagline}</p>
                  <h3 className="mt-3 text-2xl font-extrabold text-navy-900">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-500">{service.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-royal-600">
                    Explore {service.title.toLowerCase()}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
