'use client'

import { SimpleConverter } from '@/components/SimpleConverter'
import { ExternalLink, Coffee, BarChart3 } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col textured-bg grid-pattern relative">
      {/* Noise overlay */}
      <div className="noise-bg absolute inset-0 pointer-events-none"></div>
      
      {/* Header */}
      <header className="border-b border-border/30 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-ring/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-primary/30">
                <BarChart3 size={20} className="text-primary" />
              </div>
              <h1 className="text-xl font-bold gradient-text tracking-wide">Table To Text</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a 
                href="#converter" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Converter
              </a>
              <a 
                href="https://ko-fi.com/mikecloudlaunch" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-lg text-primary text-sm transition-colors"
              >
                <Coffee className="w-4 h-4" />
                Support Us
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 tracking-tight">
              Clear Data. Confident Decisions.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Convert your spreadsheet data to clean, readable text format instantly. 
              Perfect for reports, documentation, and data analysis.
            </p>
          </div>
        </section>

        {/* Converter Section */}
        <section id="converter" className="py-12 px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Enhanced background panel */}
            <div className="converter-panel rounded-2xl p-8 md:p-12">
              <SimpleConverter />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-card/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-primary/20 to-ring/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-primary/30">
                  <BarChart3 size={16} className="text-primary" />
                </div>
                <span className="text-lg font-bold gradient-text tracking-wide">Table To Text</span>
              </div>
              <p className="text-muted-foreground text-sm max-w-sm">
                Convert tab-separated data from spreadsheets to clean text format. 
                All processing happens in your browser - your data stays private.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Quick Links</h3>
              <div className="space-y-2">
                <a 
                  href="#converter" 
                  className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Converter Tool
                </a>
                <a 
                  href="https://numberlaunch.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  NumberLaunch
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a 
                  href="https://ko-fi.com/mikecloudlaunch" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Support Development
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Support</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  Like this tool? Consider supporting its development.
                </p>
                <a 
                  href="https://ko-fi.com/mikecloudlaunch" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff5f5f] hover:bg-[#ff4444] text-white rounded-lg text-sm transition-colors font-medium"
                >
                  <Coffee className="w-4 h-4" />
                  Buy me a coffee
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/20 mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              Built with ❤️ by <a href="https://cloudlaunch.au" target="_blank" rel="noopener noreferrer" className="text-primary underline">Cloud Launch</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
