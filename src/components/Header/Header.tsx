import { useState } from "react";
import { BlueButton } from "../../ui/Button";
import { Link } from "react-router-dom";
import { nav } from "../../data/data";

import styles from "./Header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <div className="container">
        <Link to="/"><img src="/Logo.svg" alt="Logo" /></Link>

        {/* Гамбургер кнопка */}
        <button
          className={`${styles.header__burger} ${menuOpen ? styles.header__burger_active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
            <span></span>
            <span></span>
            <span></span>
        </button>

        <ul className={`${styles.header__links} ${menuOpen ? styles.header__links_open : ''}`}>
            {nav.map(link => (
                <li
                  key={link.id}
                  className={`${styles.header__link} ${link.id === "profile" ? styles.header__link_active : ""}`}
                >
                    <Link to={link.href}>{link.label}</Link>
                </li>
            ))}

            <div className={styles.header__btns_mobile}>
                <a href="#" className={styles.header__link_btn}>Створити профіль</a>
                <span className={styles.header__divider}></span>
                <BlueButton content={'Увійти'} type='button'/>
            </div>
        </ul>

        <div className={styles.header__btns}>
          <a href="#" className={styles.header__link_btn}>Створити профіль</a>
          <span className={styles.header__divider}></span>
          <BlueButton content={'Увійти'} type='button'/>
        </div>
      </div>
    </header>
  );
}
