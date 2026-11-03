import type { Level } from '../types'
import type { TranslationKey } from './translations'

export const LEVEL_KEYS: Record<Level, TranslationKey> = {
  beginner: 'levelBeginner',
  intermediate: 'levelIntermediate',
  advanced: 'levelAdvanced',
}
