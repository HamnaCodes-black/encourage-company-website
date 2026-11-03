import { ArrowRight, Award, Layers3, Users } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const pillars = [
  { icon: Award, title: 'Quality first', text: 'Layered reviews on every deliverable.' },
  { icon: Users, title: 'People you know', text: 'A dedicated team that understands your business.' },
  { icon: Layers3, title: 'Built to grow', text: 'Scale capacity up or down with demand.' },
];

export default function IntroSection() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="section-shell grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="eyebrow">Who we are</span>
          <h2 className="heading-lg mt-5">
            A trusted partner for organisations that rely on accurate information.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy-500 sm:text-lg">
            Since our founding, ENCOURAGE IT DEVELOPMENT PRIVATE-LTD has grown from a small data team into an international
            service company. We combine skilled people, proven processes and modern technology to handle
            the work that keeps your business running: records, content and digital operations.
          </p>
          <a href="/about" className="btn-ghost group mt-8">
            Read our story
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 120}>
              <div className="group flex items-start gap-5 rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-navy-900/5 sm:flex-col">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-royal-50 to-cyan-50 text-royal-600 ring-1 ring-royal-100 transition-transform duration-500 group-hover:scale-110">
                  <pillar.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy-900">{pillar.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-500">{pillar.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
