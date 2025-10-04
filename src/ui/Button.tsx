import styles from "./styles/Button.module.scss";

interface BlueButtonProps {
    content: string;
    type: "button" | "reset" | "submit" | undefined
}

export function BlueButton({ content, type }: BlueButtonProps) {
    return (
        <button className={styles.button} type={type}>
            {content}
        </button>
    );
}
