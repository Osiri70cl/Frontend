"use client";
import styles from "./Error.module.scss";

const ErrorComponent = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.title}>Oups une erreur est survenue !</h1>
        <p className={styles.text}>
          Merci de réessayer ultérieurement, si l'erreur persiste n'hésitez pas
          à contacter le service dédié
        </p>
      </div>
    </div>
  );
};

export default ErrorComponent;
