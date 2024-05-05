'use client'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { getTagLabel, mainTags } from '@/lib/tag'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { useTagParams } from '../hooks/tag-params'

export function MobileNav() {
  const { addTagToSearchParams } = useTagParams()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col">
          {mainTags.map((tagId) => (
            <Button
              variant="ghost"
              className="justify-start"
              key={tagId}
              asChild
            >
              <Link href={`/?tags=${addTagToSearchParams(tagId)}`}>
                {getTagLabel(tagId)}
              </Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
