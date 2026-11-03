export default function CourseCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="h-full animate-pulse rounded-lg border border-slate-200 bg-white p-4 motion-reduce:animate-none"
    >
      <div className="h-4 w-1/3 rounded bg-slate-200" />
      <div className="mt-3 h-6 w-4/5 rounded bg-slate-200" />
      <div className="mt-3 h-4 w-1/2 rounded bg-slate-200" />
      <div className="mt-4 h-4 w-2/3 rounded bg-slate-200" />
      <div className="mt-4 h-5 w-1/4 rounded bg-slate-200" />
    </div>
  )
}
