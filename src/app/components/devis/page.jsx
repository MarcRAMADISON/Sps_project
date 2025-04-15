import styles from "./devis.module.css";

export default function Devis() {
  return (
    <div id="devis" className={styles.devisContainer}>
      <h1 className={styles.title}>Demande de devis</h1>
      <div className={styles.formContainer}>
        <div className={styles.formBlock1}>
          <div>
            <h3 className={styles.inputTitle}>Nom</h3>
            <input name="name" className={styles.input} />
          </div>
          <div>
            <h3 className={styles.inputTitle}>Prénom</h3>
            <input name="name" className={styles.input} />
          </div>
          <div>
            <h3 className={styles.inputTitle}>E-mail</h3>
            <input name="name" className={styles.input} />
          </div>
          <div>
            <h3 className={styles.inputTitle}>Téléphone</h3>
            <input name="name" className={styles.input} />
          </div>
          <div>
            <h3 className={styles.inputTitle}>Nom de votre entreprise</h3>
            <input name="name" className={styles.input} />
          </div>
          <div>
            <h3 className={styles.inputTitle}>Sécteur d'activité</h3>
            <input name="name" className={styles.input} />
          </div>
          <button className={styles.sendButton}>Envoyer</button>
        </div>
        <div className={styles.formBlock2}>
          <div>
            <h3 className={styles.inputTitle}>Type de service</h3>
            <select name="pets" id="pet-select" className={styles.input}>
              <option value="callCenter">Call Center</option>
              <option value="devWeb">Développement web</option>
              <option value="importationChine">Importation Chine</option>
            </select>
          </div>
          <div style={{marginTop:'30px'}}>
            <h3 className={styles.inputTitle}>Déscription de votre projet</h3>
            <textarea  name="name" className={styles.inputMultiple} rows={5}/>
          </div>
        </div>
      </div>
    </div>
  );
}
