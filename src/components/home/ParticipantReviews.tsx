import { Quote } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { participantReviews } from '@/data/site';
import reviewScreenshotOne from '@/components/home/WhatsApp_Image_2026-11-02_at_2.51.27_PM.jpeg';
import reviewScreenshotTwo from '@/components/home/WhatsApp_Image_2026-11-02_at_2.51.28_PM_(1).jpeg';
import reviewScreenshotThree from '@/components/home/WhatsApp_Image_2026-11-02_at_2.51.28_PM.jpeg';

const screenshots = [reviewScreenshotOne, reviewScreenshotTwo, reviewScreenshotThree];

export default function ParticipantReviews() {
  return (
    <section className="relative overflow-hidden bg-navy-50/60 py-24 lg:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Client/Participants Reviews"
          title="Feedback from the people we serve"
          description="Honest words from clients and participants about their experience with us."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {participantReviews.map((review, index) => (
            <Reveal key={review} delay={(index % 3) * 120} className="h-full">
              <figure className="group flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-navy-900/10">
                <Quote className="h-8 w-8 text-cyan-400 transition-transform duration-500 group-hover:-rotate-6" />
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-navy-700">
                  &ldquo;{review}&rdquo;
                </blockquote>
                <figcaption className="mt-8 border-t border-navy-100 pt-5 text-xs font-bold uppercase tracking-[0.18em] text-royal-600">
                  Participant review
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {screenshots.map((src, index) => (
            <Reveal key={src} delay={index * 120}>
              <a
                href={src}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10"
              >
                <img
                  src={src}
                  alt={`Participant feedback screenshot ${index + 1}`}
                  loading="lazy"
                  className="h-auto w-full transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
