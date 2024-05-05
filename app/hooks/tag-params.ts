'use client'

import { TagId } from '@/data/tag'
import { mainTags } from '@/lib/tag'
import { useSearchParams } from 'next/navigation'
import { useCallback, useMemo } from 'react'

export const useTagParams = () => {
  const params = useSearchParams()
  const defaultTags = useMemo(
    () => (params.get('tags')?.split(',').filter(Boolean) ?? []) as TagId[],
    [params],
  )

  const addTagToSearchParams = useCallback(
    (tag: TagId, keepMainTag?: boolean) => {
      const src = keepMainTag
        ? defaultTags
        : defaultTags.filter((t: TagId) => !mainTags.includes(t))

      if (src.includes(tag)) {
        return defaultTags.join(',')
      } else {
        return [...src, tag].join(',')
      }
    },
    [defaultTags],
  )

  const removeTagToSearchParams = useCallback(
    (tag: TagId) => {
      return defaultTags.filter((t: TagId) => t !== tag).join(',')
    },
    [defaultTags],
  )

  return { addTagToSearchParams, removeTagToSearchParams }
}
