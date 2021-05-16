import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Section1.module.css";

const Section1 = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.main_container_logo}>ShareKaro.</div>
      <div className={styles.main_container_description}>
        Simple, Intuitive File Sharing Website.
      </div>
      <div className={styles.main_container_button}>
        <button className={styles.btn}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={["fab", "google-play"]}
          />
          Download
        </button>
      </div>
      <div className={styles.main_container_text}>
        Built for <span>you.</span>
      </div>
      <div className={styles.main_container_button}>
        <button className={styles.btn}>Get Started</button>
      </div>
    </div>
  );
};

export default Section1;
