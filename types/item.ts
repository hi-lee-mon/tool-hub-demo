import { TagId } from '@/data/tag'

export type Item = {
  title: string
  tags: TagId[]
  href: string
  id: string
}
