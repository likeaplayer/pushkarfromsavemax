// pages/_app.js
import '../styles/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Or if you use png */}
        {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
        <title>Pushkar Sindhu</title> {/* You can set page title here too */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}
