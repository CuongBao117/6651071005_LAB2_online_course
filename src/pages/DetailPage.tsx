import { Link, useParams } from 'react-router-dom'
import { courses } from '../data/courses'
import { formatCurrency } from '../utils'

export default function DetailPage() {
  const { id } = useParams()
  const course = courses.find((c) => String(c.id) === id)

  if (!course) {
    return (
      <p>
        Không tìm thấy khóa học.{' '}
        <Link className="text-emerald-700 underline" to="/">
          Quay lại danh sách
        </Link>
      </p>
    )
  }

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6">
      <Link className="text-sm text-emerald-700 underline" to="/">
        ← Quay lại danh sách
      </Link>
      <p className="mt-4 text-sm font-medium text-emerald-700">{course.category.vi}</p>
      <h1 className="mt-1 text-2xl font-bold text-slate-900">{course.title.vi}</h1>
      <p className="mt-2 text-slate-700">{course.description.vi}</p>
      <dl className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-700">
        <dt>Giảng viên</dt>
        <dd>{course.instructor}</dd>
        <dt>Thời lượng</dt>
        <dd>{course.hours} giờ · {course.lessons} bài</dd>
        <dt>Đánh giá</dt>
        <dd>★ {course.rating}</dd>
        <dt>Học phí</dt>
        <dd className="font-bold text-slate-900">{formatCurrency(course.price)}</dd>
      </dl>
    </article>
  )
}
