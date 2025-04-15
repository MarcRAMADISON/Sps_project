"use client";

import Image from "next/image";
import styles from "./services.module.css";

const servicesList = [
  {
    logo: "/assets/call_service.png",
    title: "Call center",
    description:"Avec notre call center, vous bénéficiez d’une équipe réactive et formée pour gérer efficacement vos appels entrants et sortants, tout en assurant un support personnalisé à chaque client."
  },
  {
    logo: "/assets/dev_services.png",
    title: "Développement web",
    description:"Nous proposons des solutions de développement web sur-mesure, alliant performance, design moderne et expérience utilisateur optimale, pour répondre aux besoins spécifiques de votre entreprise."
  },
  {
    logo: "/assets/chine_services.png",
    title: "Chine services",
    description:"Nous vous offrons des services d'importation de Chine, vous permettant d'accéder à des produits de haute qualité à des prix compétitifs, tout en simplifiant les démarches logistiques et douanières."
  },
];

export default function Services() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nos services</h1>
      <div className={styles.servicesContainer}>
        {servicesList.map((service, index) => {
          return (
            <div key={index} className={styles.flip_container}>
              <div className={styles.flipper}>
                <div className={`${styles.serviceCard} ${styles.front}`}>
                  <Image
                    src={service.logo}
                    alt="logo service"
                    width={200}
                    height={200}
                  />
                  <h3 className={styles.titleService}>{service.title}</h3>
                </div>
                <div className={`${styles.serviceCard} ${styles.back}`}>
                  <p style={{color:"#000"}}>{service.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
