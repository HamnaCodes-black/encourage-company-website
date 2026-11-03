import { CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import type { Service } from '@/data/site';

type ServiceDetailProps = {
  service: Service;
  reversed?: boolean;
};

export default function ServiceDetail({ service, reversed = false }: ServiceDetailProps) {
  return (
    <section
      id={service.slug}
      className={`scroll-mt-24 py-20 lg:py-28 ${reversed ? 'bg-navy-50/60' : 'bg-white'}`}
    >
      <div className="section-shell grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal className={reversed ? 'lg:order-2' : ''}>
          <div className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/15">
            <img
              src={service.image}
              alt={`${service.title} service: ${service.tagline}`}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" aria-hidden="true" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-royal-600 shadow-lg">
                <service.icon className="h-7 w-7" />
              </span>
              <p className="text-sm font-semibold text-white">{service.tagline}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className={reversed ? 'lg:order-1' : ''}>
          <span className="eyebrow">Service</span>
          <h2 className="heading-lg mt-5">{service.title}</h2>
          <p className="mt-6 text-base leading-relaxed text-navy-500 sm:text-lg">{service.summary}</p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {service.highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm font-semibold text-navy-800 transition-colors duration-300 hover:border-cyan-200"
              >
                <CheckCircle2 className="h-4 w-4 flex-none text-cyan-500" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-royal-600">Key benefits</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:ring-cyan-200"
                >
                  <p className="font-bold text-navy-900">{benefit.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-royal-600">How we deliver</h3>
            <ol className="mt-5 space-y-3">
              {service.process.map((step, index) => (
                <li key={step} className="flex items-center gap-4 text-sm font-medium text-navy-700">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-royal-600 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <a href="/contact" className="btn-primary mt-12">
            Discuss {service.title.toLowerCase()}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
