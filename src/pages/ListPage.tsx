import CourseCard from '../components/CourseCard'
import CourseCardSkeleton from '../components/CourseCardSkeleton'
import { useCourses } from '../hooks/useCourses'
import { useLanguage } from '../i18n/useLanguage'

const SKELETON_COUNT = 9

export default function ListPage() {
  const { t } = useLanguage()
  const { courses, loading } = useCourses()

  return (
    <section aria-busy={loading}>
      <h1 className="text-2xl font-bold text-slate-900">{t('courses')}</h1>
      <p className="mb-6 mt-1 text-sm text-slate-700">{t('compareHint')}</p>
      {loading && (
        <p role="status" className="sr-only">
          {t('loading')}
        </p>
      )}
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: SKELETON_COUNT }, (_, i) => (
              <li key={i}>
                <CourseCardSkeleton />
              </li>
            ))
          : courses.map((c) => (
              <li key={c.id}>
                <CourseCard course={c} />
              </li>
            ))}
      </ul>
    </section>
  )
}
