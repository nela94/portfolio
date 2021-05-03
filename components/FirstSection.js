import ScrollButton from './ScrollButton.js'
import NavBar from './NavBar.js'
import { motion } from 'framer-motion';
import styles from '../styles/Layout.module.css'

const FirstSection = () => {
  return (
    <div>
      <NavBar/>
          <div style={{backgroundColor: 'grey'}} className={styles.container}>
            <div className={`${styles.main} ${styles.bgText}`}>
            <motion.div initial="hidden" animate="visible" variants={{
                  hidden: {
                    scale: .8,
                    opacity: 0
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: .4
                    }
                  },
                }}>
                <h1>Hola! My name is Manuela Sanchez</h1>
                <p>and I am a Junior Software Engineer</p>
              </motion.div>
            </div>
          <div style={{paddingTop:'378px'}}>
            <p>Click Below And Learn More About Me</p>
            <ScrollButton></ScrollButton>
          </div>
        </div>
      </div>
  )
}

export default FirstSection
