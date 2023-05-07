import { NavLink } from 'react-router-dom'
import { ContactIcon, KnowledgeIcon, ProfileIcon, WorkingExpIcon } from '../icons/nav-bar-icons/NavBarIcons.tsx'

export function Navigation () {

  function isActiveClass ({ isActive }: { isActive: boolean, isPending: boolean }): string {
    return isActive ? 'active' : ''
  }

  return (
    <section className="navigation-wrapper">
      <ul className="navigation">
        <li className="bubble-link">
          <div className="bubble-link__img">
            <ProfileIcon/>
          </div>
          <NavLink to={''} className={isActiveClass} end>
            Perfil
          </NavLink>
        </li>
        <li className="bubble-link">
          <div className="bubble-link__img">
            <KnowledgeIcon/>
          </div>
          <NavLink to={'working-experience'} className={isActiveClass}>
            Experiencia
          </NavLink>
        </li>
        <li className="bubble-link">
          <div className="bubble-link__img">
            <WorkingExpIcon/>
          </div>
          <NavLink to={'knowledge'} className={isActiveClass}>
            Saberes
          </NavLink>
        </li>
        <li className="bubble-link">
          <div className="bubble-link__img">
            <ContactIcon/>
          </div>
          <NavLink to={'contact'} className={isActiveClass}>
            Contacto
          </NavLink>
        </li>
      </ul>
    </section>
  )
}
