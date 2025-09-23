import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
}

const SEO = ({ title, description, canonicalPath, ogImage }: SEOProps) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      let meta = document.querySelector("meta[name='description']") as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
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
    const setOg = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property='${property}']`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    if (title) setOg('og:title', title);
    if (description) setOg('og:description', description);
    if (canonicalPath) setOg('og:url', `${window.location.origin}${canonicalPath}`);
    if (ogImage) setOg('og:image', ogImage);
  }, [title, description, canonicalPath, ogImage]);
  return null;
};

export default SEO;


