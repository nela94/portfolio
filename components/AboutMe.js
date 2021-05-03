import Image from 'next/image'
import styles from '../styles/AboutMe.module.css'


const Aboutme = () => {
  return (
      <div id="aboutmecontained" className={styles.container}>
        <div className={styles.main}>
        <h1 style={{textAlign:'center', paddingBottom:'57px',paddingTop: '40px'}}>All About Me</h1>
        <div className={styles.row}>
          <div className={styles.column} style={{paddingLeft: '256px'}}>
            <Image src="/manu.jpeg" width={300} height={400} alt="pic of me" />
          </div>
          <div style={{paddingRight: '210px'}} className={styles.column}>
            <p style={{marginTop: '90px'}}>I was born and raised in Queens, New York but I also claim my Honduran and Salvadoran roots!
              Before getting into programming I was in the Real Estate industry, where I started as a receptionist
              and ended up being an agent, all in the span of four years. I loved interacting with all the different type of people
              I encountered but the love of technology always called my name. I joined a bootcamp where I learned Ruby on Rails,
              React, Javascript, Redux, SQL, CSS and HTML. I have since then continued learning and now I made a website using a new
              framework, Next.js. Which is this one! Scroll below to check out the rest of my work and make sure to connect with me!
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Aboutme
