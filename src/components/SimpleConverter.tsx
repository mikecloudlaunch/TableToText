'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { toast } from 'sonner'
import { Copy, RotateCcw } from 'lucide-react'
import { parseTableData, TextFormatter, validateAndCleanInput } from '@/lib/table-utils'

type TabType = 'simple' | 'advanced'

export function SimpleConverter() {
  const [activeTab, setActiveTab] = useState<TabType>('simple')
  const [inputData, setInputData] = useState('')
  const [outputData, setOutputData] = useState('')

  // Debounced conversion - only convert after user stops typing for 500ms
  useEffect(() => {
    if (!inputData.trim()) {
      setOutputData('')
      return
    }

    const timeoutId = setTimeout(() => {
      handleConvert()
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [inputData])

  const handleConvert = () => {
    if (!inputData.trim()) {
      setOutputData('')
      return
    }

    try {
      const validation = validateAndCleanInput(inputData)
      
      if (!validation.isValid) {
        // Don't show error toast for simple validation issues during typing
        setOutputData('')
        return
      }

      const tableData = parseTableData(validation.cleanedInput)
      const converted = TextFormatter.toPipeDelimited(tableData)
      
      // Set the converted output directly in the input field
      setInputData(converted)
      setOutputData(converted)
    } catch (error) {
      console.error('Conversion error:', error)
      setOutputData('')
    }
  }

  const handleCopy = async () => {
    if (!inputData.trim()) {
      toast.error('No text to copy')
      return
    }

    try {
      await navigator.clipboard.writeText(inputData)
      toast.success('Text copied to clipboard!')
    } catch (error) {
      console.error('Copy failed:', error)
      toast.error('Failed to copy text')
    }
  }

  const handleClear = () => {
    setInputData('')
    setOutputData('')
    toast.success('Cleared!')
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
        <button
          onClick={() => setActiveTab('simple')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeTab === 'simple'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => setActiveTab('advanced')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeTab === 'advanced'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Advanced
        </button>
      </div>

      <div className="space-y-6">
        {/* Input Area */}
        <div className="space-y-3">
          <Textarea
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            placeholder="Paste your table here..."
            className="min-h-[300px] resize-none bg-background/50 border-primary/30 focus:border-primary/50 rounded-xl"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={handleCopy}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 shadow-lg shadow-primary/25"
            disabled={!inputData.trim()}
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy Text
          </Button>
          <Button
            onClick={handleClear}
            variant="outline"
            className="px-6 border-border/50 hover:bg-accent/50"
            disabled={!inputData}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Clear
          </Button>
        </div>

        {/* Help Text */}
        {!inputData && (
          <div className="text-center text-muted-foreground text-sm">
            <p>📋 Paste tab-separated data from Excel, Google Sheets, or any spreadsheet</p>
            <p className="mt-1">The text will be automatically converted as you paste</p>
          </div>
        )}
      </div>

      {activeTab === 'advanced' && (
        <Card className="border border-border/30 bg-card">
          <CardContent className="p-6">
            <div className="text-center text-muted-foreground">
              <p>Advanced options coming soon...</p>
              <p className="text-sm mt-2">Format selection, custom delimiters, and more.</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
