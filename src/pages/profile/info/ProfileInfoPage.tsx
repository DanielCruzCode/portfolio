import { FormattedMessageToHTML } from '../../../components/language/FormattedMessageToHTML.tsx'
import Avatar from '../../../components/avatar/Avatar.tsx'

export function ProfileInfoPage () {
  return (
    <>
      <h1 className="text-center"><FormattedMessageToHTML id="profile-page.title"/></h1>
      <section className="my-2 flex content-center">
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
