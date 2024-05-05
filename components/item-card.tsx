import { TagId } from '@/data/tag'
import { getTagLabel } from '@/lib/tag'
import Image from 'next/image'
import Link from 'next/link'
import { title } from 'process'

export default function ItemCard({
  title,
  tagIds,
  href,
  id,
}: {
  title: string
  tagIds: TagId[]
  href: string
  id: string
}) {
  return (
    <div className="p-4 border rounded-md shadow-sm bg-card relative hover:shadow-lg transition duration-500">
      <div className="aspect-video relative overflow-hidden border mb-2 rounded">
        <Image
          fill
          objectFit="cover"
          src={`/tool-hub/images/${id}.png`}
          alt={title}
          objectPosition="top"
        />
      </div>
      <h2 className="text-sm font-semibold">
        <Link href={href} target="_blank">
          {title}
          <span className="absolute inset-0"></span>
        </Link>
      </h2>
      <div className="flex relative z-10 flex-wrap mt-2 gap-2">
        {tagIds.map((tagId) => (
          <Link
            key={tagId}
            href={tagId}
            className="border whitespace-nowrap bg-muted rounded text-xs px-1.5 py-1 text-muted-foreground"
          >
            {getTagLabel(tagId)}
          </Link>
        ))}
      </div>
    </div>
  )
}
