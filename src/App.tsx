import { Link, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ListPage from './pages/ListPage'
import DetailPage from './pages/DetailPage'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-6">
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/item/:id" element={<DetailPage />} />
          <Route
            path="*"
            element={
              <p>
                Không tìm thấy trang.{' '}
                <Link className="text-emerald-700 underline" to="/">
                  Về trang chủ
                </Link>
              </p>
            }
          />
        </Routes>
      </main>
    </div>
  )
}
