import CourseCard from '../components/CourseCard'
import { courses } from '../data/courses'
import { useLanguage } from '../i18n/useLanguage'

export default function ListPage() {
  const { t } = useLanguage()
  return (
    <section>
      <h1 className="mb-6 text-2xl font-bold text-slate-900">{t('courses')}</h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <li key={c.id}>
            <CourseCard course={c} />
          </li>
        ))}
      </ul>
    </section>
  )
}
