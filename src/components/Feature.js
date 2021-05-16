import styles from "./Feature.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Feature = (props) => {
  return (
    <div className={styles.main_container}>
      <div>
        <FontAwesomeIcon icon="check-circle" size="2x" />
      </div>
      <div>{props.feature}</div>
    </div>
  );
};

export default Feature;
