import Core from '../core/Core'
import { CORE_CONCEPTS } from '../../data'
import Section from '../section/Section'

export default function CoreList() {
    return (
        <Section id="core-concepts" title="Core concepts">
          <ul>
            {CORE_CONCEPTS.map((concept) => {
                  return <Core key={concept.title} {...concept}/>
            })}
         
          </ul>
      </Section>
    )
}