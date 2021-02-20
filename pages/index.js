import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>abnerfs.dev</title>
      </Head>


      <h1 className={styles["main-link"]}>abnerfs.dev</h1>
      <p>This site is a work in progress... awesome stuff is about to be deployed anytime soon (stay positive) </p>

      <div className={styles["container-links"]}>
        <a href="https://github.com/abnerfs" className={styles["social-link"]}>
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> abnerfs
        </a>
        <a href="https://www.instagram.com/abnerfs96/" className={styles["social-link"]}>
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> abnerfs96
        </a>
        <a href="https://www.youtube.com/channel/UCgJY9EgxDscvVGbXzftiMBg" className={styles["social-link"]}>
            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon> Abner Tech
        </a>
      </div>
    </div>
  )
}
