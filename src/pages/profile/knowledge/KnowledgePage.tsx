import { FormattedMessageToHTML } from '../../../components/language/FormattedMessageToHTML.tsx'
import KnowledgeGrid from '../../../components/knowledge/KnowledgeGrid.tsx'
import data from '../../../mocks/data.json'
import KnowledgeSections from '../../../components/knowledge/KnowledgeSections.tsx'

export function KnowledgePage () {

  return (
    <>
      <h1 className="text-center mb-4"><FormattedMessageToHTML id="knowledge-page.title"/></h1>
      <KnowledgeGrid data={data}/>
      <hr className="my-3"/>
      <KnowledgeSections data={data}/>
    </>
  )
}
