import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { ErrorPage } from '../pages/error/ErrorPage.tsx'
import { ProfileLayout } from '../layouts/ProfileLayout.tsx'
import { ProfileInfoPage } from '../pages/profile/info/ProfileInfoPage.tsx'
import { WorkingExperiencePage } from '../pages/profile/working-experience/WorkingExperiencePage.tsx'
import { KnowledgePage } from '../pages/profile/knowledge/KnowledgePage.tsx'
import ContactPage from '../pages/profile/contact/ContactPage.tsx'
import { useLanguageDispatcher, useLanguage } from '../hooks/useLanguage.tsx'
import { useState } from 'react'

export function AppRouter () {
  const language = useLanguage()
  const [currentLanguage] = useState(language)
  const { setLanguage, isValidLanguage } = useLanguageDispatcher()

  const router = createBrowserRouter([
    {
      path: '/',
      loader: () => {
        setLanguage('en')
        return null
      },
      element: <Navigate to={`/${currentLanguage}`} replace={true}/>,
      errorElement: <ErrorPage/>,
    },
    {
      path: '/:lang',
      loader: ({ params }) => {
        const lang = params['lang'] ?? ''
        if (!isValidLanguage(lang)) {
          setLanguage('en')
        }
        setLanguage(lang)
        return null
      },
      element: <Navigate to={`/${currentLanguage}`} replace={true}/>,
      errorElement: <ErrorPage/>,
    },
    {
      path: `${currentLanguage}/`,
      element: <ProfileLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <ProfileInfoPage/>,
        },
        {
          path: 'working-experience',
          element: <WorkingExperiencePage/>
        },
        {
          path: 'knowledge',
          element: <KnowledgePage/>
        },
        {
          path: 'contact',
          element: <ContactPage/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
