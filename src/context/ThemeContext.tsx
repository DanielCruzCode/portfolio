import { createContext, ReactNode, useState } from 'react'

type ThemeContextType = 'light' | 'dark'
type ThemeDispatchContextType = {
  setTheme: (theme: ThemeContextType) => void
}
export const ThemeContext = createContext<ThemeContextType>('light')
export const ThemeDispatchContext = createContext<ThemeDispatchContextType>({
  setTheme: () => null
})

export function ThemeProvider ({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeContextType>('light')

  function changeTheme (theme: ThemeContextType) {
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={{ setTheme: changeTheme }}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  )
}
