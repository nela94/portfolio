import Link from 'next/link'
import Layout from '../components/Layout'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Layout</Link>
        </li>
        <li>
          <Link href='/'>About Me</Link>
        </li>
        <li>
          <Link href='/'>Projects</Link>
        </li>
        <li>
          <Link href='/'>Resume</Link>
        </li>
        <li>
          <Link href='/'>Contact Me</Link>
        </li>
      </ul>
    <nav>
  )
}

export default NavBar
