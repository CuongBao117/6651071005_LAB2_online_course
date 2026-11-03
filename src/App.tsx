import { Link, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ListPage from './pages/ListPage'
import DetailPage from './pages/DetailPage'
import ComparePage from './pages/ComparePage'
import { useLanguage } from './i18n/useLanguage'

export default function App() {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-6">
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/item/:id" element={<DetailPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route
            path="*"
            element={
              <p>
                {t('pageNotFound')}{' '}
                <Link className="text-emerald-700 underline" to="/">
                  {t('goHome')}
                </Link>
              </p>
            }
          />
        </Routes>
      </main>
    </div>
  )
}
