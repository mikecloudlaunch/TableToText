'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import { 
  Copy, 
  Download, 
  RefreshCw, 
  FileText, 
  Table, 
  Columns, 
  Grid,
  Code,
  FileJson,
  Sparkles,
  CheckCircle
} from 'lucide-react'
import { parseTableData, TextFormatter, validateAndCleanInput, generateSampleData } from '@/lib/table-utils'

type OutputFormat = 'pipe' | 'fixed' | 'markdown' | 'csv' | 'json'

export function TableConverter() {
  const [inputData, setInputData] = useState('')
  const [outputData, setOutputData] = useState('')
  const [selectedFormat, setSelectedFormat] = useState<OutputFormat>('pipe')
  const [isConverting, setIsConverting] = useState(false)

  const formats: Array<{
    id: OutputFormat
    label: string
    description: string
    icon: React.ReactNode
    badge?: string
  }> = [
    {
      id: 'pipe',
      label: 'Pipe Separated',
      description: 'Data separated by pipe characters',
      icon: <Columns className="w-4 h-4" />,
      badge: 'Popular'
    },
    {
      id: 'fixed',
      label: 'Fixed Width',
      description: 'Fixed-width columns for reports',
      icon: <Grid className="w-4 h-4" />
    },
    {
      id: 'markdown',
      label: 'Markdown Table',
      description: 'GitHub-compatible markdown format',
      icon: <Table className="w-4 h-4" />,
      badge: 'Dev Friendly'
    },
    {
      id: 'csv',
      label: 'CSV Export',
      description: 'Comma-separated values format',
      icon: <Code className="w-4 h-4" />
    },
    {
      id: 'json',
      label: 'JSON Array',
      description: 'Structured JSON object array',
      icon: <FileJson className="w-4 h-4" />,
      badge: 'API Ready'
    }
  ]

  const handleConvert = async () => {
    if (!inputData.trim()) {
      toast.error('Please paste your table data first')
      return
    }

    setIsConverting(true)
    
    try {
      // Simulate processing time for better UX
      await new Promise(resolve => setTimeout(resolve, 300))
      
      const validation = validateAndCleanInput(inputData)
      
      if (!validation.isValid) {
        validation.errors.forEach(error => toast.error(error))
        setIsConverting(false)
        return
      }

      const tableData = parseTableData(validation.cleanedInput)
      
      let converted = ''
      switch (selectedFormat) {
        case 'pipe':
          converted = TextFormatter.toPipeDelimited(tableData)
          break
        case 'fixed':
          converted = TextFormatter.toFixedWidth(tableData)
          break
        case 'markdown':
          converted = TextFormatter.toMarkdownTable(tableData)
          break
        case 'csv':
          converted = TextFormatter.toCommaDelimited(tableData)
          break
        case 'json':
          converted = TextFormatter.toJSON(tableData)
          break
      }
      
      setOutputData(converted)
      
      toast.success(`Successfully converted to ${formats.find(f => f.id === selectedFormat)?.label}!`, {
        icon: <CheckCircle className="w-4 h-4" />
      })
    } catch (error) {
      toast.error('Failed to convert data. Please check your input format.')
      console.error(error)
    } finally {
      setIsConverting(false)
    }
  }

  const handleCopy = async () => {
    if (!outputData) return
    
    try {
      await navigator.clipboard.writeText(outputData)
      toast.success('Copied to clipboard!', {
        icon: <Copy className="w-4 h-4" />
      })
    } catch (error) {
      toast.error('Failed to copy to clipboard')
    }
  }

  const handleDownload = () => {
    if (!outputData) return
    
    const extensions = {
      pipe: 'txt',
      fixed: 'txt', 
      markdown: 'md',
      csv: 'csv',
      json: 'json'
    }
    
    const extension = extensions[selectedFormat]
    const filename = `converted-table.${extension}`
    
    const blob = new Blob([outputData], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    
    toast.success(`Downloaded as ${filename}!`, {
      icon: <Download className="w-4 h-4" />
    })
  }

  const handleClear = () => {
    setInputData('')
    setOutputData('')
    toast.success('Data cleared')
  }

  const handleLoadSample = () => {
    setInputData(generateSampleData())
    toast.success('Sample data loaded')
  }

  const getRowCount = () => {
    if (!inputData.trim()) return 0
    return inputData.split('\n').filter(line => line.trim()).length
  }

  const getColumnCount = () => {
    if (!inputData.trim()) return 0
    const firstLine = inputData.split('\n')[0]
    return firstLine ? firstLine.split('\t').length : 0
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Data Conversion Engine</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">
          Transform Your Data
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Paste your spreadsheet data below and choose your preferred output format
        </p>
      </div>

      {/* Format Selection */}
      <Card className="glass-card border-border/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Grid className="w-5 h-5 text-primary" />
            Output Format
          </CardTitle>
          <CardDescription>
            Choose how you want your converted data to be formatted
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {formats.map((format) => (
              <button
                key={format.id}
                onClick={() => setSelectedFormat(format.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 text-left hover:scale-105 ${
                  selectedFormat === format.id
                    ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20'
                    : 'border-border/30 bg-card/50 hover:border-border/60 hover:bg-card/80'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {format.icon}
                    <span className="font-medium">{format.label}</span>
                  </div>
                  {format.badge && (
                    <Badge variant="secondary" className="text-xs">
                      {format.badge}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {format.description}
                </p>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Conversion Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input */}
        <Card className="glass-card border-border/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Table className="w-5 h-5 text-primary" />
              Input Data
              {inputData && (
                <Badge variant="outline" className="ml-auto">
                  {getRowCount()} rows × {getColumnCount()} columns
                </Badge>
              )}
            </CardTitle>
            <CardDescription>
              Paste your tab-separated data from Excel, Google Sheets, or any spreadsheet
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Paste your table data here (tab-separated)...

Example:
Name	Age	City
John	25	New York
Jane	30	London
Bob	35	Tokyo"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              className="min-h-[300px] font-mono text-sm glass-input"
            />
            <div className="flex gap-2">
              <Button
                onClick={handleConvert}
                disabled={!inputData.trim() || isConverting}
                className="flex-1 bg-gradient-to-r from-primary to-ring hover:from-primary/90 hover:to-ring/90"
              >
                {isConverting ? (
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Sparkles className="w-4 h-4 mr-2" />
                )}
                {isConverting ? 'Converting...' : 'Convert Data'}
              </Button>
              <Button
                variant="outline"
                onClick={handleLoadSample}
                className="glass-button"
              >
                Sample
              </Button>
              <Button
                variant="outline"
                onClick={handleClear}
                disabled={!inputData && !outputData}
                className="glass-button"
              >
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Output */}
        <Card className="glass-card border-border/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Converted Output
              {outputData && (
                <Badge variant="outline" className="ml-auto">
                  {formats.find(f => f.id === selectedFormat)?.label}
                </Badge>
              )}
            </CardTitle>
            <CardDescription>
              Your converted data in the selected format
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Your converted data will appear here..."
              value={outputData}
              readOnly
              className="min-h-[300px] font-mono text-sm glass-input"
            />
            <div className="flex gap-2">
              <Button
                onClick={handleCopy}
                disabled={!outputData}
                variant="outline"
                className="flex-1 glass-button"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </Button>
              <Button
                onClick={handleDownload}
                disabled={!outputData}
                variant="outline"
                className="flex-1 glass-button"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
