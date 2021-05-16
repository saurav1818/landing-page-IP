import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.main_container}>
        <div>
          <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
        </div>
        <div>
          <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
        </div>
        <div>
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
        </div>
      </div>
      <div className={styles.text}>
        <p>© Copyright 2021 ShareKaro.</p>
      </div>
    </div>
  );
};

export default Footer;
