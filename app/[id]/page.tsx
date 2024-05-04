import ItemCard from '@/components/item-card'
import { ItemKey, allItems, itemTypes } from '@/data'

export async function generateStaticParams() {
  return itemTypes.map((id) => ({
    id,
  }))
}

export default function page({
  params: { id },
}: {
  params: {
    id: ItemKey
  }
}) {
  const currentItems = allItems[id] || []

  if (currentItems.length === 0) {
    return (
      <p className="text-sm text-muted-foreground my-10 ml-2">
        このページは存在しません
      </p>
    )
  }

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {currentItems.map((item) => (
        <ItemCard
          key={item.title}
          title={item.title}
          tags={item.tags}
          href={item.href}
          imageURL={item.imageURL}
        />
      ))}
    </div>
  )
}
