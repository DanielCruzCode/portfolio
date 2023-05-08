import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Navigation } from '../components/navigation/Navigation.tsx'
import { BackgroundBlobs } from '../components/background-bubbles/BackgroundBlobs.tsx'
import { MainLayout } from './MainLayout.tsx'

export function ProfileLayout () {

  return (
    <MainLayout>
      <ScrollRestoration/>
      <BackgroundBlobs/>
      <section className="content-container pb-10">
        <Outlet/>
      </section>
      <Navigation/>
    </MainLayout>
  )
}
