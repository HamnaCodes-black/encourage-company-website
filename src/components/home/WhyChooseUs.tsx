import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { whyChooseUs } from '@/data/site';

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-100/70 blur-3xl" aria-hidden="true" />
      <div className="section-shell relative">
        <SectionHeader
          eyebrow="Why choose us"
          title="The difference is in how we work"
          description="Global reach, measurable quality and a partnership approach that keeps clients coming back."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-navy-100 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-royal-200 hover:shadow-xl hover:shadow-royal-600/10">
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-royal-500 to-cyan-400 transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-cyan-300 transition-colors duration-500 group-hover:bg-royal-600 group-hover:text-white">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-lg font-bold text-navy-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-500">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
