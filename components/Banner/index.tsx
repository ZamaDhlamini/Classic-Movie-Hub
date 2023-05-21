import Link from 'next/link';
import styles from './Banner.module.css'

const NavBar = () => {
    return(
    <div>
      <h1 className={styles.header}>Welcome to Movie Buff!</h1>
    </div>
    )
}

export default NavBar;