import Reveal from '@/components/ui/Reveal';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  inverse?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  inverse = false,
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start text-left';

  return (
    <Reveal className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <span className={`eyebrow ${inverse ? 'text-cyan-300' : ''}`}>
        <span className="h-px w-8 bg-current" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        className={`heading-lg ${inverse ? 'text-white' : ''}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed sm:text-lg ${inverse ? 'text-navy-100' : 'text-navy-500'}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
