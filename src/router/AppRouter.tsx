import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from '../pages/error/ErrorPage.tsx'
import { SplashPage } from '../pages/splash/SplashPage.tsx'
import { ProfileLayout } from '../pages/profile/ProfileLayout.tsx'
import { ProfileInfoPage } from '../pages/profile/info/ProfileInfoPage.tsx'
import { WorkingExperiencePage } from '../pages/profile/working-experience/WorkingExperiencePage.tsx'
import { KnowledgePage } from '../pages/profile/knowledge/KnowledgePage.tsx'
import { ContactPage } from '../pages/profile/contact/ContactPage.tsx'

export function AppRouter () {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <SplashPage/>,
      errorElement: <ErrorPage/>
    },
    {
      path: 'profile',
      element: <ProfileLayout/>,
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
