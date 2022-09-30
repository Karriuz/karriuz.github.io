import styles from './SMLink.module.scss'

interface SMLinkProps {
    imgSrc?: string
    alt?: string
    link?: string
    text: string
}

const SMLink = ({ text, link, alt, imgSrc }: SMLinkProps) => {
    return (
        <a href="#" className={styles.link}>
            {/* <img alt='' src={} /> */}
            <div className={styles.img}></div>
            {text}
        </a>
    );
}

export default SMLink;