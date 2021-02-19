import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>abnerfs.dev</title>
      </Head>

      <h1>abnerfs.dev</h1>
      <p>This site is a work in progress... awesome stuff is about to be deployed anytime soon (I hope) </p>
      <a href="https://github.com/abnerfs">My Github</a>
    </div>
  )
}
