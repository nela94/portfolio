import FirstSection from './FirstSection.js'
import AboutMe from './AboutMe.js'
import Projects from './Projects.js'
import ContactMe from './ContactMe.js'
import NavBar from './NavBar.js'


import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <div>
      {children}
        <section id="section1">
          <FirstSection></FirstSection>
        </section>
        <section id="section2">
          <AboutMe></AboutMe>
        </section>
        <section id="section3">
          <Projects></Projects>
        </section>
        <section id="section5">
          <ContactMe></ContactMe>
        </section>
    </div>
  )
}

export default Layout
