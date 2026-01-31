import * as React from "react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

export function HeroSlideshow({
  images,
  intervalMs = 15000,
  className,
  children,
}: {
  images: Array<{ src: string; alt: string }>;
  intervalMs?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    if (images.length <= 1) return;
    if (prefersReducedMotion) return;
    const id = window.setInterval(() => {
      setActive((v) => (v + 1) % images.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [images.length, intervalMs, prefersReducedMotion]);

  return (
    <section className={className}>
      <div className="relative overflow-hidden">
        {/* Background slideshow */}
        <div aria-hidden className="absolute inset-0">
          {images.map((img, idx) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 " +
                (idx === active ? "opacity-100" : "opacity-0")
              }
              loading={idx === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          ))}
        </div>

        {/* Foreground content */}
        <div className="relative">{children}</div>
      </div>
    </section>
  );
}
