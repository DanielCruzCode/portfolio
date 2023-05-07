import { useContext } from 'react'
import { LanguageContext, LanguageDispatchContext } from '../context/LanguageContext.tsx'

export function useLanguage () {
  return useContext(LanguageContext)
}

export function useLanguageDispatcher () {
  return useContext(LanguageDispatchContext)
}
