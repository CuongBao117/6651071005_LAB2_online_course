import { useEffect, useState } from 'react'

// Giả lập thời gian tải riêng cho từng mục: trả về true cho đến khi hết `ms` mili giây
// kể từ lúc `key` thay đổi (ví dụ mỗi lần mở một khóa học khác).
export function useSimulatedLoading(key: string | undefined, ms: number): boolean {
  const [readyKey, setReadyKey] = useState<string | undefined>(undefined)

  useEffect(() => {
    const timer = setTimeout(() => setReadyKey(key), ms)
    return () => clearTimeout(timer)
  }, [key, ms])

  return readyKey !== key
}