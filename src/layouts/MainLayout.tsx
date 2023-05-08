import { ReactNode } from 'react'
import { LanguageSwitcher } from '../components/language/LanguageSwitcher.tsx'

export function MainLayout ({ children }: { children: ReactNode }) {
  return (
    <>
      <LanguageSwitcher/>
      <main>
        {children}
      </main>
    </>
  )
}
