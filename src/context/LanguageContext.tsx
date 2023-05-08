import { createContext, ReactNode, useState } from 'react'
import { IntlProvider } from 'react-intl'
import spanishMessages from '../langs/es.json'
import englishMessages from '../langs/en.json'

type LanguageDispatchType = {
  setLanguage: (newLanguage: string) => void,
  isValidLanguage: (lang: string) => boolean,
  getValidLanguages: () => string[]
}

const MESSAGES: any = {
  'es': spanishMessages,
  'en': englishMessages
}

export const LanguageContext = createContext<string>('en')
export const LanguageDispatchContext = createContext<LanguageDispatchType>({
  setLanguage: () => null,
  isValidLanguage: () => false,
  getValidLanguages: () => []
})

export function LanguageProvider ({ children }: { children: ReactNode }) {
  const [language, setLang] = useState<string>('en')
  const messages = getMessagesFromLanguage(language)

  function isValidLanguage (lang: string): boolean {
    return Object.keys(MESSAGES).some(key => key == lang)
  }

  function changeLanguage (newLanguage: string) {
    isValidLanguage(newLanguage) && setLang(newLanguage)
  }

  function getValidLanguages () {
    return Object.keys(MESSAGES)
  }

  return (
    <LanguageContext.Provider value={language}>
      <LanguageDispatchContext.Provider value={{ setLanguage: changeLanguage, isValidLanguage, getValidLanguages }}>
        <IntlProvider messages={messages} locale={language} defaultLocale="en">
          {children}
        </IntlProvider>
      </LanguageDispatchContext.Provider>
    </LanguageContext.Provider>
  )
}

function getMessagesFromLanguage (lang: string) {
  return MESSAGES[lang] ?? englishMessages
}


