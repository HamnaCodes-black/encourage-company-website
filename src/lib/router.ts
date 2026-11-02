import { useEffect, useState } from 'react';

function currentPath(): string {
  const raw = window.location.hash.replace(/^#/, '') || '/';
  return raw.length > 1 ? raw.replace(/\/$/, '') : raw;
}

export function usePathname(): string {
  const [path, setPath] = useState(currentPath);

  useEffect(() => {
    const handle = () => {
      setPath(currentPath());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', handle);
    return () => window.removeEventListener('hashchange', handle);
  }, []);

  return path;
}
