'use client'

import { Button } from '@/components/ui/button'
import { getTagLabel, mainTags } from '@/lib/tag'
import Link from 'next/link'
import Filter from './filter'
import { useTagParams } from '../hooks/tag-params'
import { cn } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'

export default function Sidebar() {
  const { addTagToSearchParams } = useTagParams()
  const tags = useSearchParams().get('tags')?.split(',')

  return (
    <div className="hidden lg:block w-64 border-r">
      <div className="flex flex-col p-4">
        {mainTags.map((tagId) => (
          <Button
            variant="ghost"
            className={cn(
              'justify-start',
              tags?.includes(tagId) && 'bg-accent',
            )}
            key={tagId}
            asChild
          >
            <Link href={`/?tags=${addTagToSearchParams(tagId)}`}>
              {getTagLabel(tagId)}
            </Link>
          </Button>
        ))}
      </div>
      <Filter />
    </div>
  )
}
