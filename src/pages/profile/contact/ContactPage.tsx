import { FormattedMessageToHTML } from '../../../components/language/FormattedMessageToHTML.tsx'
import {
  GitHubIcon,
  LinkedinIcon,
  WhatsappIcon
} from '../../../components/icons/social-networks/SocialNetworksIcons.tsx'
import { defineMessages, injectIntl, IntlShape } from 'react-intl'
import { LinkIcon } from '../../../components/link-icon/LinkIcon.tsx'
import data from '../../../mocks/data.json'

interface Props {
  intl: IntlShape
}

const inputMessages = defineMessages({
  placeholder: {
    id: 'contact-page.input-placeholder'
  }
})

function ContactPageInjected ({ intl }: Props) {
  return (
    <>
      <h1 className="text-center"><FormattedMessageToHTML id="contact-page.title"/></h1>
      <section className="content-container mt-5">
        <FormattedMessageToHTML id="contact-page.main-content"/>
        <div className="flex content-center flex-col items-center my-3 gap-1">
          <label>
            <FormattedMessageToHTML id="contact-page.input-label"/>
          </label>
          <input type="email" placeholder={intl.formatMessage(inputMessages.placeholder)}/>
        </div>
        <div className="flex content-center flex-col items-center my-3 gap-1 text-center">
          <FormattedMessageToHTML id="contact-page.send-me-message"/>
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

const ContactPage = injectIntl(ContactPageInjected)

export default ContactPage
