import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tabletotext.com'

export const siteMetadata = {
  title: 'Table To Text Converter - Convert Spreadsheet Data to Clean Text',
  description: 'Convert tab-separated data from Excel, Google Sheets, or any spreadsheet to clean, readable text format instantly. Perfect for reports, documentation, and data analysis. All processing happens in your browser - your data stays private.',
  keywords: [
    'table to text',
    'spreadsheet converter',
    'excel to text',
    'google sheets converter',
    'csv converter',
    'data formatting',
    'text conversion',
    'tabular data',
    'data analysis',
    'spreadsheet tools'
  ],
  author: 'Cloud Launch',
  siteUrl,
  image: `${siteUrl}/og-image.png`,
  twitterHandle: '@cloudlaunch'
}

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: '%s | Table To Text'
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author, url: 'https://cloudlaunch.au' }],
  creator: siteMetadata.author,
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: 'Table To Text',
    images: [
      {
        url: siteMetadata.image,
        width: 1200,
        height: 630,
        alt: 'Table To Text Converter - Convert spreadsheet data to clean text format',
        type: 'image/png'
      }
    ]
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    creator: siteMetadata.twitterHandle,
    images: [siteMetadata.image]
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  
  // Icons
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' }
    ],
    apple: [
      { url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' }
    ]
  },
  
  // Manifest
  manifest: '/site.webmanifest',
  
  // Verification
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  
  // Other
  category: 'productivity'
}
