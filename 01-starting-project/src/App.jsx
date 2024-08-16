
import {CORE_CONCEPTS, EXAMPLES} from './data'
import Header from './components/header/Header'
import Core from './components/core/Core'
import TabButton from './components/tabButton/TabButton'
import { useState } from 'react'

function App() {
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
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h1>Core concepts</h1>
            <ul>
              {CORE_CONCEPTS.map((concept) => {
                    return <Core key={concept.title} {...concept}/>
              })}
           
            </ul>
        </section>
        <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton onClick={() => handleClick('components')} isSelected={currentTab === 'components'}>Componentes</TabButton>
              <TabButton onClick={() => handleClick('jsx')} isSelected={currentTab === 'jsx'}>JXC</TabButton>
              <TabButton onClick={() => handleClick('props')} isSelected={currentTab === 'props'}>Props</TabButton>
              <TabButton onClick={() => handleClick('state')} isSelected={currentTab === 'state'}>State</TabButton>
            </menu>
            {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
