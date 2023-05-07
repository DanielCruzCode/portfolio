import { Link } from 'react-router-dom'

export function ErrorPage () {
  return (
    <>
      404 Creo que no estás en el lugar correcto 😢
      Por favor dirígete a la siguiente página de <Link to="/profile">inicio</Link>
    </>
  )
}
