import { Compass, Eye, HeartHandshake } from 'lucide-react';
import CallToAction from '@/components/ui/CallToAction';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import { coreValues, goals, processPrinciples } from '@/data/site';

const storyImage =
  'https://images.pexels.com/photos/7433840/pexels-photo-7433840.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const approachSteps = [
  {
    step: '01',
    title: 'Discover',
    text: 'We learn your processes, volumes, quality expectations and the outcome you need.',
  },
  {
    step: '02',
    title: 'Design',
    text: 'We map a workflow, set accuracy targets and agree on reporting before work begins.',
  },
  {
    step: '03',
    title: 'Deliver',
    text: 'A dedicated team executes with layered quality checks and transparent progress updates.',
  },
  {
    step: '04',
    title: 'Improve',
    text: 'We review results together and refine the process so efficiency keeps compounding.',
  },
];

const pillarIcons = [Compass, Eye, HeartHandshake];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Building reliable information services for a connected world"
        description="We are an international team of data specialists, writers and technologists who help organisations work with confidence."
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="section-shell grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src={storyImage}
                alt="Business professionals reviewing documents together in a meeting room"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl shadow-navy-900/15 sm:aspect-[5/4]"
              />
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-navy-900 p-6 text-white shadow-xl sm:block">
                <p className="text-3xl font-extrabold text-cyan-300">12+</p>
                <p className="mt-1 text-sm text-navy-200">Years of trusted delivery</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <span className="eyebrow">Our story</span>
            <h2 className="heading-lg mt-5">From a focused data team to a global service partner</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-navy-500">
              <p>
                ENCOURAGE IT DEVELOPMENT PRIVATE-LTD began with a simple belief: accurate information and clear communication
                should be within reach of every organisation, not only the largest ones. We started by
                supporting businesses with data entry and records management.
              </p>
              <p>
                As client needs grew, so did our capabilities. We added article writing, data cleaning and
                digital operations, always with the same discipline around quality. Today our teams work across
                time zones, supported by modern tools and processes that keep every project transparent.
              </p>
              <p>
                We still measure success the same way we did on day one: whether our clients can trust the work
                and get back to what they do best.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-50/60 py-24 lg:py-32">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Mission, vision and values"
            title="The principles that guide every decision"
            description="Clear purpose gives our people direction and our clients confidence."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {processPrinciples.map((item, index) => {
              const Icon = pillarIcons[index];
              return (
                <Reveal key={item.title} delay={index * 120} className="h-full">
                  <div className="group h-full rounded-3xl border border-navy-100 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10 sm:p-10">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-royal-600 to-navy-800 text-white shadow-lg shadow-royal-600/25 transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-8 text-2xl font-extrabold text-navy-900">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-navy-500">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 80} className="h-full">
                <div className="h-full rounded-2xl border border-white bg-white/70 p-6 backdrop-blur transition-colors duration-300 hover:border-cyan-200">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal-600">0{index + 1}</p>
                  <h4 className="mt-3 text-lg font-bold text-navy-900">{value.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="section-shell grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              align="left"
              eyebrow="Company goals"
              title="Where we are heading next"
              description="Our goals focus on the outcomes our clients care about most."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {goals.map((goal, index) => (
              <Reveal key={goal.title} delay={index * 100}>
                <div className="group flex items-center gap-5 rounded-2xl border border-navy-100 p-6 transition-all duration-300 hover:border-royal-200 hover:bg-royal-50/50">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-navy-900 text-cyan-300 transition-colors duration-300 group-hover:bg-royal-600 group-hover:text-white">
                    <goal.icon className="h-5 w-5" />
                  </span>
                  <p className="font-semibold text-navy-900">{goal.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-900 py-24 text-white lg:py-32">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="section-shell relative">
          <SectionHeader
            inverse
            eyebrow="Our professional approach"
            title="Four steps from first conversation to lasting results"
            description="A structured method keeps every engagement predictable, measurable and easy to manage."
          />
          <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((item, index) => (
              <Reveal key={item.step} delay={index * 120} className="h-full">
                <li className="group relative h-full rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10">
                  <span className="text-5xl font-extrabold text-cyan-400/40 transition-colors duration-500 group-hover:text-cyan-300">
                    {item.step}
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-200">{item.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <WhyChooseUs />

      <CallToAction
        title="Let us show you what a true partnership looks like"
        description="Share your goals and we will explain how we would approach them."
      />
    </>
  );
}
