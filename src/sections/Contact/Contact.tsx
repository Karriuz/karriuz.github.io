import styles from './Contact.module.scss'
import { ContactForm } from './ContactForm';
import SMLink from './SMLink/SMLink';

export const Contact = () => {
    return (
        <section className={styles.contact} id='Contact'>
            <h2>Contact me</h2>
            <div className={styles.contactContent}>
                <section className={styles.formSection}>
                    <h3>Send me a message!</h3>
                    <div className={styles.formWrapper}>
                        <ContactForm />
                    </div>
                </section>
                <SMLink text='Github' />
                <SMLink text='LinkedIn' />
            </div>
        </section>
    );
}