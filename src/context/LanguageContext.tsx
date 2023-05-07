import { createContext, ReactNode, useState } from 'react'
import { IntlProvider } from 'react-intl'
import spanishMessages from '../langs/es.json'
import englishMessages from '../langs/en.json'

type LanguageContextType = 'en' | 'es'

type SetLanguageType = ((newLanguage: LanguageContextType) => void) | null

export const LanguageContext = createContext<LanguageContextType>('en')
export const LanguageDispatchContext = createContext<SetLanguageType>(null)

export function LanguageProvider ({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageContextType>('en')
  const messages = getMessagesFromLanguage(language)

  function changeLanguage (newLanguage: LanguageContextType) {
    setLanguage(newLanguage)
  }

  return (
    <LanguageContext.Provider value={language}>
      <LanguageDispatchContext.Provider value={changeLanguage}>
        <IntlProvider messages={messages} locale={language} defaultLocale="en">
          {children}
        </IntlProvider>
      </LanguageDispatchContext.Provider>
    </LanguageContext.Provider>
  )
}

function getMessagesFromLanguage (lang: LanguageContextType) {
  const messages = {
    'es': spanishMessages,
    'en': englishMessages
  }

  return messages[lang] ?? englishMessages
}

