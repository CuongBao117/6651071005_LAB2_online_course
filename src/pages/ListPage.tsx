import CourseCard from '../components/CourseCard'
import { courses } from '../data/courses'

export default function ListPage() {
  return (
    <section>
      <h1 className="mb-6 text-2xl font-bold text-slate-900">Khóa học</h1>
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
