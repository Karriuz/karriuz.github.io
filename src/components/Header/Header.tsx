import styles from './Header.module.scss'
import expand_icon from '../../assets/expand_icon.svg'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Maciej Jeżewski</h1>
            <span>aspiring front-end developer</span>
            <a href='#Projects' className={styles.expandIcon}>
                <img src={expand_icon} alt='Expand icon' />
            </a>
        </header>
    );
}

export default Header;