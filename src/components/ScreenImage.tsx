"use client";

const PLACEHOLDER = "/illustrations/screen-placeholder.svg";

export default function ScreenImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src || PLACEHOLDER}
      alt={alt}
      className={className}
      onError={(e) => {
        const img = e.currentTarget;
        if (img.src !== window.location.origin + PLACEHOLDER) {
          img.src = PLACEHOLDER;
        }
      }}
    />
  );
}
