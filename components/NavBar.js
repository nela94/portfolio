import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.uldesign}>
        <li className={styles.lidesign}>
          <Link href='/'>Home</Link>
        </li>
        <li className={styles.lidesign}>
          <Link href='/'>About Me</Link>
        </li>
        <li className={styles.lidesign}>
          <Link href='/'>Projects</Link>
        </li>
        <li className={styles.lidesign}>
          <Link href='/'>Resume</Link>
        </li>
        <li className={styles.lidesign}>
          <Link href='/'>Contact Me</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
