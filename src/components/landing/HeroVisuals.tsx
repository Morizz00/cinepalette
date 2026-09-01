"use client";

// Hero decoration layer. Art is supplied as transparent PNGs dropped into
// public/hero/ — this file only owns layout, layering, and interactivity
// (the lamp click toggle), never pixels.

import { useState } from "react";
import Image from "next/image";

/**
 * Full-bleed sky/skyline artwork behind everything else in the hero —
 * includes the overlook railing baked in.
 * Anchored object-bottom (not center) so the ground/railing line stays
 * pinned to the viewport's bottom edge across aspect ratios, matching where
 * Dancers/LampPost are anchored — otherwise their feet would drift off the
 * railing line as the crop shifts on different screen sizes.
 */
export function SkyBackground() {
  return (
    <Image
      src="/hero/sky-background.png"
      alt=""
      fill
      priority
      draggable={false}
      className="animate-fade-in pointer-events-none object-cover object-bottom"
    />
  );
}

/**
 * Overhanging tree branch, top-left corner.
 * Expected file: public/hero/tree.png — a feathered corner-vignette insert
 * (not a hard-edged cutout) since the source photo has no clean line between
 * the leaf-gap sky and true background at that resolution/lighting.
 */
export function TreeSilhouette() {
  return (
    <div
      className="animate-fade-in-down pointer-events-none absolute -top-8 -left-8 aspect-1303/668 w-[clamp(220px,34vw,620px)] select-none"
      style={{ animationDelay: "200ms" }}
    >
      <Image
        src="/hero/tree.png"
        alt=""
        fill
        draggable={false}
        className="object-contain object-top-left"
      />
    </div>
  );
}

/**
 * The dancing couple, bottom-left.
 * Expected file: public/hero/dancers.png (transparent PNG).
 */
export function Dancers() {
  return (
    <div
      className="animate-fade-in-up pointer-events-none absolute bottom-0 left-[4%] aspect-1084/915 w-[clamp(180px,26vw,460px)] select-none sm:left-[8%]"
      style={{ animationDelay: "550ms" }}
    >
      <Image
        src="/hero/dancers.png"
        alt=""
        fill
        draggable={false}
        className="object-contain object-bottom"
      />
    </div>
  );
}

/**
 * Clickable lamp post. Toggles between two art states.
 * Expected files: public/hero/lamp-on.png and public/hero/lamp-off.png —
 * same crop/dimensions/post alignment in both so the crossfade doesn't jump.
 */
export function LampPost() {
  const [lit, setLit] = useState(true);

  return (
    <button
      type="button"
      onClick={() => setLit((v) => !v)}
      aria-label={lit ? "Turn lamp off" : "Turn lamp on"}
      aria-pressed={lit}
      className="group animate-fade-in-up absolute right-[7%] bottom-0 hidden aspect-170/837 w-[clamp(56px,8vw,140px)] cursor-pointer appearance-none border-0 bg-transparent p-0 select-none sm:block"
      style={{ animationDelay: "400ms" }}
    >
      {/* ambient light spill — code-driven, layers under the art */}
      <div
        className={`absolute top-4 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-cp-gold-light/40 blur-3xl transition-opacity duration-300 ${
          lit ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute top-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-cp-gold-light/70 blur-2xl transition-opacity duration-300 ${
          lit ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative h-full w-full transition-transform duration-150 group-active:scale-95">
        <Image
          src="/hero/lamp-off.png"
          alt=""
          fill
          draggable={false}
          className="object-contain object-bottom"
        />
        <Image
          src="/hero/lamp-on.png"
          alt=""
          fill
          draggable={false}
          className={`object-contain object-bottom transition-opacity duration-300 ${
            lit ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </button>
  );
}
