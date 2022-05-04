import React, { useEffect, useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import TextField from '../components/TextField';
import Button from '../components/Button';
import Card from '../components/Card'
import Prism from 'prismjs';

const code = (
  `\r
  import React, { useEffect, useRef } from 'react;'
  import type { NextPage } from 'next;'
  import Head from 'next/head;'
  import TextField from '../components/Text;
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  `
);

// Returns a highlighted HTML string
const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const StyleGuide: NextPage = () => {
  return (
    <>
      <Head>
        <title>React-useForm style-guide</title>
      </Head>
      <main>
        <Card autoPaddingY>
          <Button>Primary</Button>
          <Button c='second_1' >Second_1</Button>
          <Button c='second_2' >Second_2</Button>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder='placeholder'
          />
          <TextField
            id="select-basic"
            variant="outlined"
            select
            SelectProps={{
              native: true,
            }}
            placeholder='placeholder'
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Card>
        <br />
        <pre className='prism'><code className="language-js" dangerouslySetInnerHTML={{ __html: html }}></code></pre>
      </main>
    </>
  )
}

export default StyleGuide
