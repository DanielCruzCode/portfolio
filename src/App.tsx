import { AppRouter } from './router/AppRouter.tsx'
import { LanguageProvider } from './context/LanguageContext.tsx'

function App () {

  return (
    <>
      <LanguageProvider>
        <AppRouter/>
      </LanguageProvider>
    </>
  )
}

export default App
