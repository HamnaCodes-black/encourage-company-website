import { Quote, Star } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { testimonials } from '@/data/site';

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Client testimonials"
          title="Trusted by teams that demand precision"
          description="Hear from the leaders who rely on us to deliver accurate data and compelling content."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 120} className="h-full">
              <figure className="group flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-navy-900/10 sm:p-10">
                <div className="flex items-center justify-between">
                  <Quote className="h-10 w-10 text-cyan-400 transition-transform duration-500 group-hover:-rotate-6" />
                  <div className="flex gap-0.5 text-amber-400" aria-label="Five star rating">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star key={star} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-6 flex-1 text-base leading-relaxed text-navy-700">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-navy-100 pt-6">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-gradient-to-br from-royal-600 to-navy-800 text-sm font-bold text-white">
                    {item.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </span>
                  <div>
                    <p className="font-bold text-navy-900">{item.name}</p>
                    <p className="text-sm text-navy-500">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
