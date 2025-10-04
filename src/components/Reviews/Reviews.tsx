import { useState, useEffect } from "react";
import { BlueButton } from "../../ui/Button";
import styles from "./Reviews.module.scss";
import { reviews } from '../../data/data';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(2);

  // Визначаємо кількість слайдів залежно від ширини вікна
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // мобільна ширина
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
      }
    };

    handleResize(); // щоб встановити правильне значення відразу
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(reviews.length / slidesToShow);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className={styles.reviews}>
      <div className="container">
        <div className={styles.reviews__container}>
          <div>
            <h2>Що <span>кажуть люди?</span></h2>
            <p className={styles.reviews__descr}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <BlueButton content={'Залишити відгук'} type="button" />
          </div>

          <div className={styles.reviews__slider}>
            <div
              className={styles.reviews__slides}
              style={{
                transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 32}px))`
              }}
            >
              {reviews.map((review) => (
                <div 
                    className={styles.reviews__slide} 
                    key={review.id} 
                    style={{
                        flex: slidesToShow === 1
                            ? "0 0 100%" 
                            : `1 0 calc(${100 / slidesToShow}% - 16px)` 
                    }}>
                  <div className={styles.reviews__slide_text}>
                    <div className={styles.reviews__slide_head}>
                      <img className={styles.reviews__slide_avatar} src={review.src} alt={review.name} />
                      <div className={styles.reviews__slide_info}>
                        <h3 className={styles.reviews__name}>{review.name}</h3>
                        <p className={styles.reviews__location}>{review.location}</p>
                        <p className={styles.reviews__date}>{review.date}</p>
                      </div>
                    </div>
                    <p className={styles.reviews__text}>{review.text}</p>
                  </div>
                  <div className={styles.reviews__stars}>
                    {Array.from({ length: review.stars }).map((_, index) => (
                      <img key={index} src="/reviews/star.svg" alt="star" />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.reviews__dots}>
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${currentIndex === index ? styles.active : ""}`}
                  onClick={() => goToSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
