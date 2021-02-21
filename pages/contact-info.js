import MainContainer from "../Components/MainContainer";
import styles from '../styles/Contact.module.css'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from 'react';
import Head from 'next/head';

const Recaptcha  = require('react-recaptcha');

export default class Contact extends Component {    

    state = {
        email: '',
        description: ''
    }

    handleChange = (e, prop) => {
        let newState = {}
        newState[prop] = e.target.value;

        this.setState(newState)
    }

    submitHandler = async event => {
        event.preventDefault();
        const captcha = grecaptcha.getResponse();
        if(!captcha) {
            event.preventDefault();
            return alert('Invalid captcha');
        }

        const { email, description } = this.state;

        await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                captcha,
                email,
                description
            })
        });

        location.href = '/?email-sent'
    }

    callback = () => {
    }
    
    render() {
        return (
            <div>
                <Head>
                    {process.browser && <script src="https://www.google.com/recaptcha/api.js" async defer></script>}
                </Head>
                <MainContainer>
                    <h3 className={styles['contact-title']}>📧 Contact</h3>
                    <p className={styles['contact-paragraph']}>
                        If you want to contact me, above you have a nice form that will send me a <FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon> Discord message.
                    <br />
                    </p>
                    <form className={styles["contact-form"]} method="POST" action="/api/contact" id="contact-form" onSubmit={this.submitHandler}>
                        <input name="email" type="email" placeholder="Your e-mail" value={this.state.email} onChange={(e) => this.handleChange(e, 'email')} />

                        <textarea name="description" placeholder="Description" value={this.state.description} onChange={e => this.handleChange(e, 'description')}>

                        </textarea>
                        
                        {process.browser && <Recaptcha
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE}
                            onloadCallback={this.callback}
                        />}

                        <br/>
                        <button type="submit"> <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> Send</button>
                    </form>
                </MainContainer>
            </div>
        )
    }
}