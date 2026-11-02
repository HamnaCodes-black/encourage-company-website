type LogoProps = {
  tone?: 'light' | 'dark';
};

export default function Logo({ tone = 'dark' }: LogoProps) {
  const nameColor = tone === 'light' ? 'text-white' : 'text-navy-900';
  const subColor = tone === 'light' ? 'text-cyan-300' : 'text-royal-600';

  return (
    <span className="flex items-center gap-3">
      <img
        src="/IT_logo.jpeg"
        alt="ENCOURAGE IT DEVELOPMENT PRIVATE-LTD logo"
        className="h-11 w-11 flex-none rounded-xl object-cover shadow-lg shadow-navy-900/20 ring-1 ring-white/30 sm:h-12 sm:w-12"
      />
      <span className="flex flex-col leading-tight">
        <span className={`text-base font-extrabold tracking-tight sm:text-lg ${nameColor}`}>ENCOURAGE</span>
        <span className={`text-[10px] font-semibold tracking-wide sm:text-xs ${subColor}`}>IT DEVELOPMENT PRIVATE-LTD</span>
      </span>
    </span>
  );
}
