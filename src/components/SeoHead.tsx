
import React from "react";

/**
 * SeoHead inserts page-level SEO meta tags, Open Graph/Twitter cards, and JSON-LD structured data.
 */
interface SeoHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  canonical?: string;
  structuredData?: object; // JSON-LD object
}
const DEFAULT_IMAGE = "https://lovable.dev/opengraph-image-p98pqg.png";
const DEFAULT_TYPE = "website";

const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  keywords,
  image = DEFAULT_IMAGE,
  url = "https://kovelorlabs.com/",
  type = DEFAULT_TYPE,
  canonical,
  structuredData,
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Kovelor Labs" />
      {canonical && <link rel="canonical" href={canonical} />}
      {/* Open Graph & Twitter */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@kovelor_labs" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* JSON-LD Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </>
  );
};

export default SeoHead;
