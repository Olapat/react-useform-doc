import type { NextPage } from 'next'
import Head from 'next/head'
import ExampleBasic from '../components/ExampleBasic'
import TableIsAllowed from '../components/TableIsAllowed'
import TableProps from '../components/TableProps'
import TableRules from '../components/TableRules'
import PropertiesUseForm from '../components/PropertiesUseForm'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>React-useForm</title>
      </Head>
      <main>
        <h1>Welcome</h1>
        <p>Document react hook useForm Olapat</p>
        <h3>Example</h3>
        <section id='exp-basic'>
          <h4>Basic</h4>
          <ExampleBasic />
        </section>
        <h3>Props</h3>
        <section id="props">
          <h4>useForm</h4>
          <TableProps />
        </section>
        <section id="properties">
          <h4>Properties UseForm</h4>
          <PropertiesUseForm />
        </section>
        <section id="props-rules">
          <h4>Rule</h4>
          <TableRules />
        </section>
        <section id="props-isallowed">
          <h4>Rule is Allowed</h4>
          <TableIsAllowed />
        </section>
      </main>
    </>
  )
}

export default Home
