import TabButton from '../tabButton/TabButton'
import { EXAMPLES } from '../../data';
import { useState } from 'react'
import Section from '../section/Section';
import Tabs from '../tabs/Tabs';

export default function Examples() {

    const [currentTab, setCurrentTab] = useState();


    const handleClick = (btn) => {
      setCurrentTab(btn)
    }
  
    let tabContent = <p>Please select topic.</p>
  
    if(currentTab) {
        tabContent =  <div id="tab-content">
        <h3>{EXAMPLES[currentTab].title}</h3>
        <p>{EXAMPLES[currentTab].description}</p>
      <pre>
        <code>
          {EXAMPLES[currentTab].code}
        </code>
      </pre>
      </div>
    }

    return (
        <Section id="examples" title="Examples">
          <Tabs 
          buttons={
            <>
              <TabButton onClick={() => handleClick('components')} isSelected={currentTab === 'components'}>Componentes</TabButton>
              <TabButton onClick={() => handleClick('jsx')} isSelected={currentTab === 'jsx'}>JXC</TabButton>
              <TabButton onClick={() => handleClick('props')} isSelected={currentTab === 'props'}>Props</TabButton>
              <TabButton onClick={() => handleClick('state')} isSelected={currentTab === 'state'}>State</TabButton>
            </>
          }>
             {tabContent}
          </Tabs>
        </Section>
    )
}