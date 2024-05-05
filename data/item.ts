import { Item } from '@/types/item'

export const allItems: Item[] = [
  {
    title: 'いらすとや',
    tags: ['no-license-required', 'illust'],
    id: 'irasutoya',
    href: 'https://www.irasutoya.com/',
  },
  {
    title: 'Pixabay',
    href: 'https://pixabay.com/ja/',
    id: 'Pixabay',
    tags: ['no-license-required', 'photo', 'illust', 'video'],
  },
  {
    title: 'Unsplash',
    href: 'https://unsplash.com/ja',
    id: 'unsplash',
    tags: ['no-license-required', 'free', 'photo', 'photo', 'public-domain'],
  },
] as const
