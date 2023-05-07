import { NavLink } from 'react-router-dom'
import { ContactIcon, KnowledgeIcon, ProfileIcon, WorkingExpIcon } from '../icons/nav-bar-icons/NavBarIcons.tsx'
import { FormattedMessageToHTML } from '../language/FormattedMessageToHTML.tsx'

export function Navigation () {

  function isActiveClass ({ isActive }: { isActive: boolean, isPending: boolean }): string {
    return isActive ? 'active' : ''
  }

  return (
    <section className="navigation-wrapper">
      <ul className="navigation" tabIndex={1} aria-label="navigation">
        <li className="bubble-link">
          <div className="bubble-link__img">
            <ProfileIcon/>
          </div>
          <NavLink to={''} className={isActiveClass} end>
            <FormattedMessageToHTML id="profile-page.title"/>
          </NavLink>
        </li>
        <li className="bubble-link">
          <div className="bubble-link__img">
            <KnowledgeIcon/>
          </div>
          <NavLink to={'working-experience'} className={isActiveClass}>
            <FormattedMessageToHTML id="working-xp-page.title"/>
          </NavLink>
        </li>
        <li className="bubble-link">
          <div className="bubble-link__img">
            <WorkingExpIcon/>
          </div>
          <NavLink to={'knowledge'} className={isActiveClass}>
            <FormattedMessageToHTML id="knowledge-page.title"/>
          </NavLink>
        </li>
        <li className="bubble-link">
          <div className="bubble-link__img">
            <ContactIcon/>
          </div>
          <NavLink to={'contact'} className={isActiveClass}>
            <FormattedMessageToHTML id="contact-page.title"/>
          </NavLink>
        </li>
      </ul>
    </section>
  )
}
