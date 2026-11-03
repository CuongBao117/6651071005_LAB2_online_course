import type { Lang } from '../types'

const vi = {
  siteName: 'MiniLMS',
  courses: 'Khóa học',
  language: 'Ngôn ngữ',
  hours: 'giờ',
  lessons: 'bài',
  instructor: 'Giảng viên',
  duration: 'Thời lượng',
  rating: 'Đánh giá',
  price: 'Học phí',
  level: 'Cấp độ',
  levelBeginner: 'Cơ bản',
  levelIntermediate: 'Trung bình',
  levelAdvanced: 'Nâng cao',
  backToList: '← Quay lại danh sách',
  courseNotFound: 'Không tìm thấy khóa học.',
  pageNotFound: 'Không tìm thấy trang.',
  goHome: 'Về trang chủ',
}

export type TranslationKey = keyof typeof vi

const en: Record<TranslationKey, string> = {
  siteName: 'MiniLMS',
  courses: 'Courses',
  language: 'Language',
  hours: 'hours',
  lessons: 'lessons',
  instructor: 'Instructor',
  duration: 'Duration',
  rating: 'Rating',
  price: 'Price',
  level: 'Level',
  levelBeginner: 'Beginner',
  levelIntermediate: 'Intermediate',
  levelAdvanced: 'Advanced',
  backToList: '← Back to list',
  courseNotFound: 'Course not found.',
  pageNotFound: 'Page not found.',
  goHome: 'Go to home page',
}

export const translations: Record<Lang, Record<TranslationKey, string>> = { vi, en }
