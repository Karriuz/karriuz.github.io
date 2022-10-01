import styles from './Contact.module.scss'
import { ContactForm } from './ContactForm';
import { ContactLink } from './ContactLink';
import LiIcon from '../../assets/LiIcon.png'
import mail from '../../assets/mail.svg'
import GithubIcon from '../../assets/GitHubIcon.png'
import { EmailPopup } from './EmailPopup';

export const Contact = () => {
    return (
        <section className={styles.contact} id='Contact'>
            <h2>Contact</h2>
            <div className={styles.contactContent}>
                <section className={styles.formSection}>
                    <h3>Send me a message!</h3>
                    <div className={styles.formWrapper}>
                        <ContactForm />
                    </div>
                </section>
                <div className={styles.linkContainer}>
                    <ContactLink link='https://github.com/Karriuz/' imgSrc={GithubIcon} alt='Github logo' />
                    <ContactLink link='#' imgSrc={LiIcon} alt='LinkedIn Logo' />
                    <EmailPopup />
                </div>
            </div>
        </section>
    );
}