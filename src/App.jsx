import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/CoreConcept";
import HeaderSeperator from './components/Header'
import TabularButton from "./components/TabularButton";
import { EXAMPLES } from "./data";

function App() {
  function clickHandler(){
      console.log("I got clicked!")
  }

  return (
    <div>
      <HeaderSeperator />
      <main>
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
        </section>
        <section id="examples">
        <h2>Examples:</h2>
          <menu>
            <TabularButton onSalickshan={clickHandler}>COMPONENTS</TabularButton>
            <TabularButton onSalickshan={clickHandler}>JSX</TabularButton>
            <TabularButton onSalickshan={clickHandler}>PROPS</TabularButton>
            <TabularButton onSalickshan={clickHandler}>STATE</TabularButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
