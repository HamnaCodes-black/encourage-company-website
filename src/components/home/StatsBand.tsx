import Reveal from '@/components/ui/Reveal';
import CountUp from '@/components/ui/CountUp';
import { stats } from '@/data/site';

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 text-white lg:py-24">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100} className="h-full">
              <div className="group flex h-full flex-col bg-navy-900/80 p-8 transition-colors duration-500 hover:bg-royal-800/60 sm:p-10">
                <stat.icon className="h-6 w-6 text-cyan-300 transition-transform duration-500 group-hover:scale-110" />
                <p className="mt-8 text-4xl font-extrabold tracking-tight sm:text-5xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-navy-200">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
