import React, { useCallback } from 'react'
import Prism from 'prismjs';
import Card from './Card'
import { Form, useForm } from '../components/form'

const code = (
  `\r
  import React, { useCallback } from 'react'
  import { useForm, Form } from '@olapat/react-useform'

  const Basic = () => {
    const form = useForm({
      initialValues: {
        username: '',
        password: '',
        repassword: ''
      },
      rules: {
        username: {
          required: true
        },
        password: {
          required: true,
          isAllowed: {
            func: (value) => /^(?=.*\d)(?=.*([a-z]|[ก-๙]))(?=.*[A-Z])(?=.*[a-zA-Zก-๙]).{8,}/.test(value),
            msg: 'Password is not format'
          }
        },
        repassword: {
          required: true,
          isAllowed: {
            func: (value, values) => value === values.password,
            msg: 'Password is not match'
          }
        }
      }
    })

    const { values, handlerChange, errors } = form

    const handlerSubmit = useCallback((values) => {
      console.table(values);
    }, [])

    return (
      <Form form={form} handlerSubmit={handlerSubmit}>
        <fieldset>
          <legend>Username</legend>
          <input
            type='text'
            name='username'
            onChange={handlerChange}
            value={values.username}
          />
          <br />
          <span>{errors.username}</span>
        </fieldset>
        <fieldset>
          <legend>Password</legend>
          <input
            type='password'
            name='password'
            onChange={handlerChange}
            value={values.password}
          />
          <br />
          <span>{errors.password}</span>
        </fieldset>
        <fieldset>
          <legend>Confirm Password</legend>
          <input
            type='password'
            name='repassword'
            onChange={handlerChange}
            value={values.repassword}
          />
          <br />
          <span>{errors.repassword}</span>
        </fieldset>
        <button type='submit'>
          Submit
        </button>
      </Form>
    )
  }
  `
);

const ExampleBasic: React.FC = () => {
  const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      repassword: ''
    },
    rules: {
      username: {
        required: true
      },
      password: {
        required: true,
        isAllowed: {
          func: (value) => /^(?=.*\d)(?=.*([a-z]|[ก-๙]))(?=.*[A-Z])(?=.*[a-zA-Zก-๙]).{8,}/.test(value),
          msg: 'Password is not format'
        }
      },
      repassword: {
        required: true,
        isAllowed: {
          func: (value, values) => value === values.password,
          msg: 'Password is not match'
        }
      }
    }
  })

  const { values, handlerChange, errors } = form

  const handlerSubmit = useCallback((values) => {
    console.table(values);
  }, [])

  return (
    <div>
      <Card autoPadding>
        <Form form={form} handlerSubmit={handlerSubmit}>
          <fieldset>
            <legend>Username</legend>
            <input
              type='text'
              name='username'
              onChange={handlerChange}
              value={values.username}
            />
            <br />
            <span>{errors.username}</span>
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <input
              type='password'
              name='password'
              onChange={handlerChange}
              value={values.password}
            />
            <br />
            <span>{errors.password}</span>
          </fieldset>
          <fieldset>
            <legend>Confirm Password</legend>
            <input
              type='password'
              name='repassword'
              onChange={handlerChange}
              value={values.repassword}
            />
            <br />
            <span>{errors.repassword}</span>
          </fieldset>
          <button type='submit'>
            Submit
          </button>
        </Form>
      </Card  >
      <pre className='prism'><code className="language-js" dangerouslySetInnerHTML={{ __html: html }}></code></pre>
    </div>
  )
}

export default ExampleBasic
