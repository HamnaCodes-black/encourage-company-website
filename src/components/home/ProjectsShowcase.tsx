import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { projects } from '@/data/site';

export default function ProjectsShowcase() {
  return (
    <section className="relative bg-navy-50/60 py-24 lg:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Featured projects"
          title="Results our clients talk about"
          description="A selection of recent engagements across data, content and digital operations."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <article className="card-surface group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy-950/0 transition-colors duration-500 group-hover:bg-navy-950/30" aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-600">{project.client}</p>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-navy-900">{project.title}</h3>
                  <p className="mt-auto pt-5 text-sm font-semibold text-royal-700">{project.result}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
