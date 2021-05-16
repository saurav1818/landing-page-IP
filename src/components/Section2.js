import styles from "./Section2.module.css";
import image2 from "../images/image2.jpg";

const Section2 = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.main_container_heading}>
        Hi there, we're ShareKaro.
      </div>
      <div className={styles.main_container_summary}>
        <div className={styles.main_container_summary_img}>
          <img className={styles.img} src={image2} />
        </div>
        <div className={styles.main_container_summary_text}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </div>
      </div>
    </div>
  );
};

export default Section2;
