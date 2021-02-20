import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { NavBar } from '../Components/Navbar';
import { faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HrFull } from '../Components/HrFull'


export default function MainContainer(props) {
    return (
        <div>
            <Head>
                <title>@abnerfs</title>
            </Head>

            <div className={styles.container}>
                <h1 className={styles["main-title"]}>abnerfs.dev</h1>
                <h2 className={styles["sub-title"]}>"A guy that writes code that machines (and humans sometimes) can read."</h2>
                <NavBar />
                <HrFull />

                {props.children}

                <div className={styles["container-links"]}>
                    <a href="https://github.com/abnerfs" target="_blank" className={styles["social-link"]}>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> abnerfs
                    </a>
                        <a href="https://www.instagram.com/abnerfs96/" target="_blank" className={styles["social-link"]}>
                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> abnerfs96
                    </a>
                        <a href="https://www.youtube.com/channel/UCgJY9EgxDscvVGbXzftiMBg?sub_confirmation=1" target="_blank" className={styles["social-link"]}>
                            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon> Abner Tech
                    </a>
                </div>
            </div>
        </div>
    )
}