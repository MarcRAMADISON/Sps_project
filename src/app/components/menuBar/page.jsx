"use client";

import Image from "next/image";
import style from "./menubar.module.css";
import { useState } from "react";

const MenuBar = () => {
  const [open, setOpen] = useState(false);
  const redirect = (e) => {
    e.preventDefault();
    const target = document.getElementById("devis");

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleToggle = () => {
    setToggleMenuMobile((prev) => !prev);
  };

  return (
    <>
      <div className={style.menuContainer}>
        <Image
          src="/assets/sps_logo.png"
          alt="logo sps"
          width={100}
          height={80}
          className={style.logo}
        />
        <div className={style.menuItems}>
          <h3 className={style.menuItem}>Acceuil</h3>
          <h3 className={style.menuItem}>Nos services</h3>
          <h3 className={style.menuItem}>Qui sommes nous</h3>
        </div>
        <button className={style.devisButton} onClick={redirect}>
          Demander un devis
        </button>
      </div>
      <>
        <div className={style.menuContainerMobile}>
          <div
            className={`${style.menuBtn} ${open ? style.open : ""}`}
            onClick={() => setOpen(!open)}
          >
            <div className={style.bar}></div>
            <div className={style.bar}></div>
            <div className={style.bar}></div>
          </div>
        </div>
        {open && (
          <div className={style.menuBlock}>
            <h3 className={style.menuItem}>Acceuil</h3>
            <h3 className={style.menuItem}>Nos services</h3>
            <h3 className={style.menuItem}>Qui sommes nous</h3>
            <button className={style.devisButton} onClick={redirect}>
              Demander un devis
            </button>
          </div>
        )}
      </>
    </>
  );
};

export default MenuBar;
