import { Link } from 'react-router-dom'
import type { Course } from '../types'
import { formatCurrency } from '../utils'
import { useLanguage } from '../i18n/useLanguage'
import { useCompare } from '../compare/useCompare'

export default function CourseCard({ course }: { course: Course }) {
  const { lang, t } = useLanguage()
  const { has, isFull, toggle } = useCompare()
  const selected = has(course.id)

  return (
    <div
      className={
        'flex h-full flex-col rounded-lg border bg-white shadow-sm hover:shadow ' +
        (selected ? 'border-emerald-700 ring-1 ring-emerald-700' : 'border-slate-200')
      }
    >
      <Link
        to={`/item/${course.id}`}
        className="block flex-1 rounded-t-lg p-4 pb-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
      >
        <p className="text-sm font-medium text-emerald-700">{course.category[lang]}</p>
        <h2 className="mt-1 text-lg font-semibold text-slate-900">{course.title[lang]}</h2>
        <p className="mt-1 text-sm text-slate-600">{course.instructor}</p>
        <p className="mt-3 text-sm text-slate-700">
          {course.hours} {t('hours')} · {course.lessons} {t('lessons')} · ★ {course.rating}
        </p>
        <p className="mt-3 font-bold text-slate-900">{formatCurrency(course.price)}</p>
      </Link>
      <label className="flex items-center gap-2 px-4 pb-4 pt-2 text-sm text-slate-700">
        <input
          type="checkbox"
          checked={selected}
          disabled={!selected && isFull}
          onChange={() => toggle(course.id)}
          aria-label={`${t('compare')}: ${course.title[lang]}`}
          className="h-4 w-4 accent-emerald-700"
        />
        {t('compare')}
      </label>
    </div>
  )
}
