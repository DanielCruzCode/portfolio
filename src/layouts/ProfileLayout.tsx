import { Outlet } from 'react-router-dom'
import { Navigation } from '../components/navigation/Navigation.tsx'
import { BackgroundBlobs } from '../components/background-bubbles/BackgroundBlobs.tsx'

export function ProfileLayout () {

  return (
    <>
      <BackgroundBlobs/>
      <main className="content-container pb-10">
        <Outlet/>
      </main>
      <Navigation/>
    </>
  )
}
