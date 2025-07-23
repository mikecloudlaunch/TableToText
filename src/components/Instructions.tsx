import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  HelpCircle, 
  Sheet, 
  Copy, 
  MousePointer, 
  Download, 
  Lightbulb,
  Zap,
  Shield,
  Sparkles
} from 'lucide-react'

export function Instructions() {
  const steps = [
    {
      icon: <Sheet className="h-5 w-5 text-blue-500" />,
      title: "Copy from Excel/Sheets",
      description: "Select your table data in Excel or Google Sheets and copy it (Ctrl+C / Cmd+C)",
      tip: "Make sure to include headers if you want them converted too"
    },
    {
      icon: <MousePointer className="h-5 w-5 text-green-500" />,
      title: "Paste into Input",
      description: "Click in the input area above and paste your data (Ctrl+V / Cmd+V)",
      tip: "The data should automatically preserve the tab-separated format"
    },
    {
      icon: <Copy className="h-5 w-5 text-purple-500" />,
      title: "Convert to Text",
      description: "Click the 'Convert' button to transform your table into clean text format",
      tip: "Choose from multiple output formats including pipe-separated, markdown, CSV, and JSON"
    },
    {
      icon: <Download className="h-5 w-5 text-orange-500" />,
      title: "Copy or Download",
      description: "Use the 'Copy Result' button or download the converted text as a file",
      tip: "Perfect for documentation, reports, or sharing data in a readable format"
    }
  ]

  const proTips = [
    {
      icon: <Zap className="h-4 w-4 text-yellow-500" />,
      title: "Fast Processing",
      description: "All conversions happen instantly in your browser - no server delays"
    },
    {
      icon: <Shield className="h-4 w-4 text-green-500" />,
      title: "Privacy First",
      description: "Your data never leaves your browser - completely private and secure"
    },
    {
      icon: <Lightbulb className="h-4 w-4 text-blue-500" />,
      title: "Multiple Formats",
      description: "Export to pipe-separated, fixed-width, markdown, CSV, or JSON formats"
    }
  ]

  return (
    <div className="space-y-12">
      {/* How to Use Section */}
      <Card className="glass-card border-border/20">
        <CardHeader className="pb-6">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Step-by-step Guide</span>
            </div>
            <h2 className="text-3xl font-bold gradient-text">How to Use TableText</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Follow these simple steps to convert your spreadsheet data into clean, formatted text
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="group relative p-6 rounded-xl bg-gradient-to-br from-card/50 to-card/30 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <div className="relative w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-border/50 group-hover:border-primary/50 transition-all duration-300">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs px-2 py-1">
                        Step {index + 1}
                      </Badge>
                      <h3 className="font-semibold text-lg">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex items-start gap-2 mt-3 p-3 bg-muted/30 rounded-lg border border-border/30">
                      <Lightbulb className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-muted-foreground/80 leading-relaxed">
                        <span className="font-medium">Pro tip:</span> {step.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pro Tips Section */}
      <Card className="glass-card border-border/20">
        <CardHeader>
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-ring/10 border border-primary/20 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Pro Features</span>
            </div>
            <h3 className="text-2xl font-bold gradient-text">Why Choose TableText?</h3>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proTips.map((tip, index) => (
              <div 
                key={index}
                className="group p-6 rounded-xl bg-gradient-to-br from-card/40 to-card/20 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-105 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-ring/20 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {tip.icon}
                </div>
                <h4 className="font-semibold text-lg mb-2">{tip.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
