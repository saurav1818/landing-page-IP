import styles from "./Testimonial.module.css";

const Testimonial = (props) => {
  return (
    <div className={styles.main_container}>
      <img src={props.userImage} className={styles.image} />
      <div className={styles.review}>"{props.review}"</div>
    </div>
  );
};

export default Testimonial;
