import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>React-useForm</title>
      </Head>
      <main>
        <h1>Welcome</h1>
        <p>Document react hook useForm Olapat</p>

        <Link href='/style-guide'>
          <a>{'style-guide'}</a>
        </Link>
      </main>
    </>
  )
}

export default Home
