import styles from "./welcome.module.css";
import Image from "next/image";

export default function Welcome() {
  return (
    <div className={styles.mainBlock}>
      <div id="home" className={styles.welcomeContainer}>
        <div className={styles.titleCard}>
          <h2 className={styles.slogan}>
            Professionnalisme, Efficacité et rapidité
          </h2>
          <h3 className={styles.description}>
            Communication, Technologie, Importation chine : Votre succès sans
            frontières.
          </h3>
          <div className={styles.subTitleBlock}>
            <h3 className={styles.subTitle}>Des expert à vos services</h3>
          </div>
        </div>
      </div>
      <div className={styles.logoMobile}>
        <Image src="/assets/sps_logo.png" alt="logo sps" layout="fill" objectFit="cover"  />
      </div>
    </div>
  );
}
