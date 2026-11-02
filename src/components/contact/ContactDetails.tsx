import { ArrowUpRight, Clock3, MapPin } from 'lucide-react';
import { contactInfo } from '@/data/site';

export default function ContactDetails() {
  return (
    <div className="mt-14 grid gap-8 rounded-3xl border border-navy-100 bg-navy-50/60 p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-navy-900 text-cyan-300">
          <MapPin className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal-600">Office address</p>
          <address className="mt-1.5 not-italic text-sm leading-relaxed text-navy-600">
            {contactInfo.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a
            href={contactInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 inline-flex items-center gap-2 rounded-full border border-royal-200 bg-white px-5 py-2.5 text-sm font-semibold text-royal-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-royal-400 hover:shadow-md"
          >
            Open in Google Maps
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-navy-900 text-cyan-300">
          <Clock3 className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal-600">Office timings</p>
          <dl className="mt-3 divide-y divide-navy-100 text-sm">
            {contactInfo.timings.map((item) => (
              <div key={item.day} className="flex items-center justify-between gap-4 py-2.5">
                <dt className="font-semibold text-navy-800">{item.day}</dt>
                <dd className="text-navy-600">{item.hours}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
