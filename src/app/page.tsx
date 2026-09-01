import {
  Dancers,
  LampPost,
  SkyBackground,
  TreeSilhouette,
} from "@/components/landing/HeroVisuals";
import { FilmStripDivider } from "@/components/landing/FilmStripDivider";

const NAV_LINKS = ["Movies", "TV Shows", "Directors", "Palettes", "About"];
const TRENDING = ["Interstellar", "Breaking Bad", "Spirited Away", "The Batman", "Euphoria"];

const FEATURES = [
  {
    title: "Iconic Palettes",
    description: "From timeless classics to modern masterpieces.",
    icon: <ClapperboardIcon />,
  },
  {
    title: "Scene Breakdown",
    description: "Explore colors from iconic scenes and moments.",
    icon: <PaletteIcon />,
  },
  {
    title: "Emotion in Color",
    description: "See how colors tell stories, evoke feelings, and create magic.",
    icon: <HeartIcon />,
  },
  {
    title: "Design Ready",
    description: "Export palettes in HEX, RGB, ASE & more.",
    icon: <DownloadIcon />,
  },
];

export default function Home() {
  return (
    <div className="flex-1 bg-cp-night font-sans">
      <section className="relative min-h-screen overflow-hidden bg-cp-indigo">
        <SkyBackground />
        <TreeSilhouette />
        <LampPost />
        <Dancers />

        <Header />
        <HeroContent />
        <ScrollDots />

        <FilmStripDivider />
      </section>

      <FeatureStrip />
    </div>
  );
}

function Header() {
  return (
    <header className="animate-fade-in-down relative z-20 flex items-center justify-between gap-6 px-6 pt-8 sm:px-10 lg:px-14">
      <div className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
        <div className="flex items-center gap-1.5 font-display text-2xl tracking-wide text-cp-cream">
          CINEPALETTE
          <SparkleIcon className="h-4 w-4 text-cp-gold" />
        </div>
        <p className="mt-0.5 text-[11px] tracking-wide text-cp-cream/70">
          Discover the colors that tell a story.
        </p>
      </div>

      <nav className="hidden items-center gap-9 text-xs font-medium tracking-[0.15em] text-cp-cream/85 lg:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="uppercase transition-colors hover:text-cp-gold"
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3 text-xs tracking-widest text-cp-cream/85">
        <MusicNoteIcon className="hidden h-4 w-4 text-cp-cream/70 sm:block" />
        <span className="hidden uppercase sm:inline">La La Land</span>
        <span className="flex h-5 w-9 items-center rounded-full bg-cp-gold/90 p-0.5">
          <span className="h-4 w-4 rounded-full bg-cp-night" />
        </span>
      </div>
    </header>
  );
}

