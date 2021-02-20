import MainContainer from "../Components/MainContainer";
import styles from '../styles/Donate.module.css'
import { faPaypal, faBitcoin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Contact() {
    return(
        <div>
            <MainContainer>
                <h3 className={styles['donate-title']}>💲 Donation</h3>
                <p className={styles['donate-paragraph']}>
                    I don't know why you would want to donate to me but I'm not going to stop you 🙃
                </p>
                <div className={styles['donate-container']}>
                    <ul>
                        <li>
                            <strong>🇧🇷 Pix <i>(BRL only)</i></strong>: <input type="text" value="ab0e8ee8-9ecd-458b-aa0c-f5b996118f17" readonly/>
                        </li>
                        <li>
                            <strong><FontAwesomeIcon icon={faPaypal}></FontAwesomeIcon> PayPal (USD only)</strong>: <a href="https://www.paypal.com/donate?hosted_button_id=63DAPH3L9MP8Y" target="_blank">
                                <button class={styles['paypal-donate']}> 
                                    Donate
                                </button>
                            </a>
                        </li>
                        <li>
                            <strong><FontAwesomeIcon icon={faBitcoin}></FontAwesomeIcon> Bitcoin</strong>: <input type="text" value="1P7jYGARiH5e2i1T8qet51LaCxmphkLExs" readonly/>
                        </li>
                    </ul>
                </div>
           
            </MainContainer>
        </div>
    )
}