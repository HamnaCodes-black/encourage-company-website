import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

type CallToActionProps = {
  title: string;
  description: string;
};

export default function CallToAction({ title, description }: CallToActionProps) {
  return (
    <section className="section-shell pb-24 lg:pb-32">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-900 via-royal-800 to-royal-600 px-8 py-16 text-center shadow-2xl shadow-navy-900/30 sm:px-16 lg:py-20">
          <div className="absolute inset-0 -z-10 grid-pattern opacity-40" aria-hidden="true" />
          <div className="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" aria-hidden="true" />
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">{description}</p>
          <a
            href="#/contact"
            className="btn-primary group mt-10 !bg-cyan-400 !text-navy-950 !shadow-cyan-400/30 hover:!bg-cyan-300"
          >
            Request a proposal
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
