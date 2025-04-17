"use client";

import { useState } from "react";
import styles from "./devis.module.css";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

export default function Devis() {
  const [values, setValues] = useState({
    name: "",
    firstname: "",
    email: "",
    phone: "",
    entreprise: "",
    activity: "",
    typeService: "Call Center",
    description: "",
  });

  const [loading,setLoading]=useState(false)

  const handleChange = (e) => {
    e.preventDefault();

    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSend = () => {
    setLoading(true)
    try {
      const templateParams = {
        name: values.name,
        firstname: values.firstname,
        email: values.email,
        phone: values.phone,
        entreprise: values.entreprise,
        activity: values.activity,
        typeService: values.typeService,
        description: values.description,
      };

      emailjs
        .send(
          "service_ruvj04m",
          "template_sw9c337",
          templateParams,
          "r-H3xhILyW1CZVcjE"
        )
        .then(() => {
          Swal.fire({
            title: "Succès !",
            text: "Votre demande de devis a été bien envoyé !",
            icon: "success",
            confirmButtonText: "OK",
            timer: 8000,
            toast: true,
            position: "center",
          });

          setLoading(false)

        })
        .catch(() => {
          Swal.fire({
            title: "Erreur !",
            text: "Problème lors de l'envoie de votre devis !",
            icon: "error",
            confirmButtonText: "OK",
            timer: 8000,
            toast: true,
            position: "center",
          });
          setLoading(false)
        });
    } catch (error) {
      Swal.fire({
        title: "Erreur !",
        text: "Problème lors de l'envoie de votre candidature !",
        icon: "error",
        confirmButtonText: "OK",
        timer: 8000,
        toast: true,
        position: "center",
      });
      setLoading(false)
    }
  };

  const checkValidity =
    !!values.activity &&
    !!values.description &&
    !!values.email &&
    !!values.entreprise &&
    !!values.firstname &&
    !!values.name &&
    !!values.phone &&
    !!values.typeService &&
    !loading;

  return (
    <div id="devis" className={styles.devisContainer}>
      <h1 className={styles.title}>Demande de devis</h1>
      <div className={styles.formContainer}>
        <div className={styles.formBlock1}>
          <div>
            <h3 className={styles.inputTitle}>Nom*</h3>
            <input
              name="name"
              className={styles.input}
              onChange={handleChange}
              value={values.name}
            />
          </div>
          <div>
            <h3 className={styles.inputTitle}>Prénom*</h3>
            <input
              name="firstname"
              className={styles.input}
              onChange={handleChange}
              value={values.firstname}
            />
          </div>
          <div>
            <h3 className={styles.inputTitle}>E-mail*</h3>
            <input
              name="email"
              className={styles.input}
              onChange={handleChange}
              value={values.email}
            />
          </div>
          <div>
            <h3 className={styles.inputTitle}>Téléphone*</h3>
            <input
              name="phone"
              className={styles.input}
              onChange={handleChange}
              value={values.phone}
            />
          </div>
          <div>
            <h3 className={styles.inputTitle}>Nom de votre entreprise*</h3>
            <input
              name="entreprise"
              className={styles.input}
              onChange={handleChange}
              value={values.entreprise}
            />
          </div>
          <div>
            <h3 className={styles.inputTitle}>Sécteur d'activité*</h3>
            <input
              name="activity"
              className={styles.input}
              onChange={handleChange}
              value={values.activity}
            />
          </div>
          <button
            className={
              checkValidity ? styles.sendButton : styles.disabledButton
            }
            onClick={handleSend}
            disabled={!checkValidity}
          >
            Envoyer
          </button>
        </div>
        <div className={styles.formBlock2}>
          <div>
            <h3 className={styles.inputTitle}>Type de service*</h3>
            <select
              name="typeService"
              id="pet-select"
              className={styles.input}
              onChange={handleChange}
              value={values.typeService}
            >
              <option value="Call Center">Call Center</option>
              <option value="Developpement Web">Développement web</option>
              <option value="importation Chine">Importation Chine</option>
            </select>
          </div>
          <div style={{ marginTop: "30px" }}>
            <h3 className={styles.inputTitle}>Déscription de votre projet*</h3>
            <textarea
              name="description"
              className={styles.inputMultiple}
              rows={5}
              onChange={handleChange}
              value={values.description}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
