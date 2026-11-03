import { Link } from 'react-router-dom'
import DetailSkeleton from '../components/DetailSkeleton'
import { useCompare } from '../compare/useCompare'
import { useCourses } from '../hooks/useCourses'
import { LEVEL_KEYS } from '../i18n/levelKeys'
import type { TranslationKey } from '../i18n/translations'
import { useLanguage } from '../i18n/useLanguage'
import type { Course } from '../types'
import { formatCurrency } from '../utils'

export default function ComparePage() {
  const { lang, t } = useLanguage()
  const { ids, remove, clear } = useCompare()
  const { courses, loading } = useCourses()

  if (ids.length === 0) {
    return (
      <section>
        <h1 className="text-2xl font-bold text-slate-900">{t('compareTitle')}</h1>
        <p className="mt-4 text-slate-700">{t('compareEmpty')}</p>
        <Link className="mt-2 inline-block text-emerald-700 underline" to="/">
          {t('backToList')}
        </Link>
      </section>
    )
  }

  if (loading) {
    return (
      <div aria-busy="true">
        <p role="status" className="sr-only">
          {t('loading')}
        </p>
        <DetailSkeleton />
      </div>
    )
  }

  const selected = ids
    .map((id) => courses.find((c) => c.id === id))
    .filter((c): c is Course => c !== undefined)
  const showBadges = selected.length >= 2
  const minPrice = Math.min(...selected.map((c) => c.price))
  const maxRating = Math.max(...selected.map((c) => c.rating))

  const rows: { label: TranslationKey; render: (c: Course) => string }[] = [
    { label: 'category', render: (c) => c.category[lang] },
    { label: 'instructor', render: (c) => c.instructor },
    { label: 'level', render: (c) => t(LEVEL_KEYS[c.level]) },
    { label: 'duration', render: (c) => `${c.hours} ${t('hours')} · ${c.lessons} ${t('lessons')}` },
  ]

  const badge = 'ml-2 rounded bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800'

  return (
    <section>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-2xl font-bold text-slate-900">{t('compareTitle')}</h1>
        <button
          type="button"
          onClick={clear}
          className="rounded border border-slate-400 px-3 py-1 text-sm text-slate-800 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
        >
          {t('clearAll')}
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table className="w-full min-w-[32rem] text-left text-sm">
          <caption className="sr-only">{t('compareTitle')}</caption>
          <thead>
            <tr>
              <th scope="col" className="p-3 font-medium text-slate-700">
                {t('criteria')}
              </th>
              {selected.map((c) => (
                <th key={c.id} scope="col" className="p-3 align-top">
                  <Link
                    to={`/item/${c.id}`}
                    className="font-semibold text-emerald-700 underline"
                  >
                    {c.title[lang]}
                  </Link>
                  <button
                    type="button"
                    onClick={() => remove(c.id)}
                    aria-label={`${t('remove')}: ${c.title[lang]}`}
                    className="mt-2 block text-sm font-normal text-slate-700 underline focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
                  >
                    {t('remove')}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-t border-slate-200">
                <th scope="row" className="p-3 font-medium text-slate-700">
                  {t(row.label)}
                </th>
                {selected.map((c) => (
                  <td key={c.id} className="p-3 text-slate-900">
                    {row.render(c)}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="border-t border-slate-200">
              <th scope="row" className="p-3 font-medium text-slate-700">
                {t('rating')}
              </th>
              {selected.map((c) => (
                <td key={c.id} className="p-3 text-slate-900">
                  ★ {c.rating}
                  {showBadges && c.rating === maxRating && (
                    <span className={badge}>{t('topRated')}</span>
                  )}
                </td>
              ))}
            </tr>
            <tr className="border-t border-slate-200">
              <th scope="row" className="p-3 font-medium text-slate-700">
                {t('price')}
              </th>
              {selected.map((c) => (
                <td key={c.id} className="p-3 font-bold text-slate-900">
                  {formatCurrency(c.price)}
                  {showBadges && c.price === minPrice && (
                    <span className={badge}>{t('cheapest')}</span>
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
