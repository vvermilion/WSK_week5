import Example from "../components/Example"
import HooksExample from "../components/HooksExample"
import TestForm from "../components/TestForm"

const Demo = () => {

  return (
    <div className="demo-page">
      <section className="demo-card">
        <h2>Hooks demo</h2>
        <Example />
      </section>
      <section className="demo-card">
        <h2>Hooks example sivu</h2>
        <HooksExample />
      </section>
      <section className="demo-card demo-card--form">
        <h2>Form example sivu</h2>
        <TestForm />
      </section>
    </div>
  )
}

export default Demo
