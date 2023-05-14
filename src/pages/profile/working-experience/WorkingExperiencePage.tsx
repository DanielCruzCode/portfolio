import { FormattedMessageToHTML } from '../../../components/language/FormattedMessageToHTML.tsx'
import { ExperienceGrid } from '../../../components/experience/ExperienceGrid.tsx'

export function WorkingExperiencePage () {
  return (
    <>
      <h1 className="text-center mb-10"><FormattedMessageToHTML id="working-xp-page.title"/></h1>
      <ExperienceGrid/>
    </>
  )
}
