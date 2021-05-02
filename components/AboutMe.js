import styles from '../styles/Layout.module.css'


const Aboutme = () => {
  return (
      <div id="aboutmecontained" className={styles.container}>
        <div className={styles.main}>
          <h1>This will be my story</h1>
        </div>
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
