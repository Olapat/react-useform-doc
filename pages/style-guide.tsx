import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '../components/Button';
import Card from '../components/Card'

const StyleGuide: NextPage = () => {
  return (
    <div>
      <Head>
        <title>React-useForm style-guide</title>
      </Head>
      <main>
        <Card autoPaddingY>
          <Button>Primary</Button>
          <Button c='second_1' >Second_1</Button>
          <Button c='second_2' >Second_2</Button>
        </Card>
      </main>
    </div>
  )
}

export default StyleGuide
