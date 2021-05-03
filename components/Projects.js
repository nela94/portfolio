import styles from '../styles/Project.module.css'
import ProjectCard from './ProjectCard.js'

const Projects = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Check Out My Work</h1>
        <ProjectCard></ProjectCard>
      </main>
    </div>
  )
}

export default Projects
