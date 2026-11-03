import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage'
import { useCompare } from '../compare/useCompare'
import type { Lang } from '../types'

const LANGS: Lang[] = ['vi', 'en']

export default function Header() {
  const { lang, setLang, t } = useLanguage()
  const { ids } = useCompare()

  return (
    <header className="bg-emerald-700 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="text-xl font-bold">
          {t('siteName')}
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/compare" className="text-sm font-semibold underline">
            {t('compare')} ({ids.length})
          </Link>
          <div role="group" aria-label={t('language')} className="flex gap-1">
            {LANGS.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={
                  'rounded px-3 py-1 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white ' +
                  (lang === code
                    ? 'bg-white text-emerald-700'
                    : 'border border-white text-white hover:bg-emerald-800')
                }
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
