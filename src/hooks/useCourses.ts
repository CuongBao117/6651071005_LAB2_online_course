import { useEffect, useState } from 'react'
import type { Course } from '../types'

// Bộ nhớ đệm: lần đầu tải (có độ trễ giả lập) sẽ hiện skeleton,
// các lần chuyển trang sau dùng lại dữ liệu nên không phải chờ nữa.
let cache: Course[] | null = null

const FAKE_DELAY_MS = 700

export function useCourses(): { courses: Course[]; loading: boolean } {
  const [courses, setCourses] = useState<Course[]>(cache ?? [])
  const [loading, setLoading] = useState<boolean>(cache === null)

  useEffect(() => {
    if (cache !== null) return
    let cancelled = false
    const timer = setTimeout(() => {
      void import('../data/data.json').then((mod) => {
        const data = mod.default as Course[]
        cache = data
        if (!cancelled) {
          setCourses(data)
          setLoading(false)
        }
      })
    }, FAKE_DELAY_MS)
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [])

  return { courses, loading }
}
