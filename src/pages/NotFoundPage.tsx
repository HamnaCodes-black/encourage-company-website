import CallToAction from '@/components/ui/CallToAction';
import PageHero from '@/components/ui/PageHero';

export default function NotFoundPage() {
  return (
    <>
      <PageHero
        eyebrow="Page not found"
        title="We could not find that page"
        description="The link may be out of date. Head back to our homepage or explore our services."
      >
        <div className="flex flex-wrap gap-4">
          <a href="/" className="btn-primary">
            Back to homepage
          </a>
          <a href="/services" className="btn-secondary">
            View services
          </a>
        </div>
      </PageHero>
      <CallToAction
        title="Need help with something else?"
        description="Send us a message and our team will point you in the right direction."
      />
    </>
  );
}
