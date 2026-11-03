import { Link } from 'react-router-dom'
import type { Course } from '../types'
import { formatCurrency } from '../utils'
import { useLanguage } from '../i18n/useLanguage'

export default function CourseCard({ course }: { course: Course }) {
  const { lang, t } = useLanguage()
  return (
    <Link
      to={`/item/${course.id}`}
      className="block h-full rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-emerald-700 hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
    >
      <p className="text-sm font-medium text-emerald-700">{course.category[lang]}</p>
      <h2 className="mt-1 text-lg font-semibold text-slate-900">{course.title[lang]}</h2>
      <p className="mt-1 text-sm text-slate-600">{course.instructor}</p>
      <p className="mt-3 text-sm text-slate-700">
        {course.hours} {t('hours')} · {course.lessons} {t('lessons')} · ★ {course.rating}
      </p>
      <p className="mt-3 font-bold text-slate-900">{formatCurrency(course.price)}</p>
    </Link>
  )
}
