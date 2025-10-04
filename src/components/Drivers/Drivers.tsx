import { useState } from "react"
import styles from "./Drivers.module.scss"
import { drivers } from "../../data/data"

function getYearWord(years: number): string {
    const lastDigit = years % 10;
    const lastTwoDigits = years % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return 'років';
    }

    if (lastDigit === 1) {
        return 'рік';
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
        return 'роки';
    }

    return 'років';
}

export default function Drivers() {
    const [showAll, setShowAll] = useState(false)
    const visibleDrivers = showAll ? drivers : drivers.slice(0, 5)

    return(
        <section className={styles.drivers}>
            <div className="container">
                <div className={styles.drivers__head}>
                    <h2>Наші водії</h2>
                    <button 
                        onClick={() => setShowAll(!showAll)}
                        className={styles.drivers__btn}
                        >Усі водії ({drivers.length})</button>
                </div>

                <div className={styles.drivers__cards}>
                    {visibleDrivers.map(({id, name, experience, instagram, linkedin, img}) => (
                        <div key={id} className={styles.drivers__card}>
                            <img src={img} alt={name} className={styles.drivers__img}/>
                            <div className={styles.drivers__info}>
                                <span className={styles.drivers__name}>{name}</span>
                                <span className={styles.drivers__descr}>Досвід роботи: {experience} {getYearWord(experience)}</span>
                            </div>
                            <div className={styles.drivers__socials}>
                                <a href={instagram}><img src='/drivers/instagram.svg' alt="instagram" /></a>
                                <a href={linkedin}><img src='/drivers/linkedin.svg' alt="linkedin" /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}