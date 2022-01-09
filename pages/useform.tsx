import * as React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useForm, Form } from '../components/form'

const UseForm: NextPage = () => {
  const form = useForm({
    initialValues: {
      date: '',
      text: ''
    },
    rules: {
      date: {
        required: true,
        isAllowed: {
          func: (value) => value !== '2021-10-25',
          msg: 'Not Allowed'
        }
      },
      text: {
        required: true,
      }
    }
  })

  const onSubmit = React.useCallback((value) => {
    console.log('value', value)
  }, [])

  return (
    <>
      <Head>
        <title>React-useForm style-guide</title>
      </Head>
      <main>
        <Form form={form} handlerSubmit={onSubmit}>
          <fieldset>
            <legend>Date</legend>
            <input
              type='date'
              name='date'
              onChange={form.handlerChange}
              value={form.values.date}
            />
            <br />
            <span>{form.errors.date}</span>
          </fieldset>
          <fieldset>
            <legend>Text</legend>
            <input
              type='text'
              name='text'
              onChange={form.handlerChange}
              value={form.values.text}
            />
            <br />
            <span>{form.errors.text}</span>
          </fieldset>
          <button type='submit'>
            SUBMIT
          </button>
        </Form>
      </main>
    </>
  )
}

export default UseForm
