export default function DetailSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="animate-pulse rounded-lg border border-slate-200 bg-white p-6 motion-reduce:animate-none"
    >
      <div className="h-4 w-32 rounded bg-slate-200" />
      <div className="mt-6 h-4 w-24 rounded bg-slate-200" />
      <div className="mt-3 h-8 w-3/5 rounded bg-slate-200" />
      <div className="mt-4 h-4 w-4/5 rounded bg-slate-200" />
      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="h-4 rounded bg-slate-200" />
        <div className="h-4 rounded bg-slate-200" />
        <div className="h-4 rounded bg-slate-200" />
        <div className="h-4 rounded bg-slate-200" />
      </div>
    </div>
  )
}
