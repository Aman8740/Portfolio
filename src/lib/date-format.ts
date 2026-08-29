const MONTHS: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
}

/**
 * Formats a date string in DD-Mon-YYYY format or the word "Present".
 * @param dateInput - A Date object, a DD-Mon-YYYY string, or "Present".
 * @returns Formatted string like "01-Aug-2022" or "Present".
 */
export function formatPortfolioDate(dateInput: string | Date): string {
  if (typeof dateInput === 'string') {
    const s = dateInput.trim()
    if (s.toLowerCase() === 'present') return 'Present'
    const parts = s.split('-')
    if (parts.length === 3) {
      const day = parts[0].padStart(2, '0')
      const monthNum = MONTHS[parts[1]]
      const year = parts[2]
      if (monthNum !== undefined && year) {
        const date = new Date(Number(year), monthNum, Number(day))
        const mon = date.toLocaleString('en-US', { month: 'short' })
        return `${day}-${mon}-${year}`
      }
    }
    const fallback = new Date(s)
    if (!isNaN(fallback.getTime())) {
      const day = String(fallback.getDate()).padStart(2, '0')
      const month = fallback.toLocaleString('en-US', { month: 'short' })
      return `${day}-${month}-${fallback.getFullYear()}`
    }
    return s
  }
  if (isNaN(dateInput.getTime())) return ''
  const day = String(dateInput.getDate()).padStart(2, '0')
  const month = dateInput.toLocaleString('en-US', { month: 'short' })
  return `${day}-${month}-${dateInput.getFullYear()}`
}
