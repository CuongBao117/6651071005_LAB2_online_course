import { Link, useParams } from 'react-router-dom'
import DetailSkeleton from '../components/DetailSkeleton'
import { useCourses } from '../hooks/useCourses'
import { useSimulatedLoading } from '../hooks/useSimulatedLoading'
import { formatCurrency } from '../utils'
import { useLanguage } from '../i18n/useLanguage'
import { LEVEL_KEYS } from '../i18n/levelKeys'

export default function DetailPage() {
  const { id } = useParams()
  const { lang, t } = useLanguage()
  const { courses, loading: listLoading } = useCourses()
  const simulating = useSimulatedLoading(id, 600)
  const loading = listLoading || simulating
  const course = courses.find((c) => String(c.id) === id)

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

  if (!course) {
    return (
      <p>
        {t('courseNotFound')}{' '}
        <Link className="text-emerald-700 underline" to="/">
          {t('backToList')}
        </Link>
      </p>
    )
  }

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6">
      <Link className="text-sm text-emerald-700 underline" to="/">
        {t('backToList')}
      </Link>
      <p className="mt-4 text-sm font-medium text-emerald-700">{course.category[lang]}</p>
      <h1 className="mt-1 text-2xl font-bold text-slate-900">{course.title[lang]}</h1>
      <p className="mt-2 text-slate-700">{course.description[lang]}</p>
      <dl className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-700">
        <dt>{t('instructor')}</dt>
        <dd>{course.instructor}</dd>
        <dt>{t('level')}</dt>
        <dd>{t(LEVEL_KEYS[course.level])}</dd>
        <dt>{t('duration')}</dt>
        <dd>
          {course.hours} {t('hours')} · {course.lessons} {t('lessons')}
        </dd>
        <dt>{t('rating')}</dt>
        <dd>★ {course.rating}</dd>
        <dt>{t('price')}</dt>
        <dd className="font-bold text-slate-900">{formatCurrency(course.price)}</dd>
      </dl>
    </article>
  )
}
