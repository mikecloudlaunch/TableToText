/**
 * Utility functions for table data processing
 */

export interface TableData {
  rows: string[][]
  headers?: string[]
  rowCount: number
  columnCount: number
}

/**
 * Parse tab-separated data into a structured format
 */
export function parseTableData(input: string): TableData {
  const lines = input.split('\n').filter(line => line.trim())
  const rows = lines.map(line => line.split('\t').map(cell => cell.trim()))
  
  const rowCount = rows.length
  const columnCount = Math.max(...rows.map(row => row.length))

  return {
    rows,
    rowCount,
    columnCount
  }
}

/**
 * Convert table data to different text formats
 */
export class TextFormatter {
  static toPipeDelimited(data: TableData): string {
    return data.rows.map(row => row.join(' | ')).join('\n')
  }

  static toFixedWidth(data: TableData): string {
    // Calculate column widths
    const columnWidths: number[] = []
    
    for (let col = 0; col < data.columnCount; col++) {
      let maxWidth = 0
      for (const row of data.rows) {
        if (row[col]) {
          maxWidth = Math.max(maxWidth, row[col].length)
        }
      }
      columnWidths[col] = Math.max(maxWidth, 3) // Minimum width of 3
    }

    // Format rows
    return data.rows.map(row => {
      return row.map((cell, index) => 
        (cell || '').padEnd(columnWidths[index] || 0)
      ).join(' ')
    }).join('\n')
  }

  static toMarkdownTable(data: TableData): string {
    if (data.rows.length === 0) return ''

    const headers = data.rows[0]
    const dataRows = data.rows.slice(1)

    // Create header row
    const headerRow = '| ' + headers.join(' | ') + ' |'
    
    // Create separator row
    const separatorRow = '| ' + headers.map(() => '---').join(' | ') + ' |'
    
    // Create data rows
    const dataRowsFormatted = dataRows.map(row => 
      '| ' + row.join(' | ') + ' |'
    )

    return [headerRow, separatorRow, ...dataRowsFormatted].join('\n')
  }

  static toCommaDelimited(data: TableData): string {
    return data.rows.map(row => 
      row.map(cell => `"${cell.replace(/"/g, '""')}"`).join(',')
    ).join('\n')
  }

  static toJSON(data: TableData): string {
    if (data.rows.length === 0) return '[]'

    const headers = data.rows[0]
    const dataRows = data.rows.slice(1)

    const objects = dataRows.map(row => {
      const obj: Record<string, string> = {}
      headers.forEach((header, index) => {
        obj[header] = row[index] || ''
      })
      return obj
    })

    return JSON.stringify(objects, null, 2)
  }
}

/**
 * Validate and clean input data
 */
export function validateAndCleanInput(input: string): { 
  isValid: boolean 
  cleanedInput: string 
  errors: string[] 
} {
  const errors: string[] = []
  
  if (!input || !input.trim()) {
    errors.push('Input is empty')
    return { isValid: false, cleanedInput: '', errors }
  }

  // Clean the input
  let cleaned = input.trim()
  
  // Check for common issues
  const lines = cleaned.split('\n')
  if (lines.length === 1 && !cleaned.includes('\t')) {
    errors.push('No tab-separated data detected. Make sure to copy data from Excel/Google Sheets.')
  }

  // Remove empty lines at the end
  while (lines.length > 0 && !lines[lines.length - 1].trim()) {
    lines.pop()
  }
  
  cleaned = lines.join('\n')

  return {
    isValid: errors.length === 0,
    cleanedInput: cleaned,
    errors
  }
}

/**
 * Generate sample data for testing
 */
export function generateSampleData(): string {
  return [
    'Name\tAge\tCity\tOccupation',
    'John Doe\t28\tNew York\tDeveloper',
    'Jane Smith\t32\tSan Francisco\tDesigner',
    'Bob Johnson\t45\tChicago\tManager',
    'Alice Brown\t29\tBoston\tAnalyst'
  ].join('\n')
}
