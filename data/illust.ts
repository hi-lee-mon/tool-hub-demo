import { Tag } from '@/types/tag'

export const illusts = [
  {
    title: 'いらすとや',
    tags: [{ id: 'xxx', label: 'ライセンス表記不要' }],
    href: 'https://www.irasutoya.com/',
    imageURL:
      'https://pbs.twimg.com/profile_images/1440696131927691270/w_sZL2Gx_400x400.jpg',
  },
] satisfies {
  title: string
  tags: Tag[]
  href: string
  imageURL: string
}[]
