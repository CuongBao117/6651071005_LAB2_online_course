export function formatCurrency(amount: number, currency: string = 'VND'): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency,
  }).format(amount);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function validateEmail(email: string): boolean {
  // Yêu cầu có phần domain dạng "ten.mien" nên 'abc@com' sẽ bị false
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

// Đề bài yêu cầu đúng chữ ký có `any`; dòng eslint-disable bên dưới giữ cho `npx eslint .` sạch cảnh báo.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): T {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return ((...args: Parameters<T>) => {
    if (timer !== undefined) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  }) as T;
}
