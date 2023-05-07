import { FormattedMessageToHTML } from '../../../components/language/FormattedMessageToHTML.tsx'
import Avatar from '../../../components/avatar/Avatar.tsx'

export function ProfileInfoPage () {
  return (
    <>
      <h2 className="text-center"><FormattedMessageToHTML id="profile-page.title"/></h2>
      <section className="my-2">
        <Avatar/>
      </section>
      <section>
        <FormattedMessageToHTML
          id="profile-page.principal-message"
          additionalValues={{
            a: (chunks: any) => (
              <a href="https://rockcontent.com/es/blog/que-es-engagement/">
                {chunks}
              </a>
            ),
          }}
        />
      </section>
    </>
  )
}
