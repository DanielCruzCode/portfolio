import { Outlet } from 'react-router-dom'
import { Navigation } from '../../components/navigation/Navigation.tsx'

export function ProfileLayout () {

  return (
    <>
      <Outlet/>
      <Navigation/>
    </>
  )
}