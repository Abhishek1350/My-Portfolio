import styles from "./common-loader.module.css";


export function CommonLoader() {
    return (
        <div className={styles.loader}>
            <span></span>
        </div>
    );
}
