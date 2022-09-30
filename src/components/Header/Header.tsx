import styles from './Header.module.scss'
import expand_icon from '../../assets/expand_icon.svg'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Maciej Jeżewski</h1>
            <span>aspiring front-end developer</span>
            <img className={styles.expandIcon} src={expand_icon} alt='Expand icon' />
        </header>
    );
}

export default Header;