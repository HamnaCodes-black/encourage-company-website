import { useEffect } from 'react';
import { SITE_NAME, SITE_URL, notFoundSeo, pageSeo } from '@/data/seo';

const SOCIAL_IMAGE = `${SITE_URL}/IT_logo.jpeg`;

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

type PageMetaProps = {
  path: string;
};

export default function PageMeta({ path }: PageMetaProps) {
  useEffect(() => {
    const entry = pageSeo[path];
    const seo = entry ?? notFoundSeo;
    const url = entry ? `${SITE_URL}${path}` : `${SITE_URL}/`;
    const robots = entry ? 'index, follow, max-image-preview:large' : 'noindex, follow';

    document.title = seo.title;
    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'robots', robots);
    upsertCanonical(url);
    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:image', SOCIAL_IMAGE);
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', SOCIAL_IMAGE);
  }, [path]);

  return null;
}
