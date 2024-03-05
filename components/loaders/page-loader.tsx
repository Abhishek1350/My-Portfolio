import styles from "./page-loader.module.css";

export function PageLoader() {
    return (
        <div className={styles.container}>
            <div className={styles.loading}>
                <div className={styles.spinner}>
                    <div className={styles.spinner}>
                        <div className={styles.spinner}>
                            <div className={styles.spinner}>
                                <div className={styles.spinner}>
                                    <div className={styles.spinner}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
