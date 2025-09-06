// components/GradientText.tsx
"use client";

import React, { useId } from "react";

type Props = {
  text: string;
  fromColor?: string;
  viaColor?: string;
  toColor?: string;
  isMobile?: boolean;
  fontSizeMobile?: number;
  fontSizeDesktop?: number;
  className?: string;
};

export default function GradientText({
  text,
  fromColor = "#ec4899",
  viaColor = "#8b5cf6",
  toColor = "#3b82f6",
  isMobile = false,
}: Props) {
  const id = useId();
  const gradId = `grad-${id}`;
  const maskId = `mask-${id}`;

  const fontSize = isMobile ? 200 : 300;
  const viewBoxHeight = Math.round(fontSize * 1.4);
  const y = Math.round(viewBoxHeight * 0.7); // tweak baseline

  // ✅ Alignment logic
  const x = isMobile ? "50%" : "0";
  const textAnchor = isMobile ? "middle" : "start";

  return (
    <div className="max-w-full mt-20 sm:mt-12">
      <svg
        width="100%"
        viewBox={`0 0 1200 ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={text}
      >
        <defs>
          <linearGradient
            id={gradId}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="30%" stopColor={viaColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>

          <mask id={maskId} maskUnits="userSpaceOnUse">
            <rect width="100%" height="100%" fill="black" />
            <text
              x={x}
              y={y}
              textAnchor={textAnchor}
              dominantBaseline="middle"
              fontFamily="Dancing Script, cursive, system-ui, -apple-system, 'Segoe UI', Roboto, Arial"
              fontWeight="700"
              fontSize={fontSize}
              fill="white"
            >
              {text}
            </text>
          </mask>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill={`url(#${gradId})`}
          mask={`url(#${maskId})`}
        />
      </svg>
    </div>
  );
}
