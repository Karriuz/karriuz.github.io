import styles from './Contact.module.scss'

interface ContactLinkProps {
    imgSrc: string
    alt: string
    link: string
}

export const ContactLink = ({ link, alt, imgSrc }: ContactLinkProps) => {
    return (
        <a href={link} className={styles.contactLink} target='_blank' rel="noreferrer">
            <img alt={alt} src={imgSrc} className={styles.img} />
        </a>
    );
}