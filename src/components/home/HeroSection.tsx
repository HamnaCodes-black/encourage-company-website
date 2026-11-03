import { ArrowRight, CheckCircle2, PlayCircle } from 'lucide-react';

const heroImage =
  'https://images.pexels.com/photos/8204363/pexels-photo-8204363.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const trustPoints = ['Multi-stage quality checks', 'Dedicated account managers', 'Confidential by default'];

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 pt-32 text-white lg:min-h-[100svh] lg:pt-0">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-900 to-royal-800"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden="true" />
      <div
        className="absolute -right-32 top-24 -z-10 h-[32rem] w-[32rem] rounded-full bg-royal-500/30 blur-3xl animate-float"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-shell grid items-center gap-16 pb-24 pt-8 lg:grid-cols-12 lg:gap-10 lg:pb-32 lg:pt-32">
        <div className="lg:col-span-7">
          <span className="animate-fade-up inline-flex max-w-full items-center gap-2 rounded-2xl border border-cyan-400/30 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur sm:rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-cyan-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
            </span>
            ENCOURAGE IT DEVELOPMENT PRIVATE-LTD
          </span>

          <h1
            className="animate-fade-up mt-8 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '120ms' }}
          >
            Encourage IT Development <span className="text-cyan-300">Company</span>
          </h1>

          <p
            className="animate-fade-up mt-8 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg"
            style={{ animationDelay: '240ms' }}
          >
            ENCOURAGE IT DEVELOPMENT PRIVATE-LTD helps ambitious organisations run smarter with accurate data services,
            professional article writing and dependable technology support, delivered by a global team that
            treats your work as its own.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: '360ms' }}
          >
            <a href="/contact" className="btn-primary group !bg-cyan-400 !text-navy-950 !shadow-cyan-400/30 hover:!bg-cyan-300">
              Start your project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="/services" className="btn-secondary group">
              <PlayCircle className="h-5 w-5 text-cyan-300" />
              Explore services
            </a>
          </div>

          <ul
            className="animate-fade-up mt-12 grid gap-3 text-sm text-navy-100 sm:grid-cols-3"
            style={{ animationDelay: '480ms' }}
          >
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 flex-none text-cyan-300" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-5">
          <div className="animate-fade-up relative mx-auto max-w-md overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-black/40 ring-1 ring-white/10" style={{ animationDelay: '300ms' }}>
            <img
              src={heroImage}
              alt="Professional team collaborating around a table with laptops and documents"
              className="h-[26rem] w-full object-cover transition-transform duration-[1500ms] hover:scale-105 sm:h-[30rem]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-navy-950/70 p-4 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Live delivery</p>
                  <p className="mt-1 text-sm font-semibold text-white">Quality score this month</p>
                </div>
                <span className="text-2xl font-extrabold text-white">99.6%</span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[99.6%] rounded-full bg-gradient-to-r from-royal-400 to-cyan-300" />
              </div>
            </div>
          </div>

          <div className="animate-float absolute -left-4 top-10 hidden rounded-2xl border border-white/15 bg-white/95 px-5 py-4 text-navy-900 shadow-xl sm:block">
            <p className="text-2xl font-extrabold text-royal-700">480+</p>
            <p className="text-xs font-semibold text-navy-500">Projects delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
}
