import styles from '../styles/Layout.module.css'

const Aboutme = () => {
  return (
    <div id="aboutmecontained" className={styles.container}>
      <main className={styles.main}>
        <h1>This will be my story</h1>
      </main>
      <style jsx>
      {`
        #aboutmecontained {
            background-color: grey;
        }
      `}
      </style>
    </div>
  )
}

export default Aboutme
