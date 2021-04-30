import ScrollButton from './ScrollButton.js'
import styles from '../styles/Layout.module.css'
import stylestwo from '../styles/ScrollButton.module.css'

const FirstSection = () => {
  return (
    <div style={{backgroundColor: 'grey'}} className={styles.container}>
      <div className={`${styles.main} ${styles.bgText}`}>
        <h1>Hola! My name is Manuela Sanchez</h1>
        <p>and I am a Junior Software Engineer</p>
      </div>
      <div className={stylestwo.containingitall}>
        <p>click here and find out who I is</p>
        <ScrollButton></ScrollButton>
      </div>
    </div>
  )
}

export default FirstSection
