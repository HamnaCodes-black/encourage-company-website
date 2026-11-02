import { Clock3, MessageSquareText, ShieldCheck } from 'lucide-react';
import ContactDetails from '@/components/contact/ContactDetails';
import ContactForm from '@/components/contact/ContactForm';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';

const nextSteps = [
  {
    icon: MessageSquareText,
    title: 'Tell us about your need',
    text: 'Share your goals, volumes and timelines using the form.',
  },
  {
    icon: Clock3,
    title: 'We review your brief',
    text: 'A specialist from the right team looks at your request personally.',
  },
  {
    icon: ShieldCheck,
    title: 'Receive a clear proposal',
    text: 'You get a scope, timeline and pricing with no surprises.',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let us discuss what your organisation needs"
        description="Whether you need a one-off data project or a long-term content partner, our team is ready to help."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">What happens next</span>
            <h2 className="heading-lg mt-5">A simple path from enquiry to kick-off</h2>
            <ol className="mt-10 space-y-8">
              {nextSteps.map((step, index) => (
                <li key={step.title} className="group flex gap-5">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-navy-900 text-cyan-300 shadow-lg shadow-navy-900/20 transition-colors duration-300 group-hover:bg-royal-600 group-hover:text-white">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal-600">Step {index + 1}</p>
                    <h3 className="mt-1 text-lg font-bold text-navy-900">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-500">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <ContactDetails />
          </Reveal>

          <Reveal delay={150} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
