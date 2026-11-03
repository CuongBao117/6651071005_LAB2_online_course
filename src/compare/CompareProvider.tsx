import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { CompareContext, MAX_COMPARE } from './CompareContext'

export default function CompareProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<number[]>([])

  const toggle = useCallback((id: number) => {
    setIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id)
      if (prev.length >= MAX_COMPARE) return prev
      return [...prev, id]
    })
  }, [])

  const remove = useCallback((id: number) => {
    setIds((prev) => prev.filter((x) => x !== id))
  }, [])

  const clear = useCallback(() => setIds([]), [])

  const value = useMemo(
    () => ({
      ids,
      isFull: ids.length >= MAX_COMPARE,
      has: (id: number) => ids.includes(id),
      toggle,
      remove,
      clear,
    }),
    [ids, toggle, remove, clear],
  )

  return <CompareContext.Provider value={value}>{children}</CompareContext.Provider>
}
