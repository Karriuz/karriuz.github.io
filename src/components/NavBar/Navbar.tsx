import styles from './Navbar.module.scss'

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <a href='#'>Projects <hr /></a>
            <a href='#'>About Me<hr /></a>
            <a href='#'>Contact <hr /></a>
        </nav>
    );
}

export default NavBar;