import { stdtermwidth } from './screen'

function linewrap(length: number, s: string): string {
  const lw = require('@heroku/linewrap')
  return lw(length, stdtermwidth, {
    skipScheme: 'ansi-color',
  })(s).trim()
}

export type IListItem = [string, string | undefined]
export type IList = IListItem[]
export function renderList(items: IListItem[]): string {
  const S = require('string')
  const max = require('lodash.maxby')

  const maxLength = max(items, '[0].length')[0].length
  const lines = items.map(i => {
    let left = i[0]
    let right = i[1]
    if (!right) {
      return left
    }
    left = `${S(left).padRight(maxLength)}`
    right = linewrap(maxLength + 2, right)
    return `${left}  ${right}`
  })
  return lines.join('\n')
}
