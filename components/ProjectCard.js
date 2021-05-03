import style from '../styles/ProjectCard.module.css'

const ProjectCard = () => {
  return (
    <div className={style.container}>
        <main className={style.grid}>
        <article classname={style.articleName}>
          <img src="/Petme.png" alt="Sample photo"/>
          <div className={style.text}>
            <h3>PetMe</h3>
            <p>Application for potential pet owners to browse and find an available animal for adoption across various agencies. Used
            react-swipeable for users to easily swipe from pet to pet and get real adoptable pet information.</p>
            <a className={style.links} href="https://www.youtube.com/watch?v=FwgQTM4SK8o&feature=youtu.be">Demo      </a>
            <a className={style.links} href="https://github.com/nela94/PetMe">Github</a>
          </div>
        </article>
        <article classname={style.articleName}>
          <img src="/morningmuffins.png" alt="Sample photo"/>
          <div className={style.text}>
            <h3>Muffin Mornings</h3>
            <p>E-commerce platform for consumers to purchase pastries of their choice and provide an online review</p>
            <br></br>
            <br></br>
            <a className={style.links} href="https://www.youtube.com/watch?v=5ZUTU0HLilU&feature=youtu.be">Demo     </a>
            <a className={style.links} href="https://github.com/KrystleJustine/MuffinMornings/tree/manuela-2">Github</a>
          </div>
        </article>
        <article classname={style.articleName}>
          <img src="/fridakhalo.png" alt="Sample photo"/>
          <div className={style.text}>
            <h3>Project0(Frida Kahlo)</h3>
            <p>Informational website about Frida Kahlo and her paintings.</p>
            <br></br>
            <br></br>
            <a className={style.links} href="https://nela94.github.io/Project0/">Website      </a>
            <a className={style.links} href="https://github.com/nela94/Project0">Github</a>
          </div>
        </article>
        <article classname={style.articleName}>
          <img src="/realestateweb.png" alt="Sample photo"/>
          <div className={style.text}>
            <h3>Big Apple Luxury Living</h3>
            <p>Real Estate website for realtor Shelby Coleman designed to give information about NYC living and promote her business.</p>
            <a className={style.links} href="https://www.youtube.com/watch?v=FwgQTM4SK8o&feature=youtu.be">Demo      </a>
          </div>
        </article>
      </main>
    </div>
  )
}

export default ProjectCard
