import styles from "./welcome.module.css";

export default function Welcome() {
  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.titleCard}>
        <h2 className={styles.slogan}>
          Professionnalisme, Efficacité et rapidité
        </h2>
        <h3 className={styles.description}>
          Communication, Technologie, Importation chine : Votre succès sans
          frontières.
        </h3>
        <div className={styles.subTitleBlock}>
          <h3 className={styles.subTitle}>
            Des expert à vos services
          </h3>
        </div>
      </div>
    </div>
  );
}
