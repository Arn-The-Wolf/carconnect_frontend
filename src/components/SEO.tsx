import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  canonicalPath?: string;
}

const SEO = ({ title, canonicalPath }: SEOProps) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (canonicalPath) {
      const href = `${window.location.origin}${canonicalPath}`;
      let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    }
  }, [title, canonicalPath]);
  return null;
};

export default SEO;


