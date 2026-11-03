import { useEffect, useState } from 'react';

const LEGACY_HASH_PREFIX = '#/';

function normalisePath(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
}

function currentPath(): string {
  return normalisePath(window.location.pathname || '/');
}

function readInitialPath(): string {
  if (window.location.hash.startsWith(LEGACY_HASH_PREFIX)) {
    window.history.replaceState(null, '', window.location.hash.slice(1));
  }
  return currentPath();
}

function findInternalLink(event: MouseEvent): HTMLAnchorElement | null {
  if (event.defaultPrevented || event.button !== 0) return null;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return null;
  const anchor = (event.target as Element | null)?.closest?.('a');
  if (!anchor || anchor.target || anchor.hasAttribute('download')) return null;
  const href = anchor.getAttribute('href') ?? '';
  return href.startsWith('/') && !href.startsWith('//') ? anchor : null;
}

export function usePathname(): string {
  const [path, setPath] = useState(readInitialPath);

  useEffect(() => {
    const syncPath = () => {
      setPath(currentPath());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    const handleClick = (event: MouseEvent) => {
      const anchor = findInternalLink(event);
      if (!anchor) return;
      event.preventDefault();
      const target = anchor.getAttribute('href') ?? '/';
      if (target !== window.location.pathname) window.history.pushState(null, '', target);
      syncPath();
    };

    window.addEventListener('popstate', syncPath);
    document.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('popstate', syncPath);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return path;
}
