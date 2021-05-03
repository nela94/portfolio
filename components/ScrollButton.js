
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { Link, animateScroll as scroll } from "react-scroll";
import styles from '../styles/ScrollButton.module.css'

const ScrollButton = () => {

  return (
    <div className={styles.circlecontainer}>
      <span className={styles.circle}>
        <FontAwesomeIcon  className={`${styles.fa}`} icon={faArrowDown} />
      </span>
      <span className={styles.pulse}></span>
    </div>
  )
}

export default ScrollButton
