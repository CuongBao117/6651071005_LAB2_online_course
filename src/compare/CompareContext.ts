import { createContext } from 'react'

export const MAX_COMPARE = 3

export interface CompareContextValue {
  ids: number[]
  isFull: boolean
  has: (id: number) => boolean
  toggle: (id: number) => void
  remove: (id: number) => void
  clear: () => void
}

export const CompareContext = createContext<CompareContextValue | null>(null)
