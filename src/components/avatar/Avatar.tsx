import { defineMessages, injectIntl, IntlShape } from 'react-intl'

interface Props {
  intl: IntlShape
}

const imgAltText = defineMessages({
  alt: {
    id: 'profile-page.img-alt'
  }
})

function AvatarInjected ({ intl }: Props) {
  return (
    <div className="avatar">
      <img

        src="/assets/imgs/avatar.jpg"
        alt={intl.formatMessage(imgAltText.alt)}
      />
    </div>
  )
}

const Avatar = injectIntl(AvatarInjected)

export default Avatar
