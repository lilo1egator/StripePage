import { useState } from "react";
import { BlueButton } from "../../ui/Button";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Відправлений email:", email);
        setEmail(""); 
    };

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__top}>
                    <div>
                        <img src="/footer/logo-footer.svg" alt="logo footer" />
                        <p className={styles.footer__span}>Платформа пошуку перевізників та бронювання поїздок</p>
                    </div>
                    <div>
                        <h4 className={styles.footer__title}>Клієнтам</h4>
                        <ul className={styles.footer__list}>
                            <li><Link to="#">Головна</Link></li>
                            <li><Link to="#">Про нас</Link></li>
                            <li><Link to="#">Ціни</Link></li>
                            <li><Link to="#">Маршрути</Link></li>
                            <li><Link to="#">Політика приватності</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={styles.footer__title}>Перевізникам</h4>
                        <ul className={styles.footer__list}>
                            <li><Link to="#">Help Docs</Link></li>
                            <li><Link to="#">Особистий кабінет</Link></li>
                            <li><Link to="#">Оновлення</Link></li>
                            <li><Link to="#">Контакти</Link></li>
                        </ul>
                    </div>
                    <div className={styles.footer__form}>
                        <h4 className={styles.footer__title}>Зворотній зв’язок</h4>
                        <p>Маєш пропозиції щодо покращення сервісу - пиши нам!</p>
                        <form onSubmit={handleSubmit}>
                            <input
                                className={styles.footer__input}
                                name="email"
                                type="text"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <BlueButton content="Надіслати" type="submit" />
                        </form>
                        <div className={styles.footer__contact}>
                            <a className={styles.footer__contact_a} href="#">
                                <img src="/footer/call.svg" alt="" />
                                + 38 (073) 555 55 55
                            </a>
                            <a className={styles.footer__contact_a} href="#">
                                <img src="/footer/sms.svg" alt="" />
                                gmail@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.footer__divider}></div>
                <div className={styles.footer__bottom}>
                    <span className={styles.footer__copyright}>2024 @ Sprinters. All rights reserved.</span>
                    <ul className={styles.footer__socials}>
                        <li><a href="#"><img src="/footer/socials/Facebook.svg" alt="Facebook" /></a></li>
                        <li><a href="#"><img src="/footer/socials/Instagram.svg" alt="Instagram" /></a></li>
                        <li><a href="#"><img src="/footer/socials/Dribbble.svg" alt="Dribbble" /></a></li>
                        <li><a href="#"><img src="/footer/socials/LinkedIn.svg" alt="LinkedIn" /></a></li>
                        <li><a href="#"><img src="/footer/socials/Twitter.svg" alt="Twitter" /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}