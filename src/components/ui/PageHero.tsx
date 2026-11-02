import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 pb-20 pt-36 text-white lg:pb-28 lg:pt-44">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-900 to-royal-800" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" aria-hidden="true" />
      <div className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-royal-500/30 blur-3xl" aria-hidden="true" />

      <div className="section-shell">
        <span className="animate-fade-up eyebrow !text-cyan-300">
          <span className="h-px w-8 bg-current" aria-hidden="true" />
          {eyebrow}
        </span>
        <h1
          className="animate-fade-up mt-6 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          style={{ animationDelay: '120ms' }}
        >
          {title}
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-navy-100 sm:text-lg"
          style={{ animationDelay: '240ms' }}
        >
          {description}
        </p>
        {children && (
          <div className="animate-fade-up mt-10" style={{ animationDelay: '360ms' }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
