
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/ScrollButton.module.css'

const ScrollButton = () => {
  const arrows = "fa-arrow-down"
  return (
    <div>
      <div className={styles.circlecontainer}>
        <span className={styles.circle}>
          <div className={`${styles.fa}`}>
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </span>
        <span className={styles.pulse}></span>
      </div>
    </div>
  )
}

export default ScrollButton
