import styles from "./Section1.module.css";
import mainImage from "../images/image1.jpg";

const Section1 = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.main_container_logo}>ShareKaro.</div>
      <div className={styles.main_container_description}>
        Simple, Intuitive File Sharing Website.
      </div>
      <div className={styles.main_container_image}>
        <img src={mainImage} />
      </div>
      <div className={styles.main_container_text}>
        Built for <span>you.</span>
      </div>
    </div>
  );
};

export default Section1;
