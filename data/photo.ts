import { Tag } from '@/types/tag'

export const photos = [
  {
    title: 'Pixabay',
    href: 'https://pixabay.com/ja/',
    imageURL: '',
    tags: [{ id: 'xxx', label: 'ライセンス表記不要' }],
  },
  {
    title: 'Unsplash',
    href: 'https://unsplash.com/ja',
    imageURL: 'images/unsplash.png',
    tags: [{ id: 'xxx', label: 'ライセンス表記不要' }],
  },
] satisfies {
  title: string
  tags: Tag[]
  href: string
  imageURL: string
}[]
