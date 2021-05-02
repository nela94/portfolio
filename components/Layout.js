import FirstSection from './FirstSection.js'
import Aboutme from './Aboutme.js'
import Projects from './Projects.js'
import Resume from './Resume.js'
import ContactMe from './ContactMe.js'
import NavBar from './NavBar.js'


import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <div>
        <section id="section1">
          <FirstSection></FirstSection>
        </section>
        <section id="section2">
          <Aboutme></Aboutme>
        </section>
        <section id="section3">
          <Projects></Projects>
        </section>
        <section id="section4">
          <Resume></Resume>
        </section>
        <section id="section5">
          <ContactMe></ContactMe>
        </section>
    </div>
  )
}

export default Layout
