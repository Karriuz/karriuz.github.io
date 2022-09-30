import styles from './Navbar.module.scss'
import { useRef } from 'react'
import NavbarAnchor from './NavbarAnchor'

const NavBar = () => {
    const navRef = useRef<HTMLElement>(null!)
    let prevScrollY = window.scrollY

    window.addEventListener('scroll', () => {
        if (navRef.current === null) return

        if (prevScrollY < window.scrollY) {
            navRef.current.classList.add(styles.navHidden)
        }
        else {
            navRef.current.classList.remove(styles.navHidden)
        }

        prevScrollY = window.scrollY
    })

    return (
        <nav className={styles.nav} ref={navRef}>
            <NavbarAnchor to='Projects' text='Projects' />
            <NavbarAnchor to='About' text='About me' />
            <NavbarAnchor to='Contact' text='Contact' />
        </nav>
    );
}

export default NavBar;