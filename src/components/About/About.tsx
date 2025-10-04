
import styles from "./About.module.scss"
import Calendar from "./Calendar/Calendar"
import Country from "./Сountry/Country"

export default function About() {
    return(
        <div className={`container ${styles.layout} about`}>
            <main>
                <div className={styles.about__descr}>
                    <h2>Опис перевізника</h2>
                    <p className={styles.about__text}>
                        Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.
                    </p>
                </div>
                <div className={styles.about__socials}>
                    <h2>Ми у соц. мережах</h2>
                    <div className={styles.about__links}>
                        <a href="#" className={styles.about__link}>
                            <img src="/bus/twitter.svg" alt="twitter logo" />
                            <span>twitter.com/stripe</span>
                        </a>
                        <a href="#" className={styles.about__link}>
                            <img src="/bus/facebook.svg" alt="facebook logo" />
                            <span>facebook.com/StripeHQ</span>
                        </a>
                    </div>
                    <div className={styles.about__images}>
                        <img src="/bus/1.png" alt="Bus image" />
                        <img src="/bus/2.png" alt="Bus image" />
                        <img src="/bus/3.png" alt="Bus image" />
                    </div>
                </div>
            </main>

            <aside>
                <Country/>
                <Calendar/>
            </aside>
        </div>
    )
}