function HeroContent() {
  return (
    <div
      className="animate-fade-in-up pointer-events-none relative z-20 flex flex-col items-center px-6 pt-32 text-center sm:pt-40"
      style={{ animationDelay: "150ms" }}
    >
      <h1 className="font-display text-5xl leading-[1.08] tracking-wide text-cp-cream sm:text-6xl md:text-7xl">
        Every Film
        <br />
        <span className="relative inline-block text-cp-gold-light italic">
          Has a Color.
          <SparkleIcon className="absolute -top-3 -right-8 h-6 w-6 text-cp-gold sm:h-7 sm:w-7" />
        </span>
      </h1>

      <div className="mt-8 flex items-center gap-3 text-cp-gold/70">
        <span className="h-px w-14 bg-cp-gold/40" />
        <SparkleIcon className="h-3 w-3" />
        <span className="h-px w-14 bg-cp-gold/40" />
      </div>

      <p className="mt-6 text-xs font-medium tracking-[0.25em] text-cp-gold-light/90 sm:text-sm">
        EXPLORE ICONIC PALETTES FROM MOVIES &amp; TV SHOWS
      </p>

      <form className="pointer-events-auto mt-8 flex w-full max-w-xl items-center gap-3 rounded-full border border-cp-cream/15 bg-cp-purple/25 py-2 pr-2 pl-6 backdrop-blur-sm">
        <SearchIcon className="h-4 w-4 shrink-0 text-cp-cream/60" />
        <input
          type="text"
          placeholder="Search a movie or TV show..."
          className="w-full bg-transparent text-sm text-cp-cream placeholder:text-cp-cream/50 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Search"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cp-gold text-cp-night transition-transform hover:scale-105"
        >
          <ArrowIcon className="h-4 w-4" />
        </button>
      </form>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-cp-cream/70">
        <span className="font-semibold tracking-[0.15em] text-cp-cream/50">
          TRENDING:
        </span>
        {TRENDING.map((item, i) => (
          <span key={item} className="flex items-center gap-2">
            {item}
            {i < TRENDING.length - 1 && (
              <span className="text-cp-gold/60">&bull;</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

function ScrollDots() {
  return (
    <div
      className="animate-fade-in absolute top-1/2 right-6 z-20 hidden -translate-y-1/2 flex-col items-center gap-3.5 sm:right-10 md:flex"
      style={{ animationDelay: "900ms" }}
    >
      {[true, false, false, false, false].map((active, i) => (
        <span
          key={i}
          className={
            active
              ? "h-2 w-2 rounded-full bg-cp-gold"
              : "h-1.5 w-1.5 rounded-full border border-cp-cream/50"
          }
        />
      ))}
    </div>
  );
}

function FeatureStrip() {
  return (
    <div className="relative border-t border-cp-cream/10 bg-cp-night px-6 py-12 sm:px-10 lg:px-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
        <blockquote className="flex items-start gap-3 lg:w-64 lg:shrink-0">
          <span className="font-display text-4xl leading-none text-cp-gold">
            &ldquo;
          </span>
          <div>
            <p className="font-display text-lg leading-tight text-cp-cream">
              Here&rsquo;s to the fools
              <br /> who dream.
            </p>
            <cite className="mt-2 block text-[11px] tracking-[0.2em] text-cp-cream/50 not-italic">
              — LA LA LAND
            </cite>
          </div>
        </blockquote>

        <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-cp-cream/10">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex items-start gap-3 lg:pl-8">
              <span className="mt-0.5 text-cp-gold">{feature.icon}</span>
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-cp-cream">
                  {feature.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-cp-cream/55">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-2 text-[11px] tracking-[0.2em] text-cp-gold/70">
        <CheckIcon className="h-3.5 w-3.5" />
        SCROLL TO EXPLORE
      </div>
    </div>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0c.7 4.6 2.4 7.6 5 9.5 2.6 1.9 5 2 5 2.5s-2.4.6-5 2.5c-2.6 1.9-4.3 4.9-5 9.5-.7-4.6-2.4-7.6-5-9.5C4.4 12.6 2 12.5 2 12s2.4-.6 5-2.5C9.6 7.6 11.3 4.6 12 0z" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function MusicNoteIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function ClapperboardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M4 8.5 19.5 5 20.5 9 5 12.5Z" />
      <rect x="3.5" y="10" width="17" height="10" rx="1" />
      <path d="m7 8 2-3M12 7l2-3M17 6l1.5-2.5" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M12 3a9 8 0 1 0 0 16c1.1 0 1.5-.7 1.5-1.4 0-.4-.2-.7-.4-1a1.5 1.5 0 0 1 1.2-2.4H16a4 4 0 0 0 4-4c0-4-3.6-7.2-8-7.2Z" />
      <circle cx="7.5" cy="10.5" r="1" fill="currentColor" />
      <circle cx="10.5" cy="7.5" r="1" fill="currentColor" />
      <circle cx="14.5" cy="7.5" r="1" fill="currentColor" />
      <circle cx="17" cy="10.5" r="1" fill="currentColor" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M12 20s-7-4.4-9.5-9C.7 7.4 2.7 4 6 4c2 0 3.3 1 4 2 .7-1 2-2 4-2 3.3 0 5.3 3.4 3.5 7-2.5 4.6-9.5 9-9.5 9Z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
      <path d="M4 18v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
