import ScrollButton from './ScrollButton.js'
import NavBar from './NavBar.js'
import styles from '../styles/Layout.module.css'

const FirstSection = () => {
  return (
    <div>
      <NavBar/>
        <div style={{backgroundColor: 'grey'}} className={styles.container}>
          <div className={`${styles.main} ${styles.bgText}`}>
            <h1>Hola! My name is Manuela Sanchez</h1>
            <p>and I am a Junior Software Engineer</p>
          </div>
          <div style={{paddingTop:'378px'}}>
            <p>click here and find out who I is</p>
            <ScrollButton></ScrollButton>
          </div>
        </div>
      </div>
  )
}

export default FirstSection
