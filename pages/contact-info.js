import MainContainer from "../Components/MainContainer";
import styles from '../styles/Contact.module.css'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Contact() {
    return(
        <div>
            <MainContainer>
                <h3 className={styles['contact-title']}>📧 Contact</h3>
                <p className={styles['contact-paragraph']}>
                    If you want to contact me, above you have a nice form that will send me a <FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon> Discord message.
                    <br/>
                    <span style={{color: 'red'}}>The form is not actually working yet, be patient.</span>
                </p>
                <form className={styles["contact-form"]}>
                    <input type="email" placeholder="Your e-mail"/>

                    <textarea placeholder="Description">

                    </textarea>

                    <button type="submit"> <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> Send</button>
                </form>
            </MainContainer>
        </div>
    )
}