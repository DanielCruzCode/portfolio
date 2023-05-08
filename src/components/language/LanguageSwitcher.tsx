import { useLanguage, useLanguageDispatcher } from '../../hooks/useLanguage.tsx'
import { ChangeEvent } from 'react'

export function LanguageSwitcher () {
  const { getValidLanguages, setLanguage } = useLanguageDispatcher()
  const currentLang = useLanguage()
  const languages = getValidLanguages()

  function handleSwitchLanguage (event: ChangeEvent<HTMLSelectElement>) {
    setLanguage(event.target.value)
  }

  return (
    <>
      <select className="language-switcher" onChange={handleSwitchLanguage} tabIndex={0} value={currentLang}>
        {
          languages.map((lang, index) => {
              if (currentLang === lang) {
                return (
                  <option key={`lang-${index}`}>{lang}</option>
                )
              }

              return (
                <option key={`lang-${index}`}>{lang}</option>
              )
            }
          )
        }
      </select>
    </>
  )
}
