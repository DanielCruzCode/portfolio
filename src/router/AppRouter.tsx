import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { ErrorPage } from '../pages/error/ErrorPage.tsx'
import { ProfileLayout } from '../layouts/ProfileLayout.tsx'
import { ProfileInfoPage } from '../pages/profile/info/ProfileInfoPage.tsx'
import { WorkingExperiencePage } from '../pages/profile/working-experience/WorkingExperiencePage.tsx'
import { KnowledgePage } from '../pages/profile/knowledge/KnowledgePage.tsx'
import { ContactPage } from '../pages/profile/contact/ContactPage.tsx'
import { useChangeLanguage, useLanguage } from '../hooks/useLanguage.tsx'

export function AppRouter () {

  const language = useLanguage()
  const changeLanguage = useChangeLanguage()

  console.log('Language', language)

  const router = createBrowserRouter([
    {
      path: '/',
      loader: () => {
        if (changeLanguage) changeLanguage('en')
        return null
      },
      element: <Navigate to={`/${language}`} replace={true}/>,
      errorElement: <ErrorPage/>,
    },
    {
      path: `${language}/`,
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
