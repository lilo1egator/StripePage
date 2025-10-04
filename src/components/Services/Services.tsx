import styles from "./Services.module.scss"
import { services } from "../../data/data"

export default function Services() {
    return (
        <section className={styles.services}>
            <div className="container">
                <h2>Сервіс</h2>
                <span className={styles.services__descr}>Найкращі умови для вашого комфорту</span>

                <div className={styles.services__items}>
                    {services.map(({id, title, img}) => (
                        <div className={styles.services__item} key={id}>
                            <img src={img} alt={title} />
                            <h3 className={styles.services__title}>{title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}