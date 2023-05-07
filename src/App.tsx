import { AppRouter } from './router/AppRouter.tsx'
import { LanguageProvider } from './context/LanguageContext.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'

function App () {

  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <AppRouter/>
        </LanguageProvider>
      </ThemeProvider>
    </>
  )
}

export default App
