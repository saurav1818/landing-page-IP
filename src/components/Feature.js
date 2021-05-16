import styles from "./Feature.module.css";

const Feature = (props) => {
  return <div className={styles.main_container}>{props.feature}</div>;
};

export default Feature;
