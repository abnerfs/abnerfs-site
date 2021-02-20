import styles from './NavBar.module.css'
import { faHome, faDollarSign, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export const NavBar = (props) => {
    return (
        <div className={styles['container-navbar']}>
            <ul className={styles['ul-nav-bar']}>
                <li>
                    <Link
                        href="/"
                    >
                        <div>
                            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Home
                        </div>
                    </Link>
                </li>
                <li>
                    <Link
                            href="/donate"
                        >
                        <div>
                            <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon> Donate
                        </div>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/contact-info"
                    >
                        <div>
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Contact
                        </div>
                    </Link>
                </li>
                {/* <li>
                    <Link
                        href="/about"
                    >
                        <div>
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> About
                        </div>
                    </Link>
                </li> */}
            </ul>
        </div>
    )
}
