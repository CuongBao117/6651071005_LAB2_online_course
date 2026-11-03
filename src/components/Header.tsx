import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-emerald-700 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold">
          MiniLMS
        </Link>
      </div>
    </header>
  )
}
