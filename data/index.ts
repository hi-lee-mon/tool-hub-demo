import { illusts } from './illust'
import { photos } from './photo'
import { icons } from './icon'

export const allItems = {
  illusts,
  photos,
  icons,
} as const

export type ItemKey = keyof typeof allItems
export const itemTypes = Object.keys(allItems) as ItemKey[]
