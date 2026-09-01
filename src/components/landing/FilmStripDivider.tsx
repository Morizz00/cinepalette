// Procedural UI chrome (not scene art) — the perforated curve separating the
// hero from the feature strip below.
export function FilmStripDivider() {
  return (
    <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-16 select-none">
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="h-full w-full"
        aria-hidden="true"
      >
        <path d="M0 40 C 360 90, 1080 0, 1440 45 L1440 90 L0 90 Z" fill="#0a0818" />
        <path
          d="M0 40 C 360 90, 1080 0, 1440 45"
          fill="none"
          stroke="#f0b64c"
          strokeOpacity="0.6"
          strokeWidth="1.5"
        />
        {Array.from({ length: 36 }).map((_, i) => {
          const x = (i / 35) * 1440;
          const y = 40 + Math.sin((i / 35) * Math.PI) * 22 + Math.cos(i) * 3;
          return (
            <rect
              key={i}
              x={x - 4}
              y={y - 4}
              width="8"
              height="8"
              rx="2"
              fill="#0a0818"
              stroke="#f0b64c"
              strokeOpacity="0.5"
            />
          );
        })}
      </svg>
    </div>
  );
}
