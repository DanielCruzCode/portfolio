import { defineMessages, injectIntl, IntlShape } from 'react-intl'
import { DataType } from '../../data'

interface Props {
  intl: IntlShape,
  data: DataType
}

export function KnowledgeGridInjected ({ intl, data }: Props) {
  return (
    <>
      <section className="knowledge-grid">
        {
          data.knownTechs.map((tech, index) => {
              const imageMessages = defineMessages({
                alt: {
                  id: tech.messageId
                }
              })
              return (
                <a href={tech.id} key={`tech-${index}`} className="knowledge-grid__item">
                  <img src={tech.image} alt={intl.formatMessage(imageMessages.alt)} width="43px"/>
                </a>
              )
            }
          )
        }
      </section>
    </>
  )
}

const KnowledgeGrid = injectIntl(KnowledgeGridInjected)
export default KnowledgeGrid
