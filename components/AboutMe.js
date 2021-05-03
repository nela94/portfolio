import styles from '../styles/AboutMe.module.css'


const Aboutme = () => {
  return (
      <div id="aboutmecontained" className={styles.container}>
        <div className={styles.main}>
          <h1>About Me!</h1>
          <p>I am a native New Yorker, but also claim my Honduran and Salvadoran roots!</p>
        </div>
      </div>
  )
}

export default Aboutme
