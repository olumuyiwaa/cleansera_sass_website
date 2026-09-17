"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before cleaning",
  afterAlt = "After cleaning",
}) {
  const [pct, setPct] = useState(55);
  const trackRef = useRef(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.min(96, Math.max(4, raw)));
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e) => {
    if (dragging.current) updateFromClientX(e.clientX);
  };

  const stopDragging = () => {
    dragging.current = false;
  };

  const trackWidth = trackRef.current?.offsetWidth ?? 800;

  return (
    <div
      ref={trackRef}
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-lg border border-stone-200 shadow-[0_24px_60px_rgba(22,35,28,0.12)]"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
    >
      {/* After (full) */}
      <div className="absolute inset-0">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
      </div>

      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pct}%` }}>
        <div className="relative h-full" style={{ width: trackWidth }}>
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
            priority
          />
        </div>
      </div>

      <span className="absolute left-3 top-3 rounded-sm bg-ink/80 px-2 py-1 text-xs font-medium text-paper">
        Before
      </span>
      <span className="absolute right-3 top-3 rounded-sm bg-sage-700/85 px-2 py-1 text-xs font-medium text-paper">
        After
      </span>

      <div className="absolute top-0 bottom-0 w-0.5 bg-paper" style={{ left: `${pct}%` }}>
        <div className="absolute top-1/2 left-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper shadow-md cursor-ew-resize">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M5 3 1 8l4 5M11 3l4 5-4 5"
              stroke="#16231C"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}