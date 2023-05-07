import { Link } from 'react-router-dom'

export function Navigation () {
  return (
    <>
      <ul className="navigation">
        <li>
          <Link to={''} className="bubble-link">
            Perfil
          </Link>
        </li>
        <li>
          <Link to={'working-experience'} className="bubble-link">
            Experiencia laboral
          </Link>
        </li>
        <li>
          <Link to={'knowledge'} className="bubble-link">
            Conocimientos
          </Link>
        </li>
        <li>
          <Link to={'contact'} className="bubble-link">
            Contacto
          </Link>
        </li>
      </ul>
    </>
  )
}
