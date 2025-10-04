import { useState } from "react";
import styles from "./Country.module.scss"
import { country } from "../../../data/data";


export default function Country() {
    const [showAll, setShowAll] = useState(false)

    const visibleCountry = showAll ? country : country.slice(0, 5)

    return (
        <div className={styles.country}>
            <h2>Обслуговуємо країни</h2>

            <div className={styles.country__list}>
                {visibleCountry.map(({ id, title, Flag }) => (
                    <div
                      key={id}
                      className={styles.country__item}
                    >
                        <Flag title={title} className={styles.country__flag} />
                        <span className={styles.country__title}>{title}</span>
                    </div>
                ))}
            </div>

            <button 
                onClick={() => setShowAll(!showAll)}
                className={styles.country__btn}>
                {showAll ? "Сховати" : "Усі країни"}
                <img className={`${styles.country__arrow} ${showAll ? styles.open : ''}`} src="/bus/down.svg" alt="arrow down" />
            </button>
        </div>
    )
}
