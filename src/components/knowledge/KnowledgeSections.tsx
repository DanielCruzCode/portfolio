import { DataType, KnownTech } from '../../data'
import { FormattedMessageToHTML } from '../language/FormattedMessageToHTML.tsx'
import { useLocation } from 'react-router-dom'

interface Props {
  data: DataType
}

export function KnowledgeSections ({ data }: Props) {

  const { hash: currentHash } = useLocation()

  function getTechAnchorId (tech: KnownTech): string {
    return tech.id.slice(1)
  }

  return (
    <>
      {data.knownTechs.map((tech, index) => {
        const highlightStyle = currentHash === tech.id ? 'link-highlight' : ''
        return (
          <article
            className="known-tech-description mb-3"
            key={`known-tech-${index}`}
          >
            <a id={getTechAnchorId(tech)} className={`block mb-2 ${highlightStyle}`}>
              <h3>⚓{tech.name}</h3>
            </a>
            <p>
              <FormattedMessageToHTML id={tech.messageId}/>
            </p>
          </article>
        )
      })}
    </>
  )
}

export default KnowledgeSections
