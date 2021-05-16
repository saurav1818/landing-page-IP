import styles from "./Section4.module.css";
import image from "../images/image1.jpg";
import Testimonial from "./Testimonial";
const Section4 = () => {
  const testimonials = [
    { review: "Thank you ShareKaro, we highly recommend it!" },
    { review: "Easy to use, easy to control …" },
    {
      review:
        "I’d definitely recommend ShareKaro to anyone looking for file sharing",
    },
  ];
  return (
    <div className={styles.main_container}>
      <Testimonial userImage={image} review={testimonials[0].review} />
      <Testimonial userImage={image} review={testimonials[1].review} />
      <Testimonial userImage={image} review={testimonials[2].review} />
    </div>
  );
};

export default Section4;
