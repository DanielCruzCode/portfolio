import { useContext } from 'react'
import { ThemeContext, ThemeDispatchContext } from '../context/ThemeContext.tsx'

export function useTheme () {
  return useContext(ThemeContext)
}

export function useThemeDispatcher () {
  return useContext(ThemeDispatchContext)
}
