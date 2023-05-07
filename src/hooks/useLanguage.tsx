import { useContext } from 'react'
import { LanguageContext, LanguageDispatchContext } from '../context/LanguageContext.tsx'

export function useLanguage () {
  return useContext(LanguageContext)
}

export function useChangeLanguage () {
  return useContext(LanguageDispatchContext)
}
