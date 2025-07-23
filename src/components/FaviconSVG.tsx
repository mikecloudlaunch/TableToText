import React from 'react'
import { BarChart3 } from 'lucide-react'

export function FaviconSVG() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" fill="#1a1625" rx="6"/>
      <g transform="translate(6, 6)">
        <BarChart3 size={20} stroke="#c084fc" strokeWidth="2" fill="none"/>
      </g>
    </svg>
  )
}
