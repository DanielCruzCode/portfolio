import data from '../../mocks/data.json'
import { FormattedMessageToHTML } from '../language/FormattedMessageToHTML.tsx'

export function ExperienceGrid () {
  return (
    <section className="experience-grid">
      {
        data.workingExperience.map((job) => {

          return (
            <div className="experience-grid__item" key={job.messageId}>
              <div className="experience-img">
                <img src={job.imgSrc} alt={job.imgAlt} width="100px" height="100px"/>
              </div>
              <FormattedMessageToHTML id={job.messageId}/>
            </div>
          )
        })
      }
    </section>
  )
}
