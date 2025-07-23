import React from 'react'

interface TableToTextLogoProps {
  size?: number
  className?: string
}

export function TableToTextLogo({ size = 32, className = "" }: TableToTextLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Table/Grid section (left side) */}
      <g opacity="0.9">
        {/* Grid lines */}
        <rect x="2" y="6" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="6" y1="6" x2="6" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.7" />
        <line x1="8" y1="6" x2="8" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.7" />
        <line x1="2" y1="10" x2="12" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      </g>

      {/* Transform arrow (center) */}
      <g opacity="0.8">
        <path 
          d="M14 10L18 10M18 10L16 8M18 10L16 12" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>

      {/* Text lines section (right side) */}
      <g opacity="0.9">
        {/* Horizontal lines representing text */}
        <line x1="20" y1="7" x2="29" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="10" x2="28" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="13" x2="30" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Subtle glow effect */}
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>
  )
}
