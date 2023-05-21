import Link from 'next/link';
import styles from './Banner.module.css'

const NavBar = () => {
    return(
    <div>
        <Link href="/video" >
      <h1 className={styles.header}>Welcome to Movie Buff!</h1>
        </Link>
    </div>
    )
}

export default NavBar;