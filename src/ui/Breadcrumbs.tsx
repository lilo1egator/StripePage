import styles from "./styles/Breadcrumbs.module.scss";

export default function Breadcrumbs() {
    return(
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <ol>
                <li className={styles.breadcrumbs__item}><a href="#">Головна</a></li>
                <li className={styles.breadcrumbs__item}><a href="#">Профіль перевізника</a></li>
                <li className={styles.breadcrumbs__item}><a href="/">Stripe</a></li>
            </ol>
        </nav>
    )
}