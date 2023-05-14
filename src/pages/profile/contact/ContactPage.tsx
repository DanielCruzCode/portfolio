import { FormattedMessageToHTML } from '../../../components/language/FormattedMessageToHTML.tsx'
import {
  GitHubIcon,
  LinkedinIcon,
  WhatsappIcon
} from '../../../components/icons/social-networks/SocialNetworksIcons.tsx'
import { LinkIcon } from '../../../components/link-icon/LinkIcon.tsx'
import data from '../../../mocks/data.json'

function ContactPage () {
  return (
    <>
      <h1 className="text-center mb-10"><FormattedMessageToHTML id="contact-page.title"/></h1>
      <section>
        <FormattedMessageToHTML id="contact-page.main-content"/>
        <div className="flex content-center flex-col items-center my-3 gap-1 text-center">
          <div className="flex gap-2 items-center mt-2">
            <LinkIcon href={data.contact[0].link} Icon={WhatsappIcon}/>
            <LinkIcon href={data.contact[1].link} Icon={LinkedinIcon}/>
            <LinkIcon href={data.contact[2].link} Icon={GitHubIcon}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
