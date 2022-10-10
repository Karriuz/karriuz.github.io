import Popup from "reactjs-popup";
import styles from './Contact.module.scss'
import mail from '../../assets/mail.svg'

interface EmailPopupProps {

}

export const EmailPopup = () => {
    return (
        <Popup
            trigger={
                <button className={styles.contactLink}>
                    <img className={`${styles.img} ${styles.openEmailImg}`} src={mail} alt='Email icon' />
                </button>
            }
            position="top center"
            closeOnDocumentClick
            keepTooltipInside="div"
        >
            <div className={styles.emailPopup}>mac.jezewski@gmail.com</div>
        </Popup>
    );
}