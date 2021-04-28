import styles from '../styles/Layout.module.css'

import FirstSection from './FirstSection.js'
import Aboutme from './Aboutme.js'
import Projects from './Projects.js'
import Resume from './Resume.js'
import ContactMe from './ContactMe.js'

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {children}
        <section>
          <FirstSection></FirstSection>
        </section>
        <section>
          <Aboutme></Aboutme>
        </section>
        <section>
          <Projects></Projects>
        </section>
        <section>
          <Resume></Resume>
        </section>
        <section>
          <ContactMe></ContactMe>
        </section>
      </main>
    </div>
  )
}

export default Layout
