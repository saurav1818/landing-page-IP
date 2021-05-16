import styles from "./Section3.module.css";
import Feature from "./Feature";
const Section3 = () => {
  const features = [
    { feature: "Easy to use." },
    { feature: "Can share any file." },
    { feature: "Guaranteed to work." },
    { feature: "Also available in App." },
    { feature: "Fast and Reliable." },
    { feature: "Have good rating." },
  ];
  return (
    <div className={styles.main_container}>
      <div className={styles.main_container_1}>
        <Feature feature={features[0].feature} />
        <Feature feature={features[1].feature} />
        <Feature feature={features[2].feature} />
      </div>
      <div className={styles.main_container_1}>
        <Feature feature={features[3].feature} />
        <Feature feature={features[4].feature} />
        <Feature feature={features[5].feature} />
      </div>
    </div>
  );
};

export default Section3;
