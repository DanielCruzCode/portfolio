import { createContext, ReactNode, useState } from 'react'
import { IntlProvider } from 'react-intl'
import spanishMessages from '../langs/es.json'
import englishMessages from '../langs/en.json'

type LanguageDispatchType = {
  setLanguage: (newLanguage: string) => void,
  isValidLanguage: (lang: string) => boolean
}

const MESSAGES: any = {
  'es': spanishMessages,
  'en': englishMessages
}

export const LanguageContext = createContext<string>('en')
export const LanguageDispatchContext = createContext<LanguageDispatchType>({
  setLanguage: () => null,
  isValidLanguage: () => false
})

export function LanguageProvider ({ children }: { children: ReactNode }) {
  const [language, setLang] = useState<string>('en')
  const messages = getMessagesFromLanguage(language)

  function changeLanguage (newLanguage: string) {
    setLang(newLanguage)
  }

  function isValidLanguage (lang: string): boolean {
    return Object.keys(MESSAGES).some(key => key == lang)
  }

  return (
    <LanguageContext.Provider value={language}>
      <LanguageDispatchContext.Provider value={{ setLanguage: changeLanguage, isValidLanguage }}>
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


