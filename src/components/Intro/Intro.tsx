import Breadcrumbs from "../../ui/Breadcrumbs"
import styles from "./Intro.module.scss"
import {benefits} from '../../data/data'

function Intro() {
    return(
        <section className={styles.intro}>
            <div className="container">
                <Breadcrumbs/>

                <div className={styles.intro__container}>
                    <img className={styles.intro__logo} src="/intro/bus.png" alt="bus" />
                    <div className={styles.intro__content}>
                        <div className={styles.intro__flex}>
                            <h1>Stripe</h1>
                            <span className={styles.intro__trips}>43 Поїздок</span>
                        </div>
                        <div className={`${styles.intro__flex} ${styles.intro__contact}`}>
                            <div className={styles.intro__flex}>
                                <img src="/intro/network-icon.svg" alt="network-icon" />
                                <a href="https://stripe.com">https://stripe.com</a>
                            </div>
                            <div className={styles.intro__flex}>
                                <img src="/intro/phone-icon.svg" alt="phone-icon" />
                                <a href="+38 (073) 555 55 55">+38 (073) 555 55 55</a>
                            </div>
                        </div>
                        <div>
                            <ul className={styles.intro__list}>
                                {
                                    benefits.map(benefit => {
                                        return(
                                            <li key={benefit.id} className={`${styles.intro__item} ${styles.intro__flex}`}>
                                                <div className={styles.intro__list_bg}>
                                                    <img src={benefit.img} alt={benefit.title} />
                                                </div>
                                                <div className={styles.intro__text}>
                                                    <span className={styles.intro__text_title}>{benefit.title}</span>
                                                    <span className={styles.intro__text_descr}>{benefit.label}</span>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro