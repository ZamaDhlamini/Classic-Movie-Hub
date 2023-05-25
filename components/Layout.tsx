import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from './layout.module.css';


type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className={styles.container}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className={styles.header}>
  <nav>
    <div className={styles.navMain}>
      <div className={styles.logo}>ZMovies</div>
      <div className={styles.links}>
        <Link href="/">Movies</Link> | <Link href="/movieList">Your Movies</Link> |{' '}
        {/* <Link href="/users"></Link> |{' '} */}
        <a href="/faq">FAQ</a>
      </div>
    </div>
  </nav>
</header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
