"use client";

import Image from "next/image";
import style from "./menubar.module.css";
import { useState } from "react";

const MenuBar = () => {
  const [open, setOpen] = useState(false);
  const redirect = (e,type) => {
    e.preventDefault();
    if( type === 'DEVIS'){
      const devis = document.getElementById("devis");

      devis.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }else if (type = 'HOME'){
      const home = document.getElementById("home");

      home.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }else if (type === 'SERVICES'){
      const services = document.getElementById("services");

      services.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (type === 'ABOUT'){
      const about = document.getElementById("about");

      about.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
   
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
          <h3 className={style.menuItem} onClick={(e)=>redirect(e,'HOME')}>Acceuil</h3>
          <h3 className={style.menuItem} onClick={(e)=>redirect(e,'SERVICES')}>Nos services</h3>
          <h3 className={style.menuItem} onClick={(e)=>redirect(e,'ABOUT')}>Qui sommes nous</h3>
        </div>
        <button className={style.devisButton} onClick={(e)=>redirect(e,'DEVIS')}>
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
            <h3 className={style.menuItem} onClick={(e)=>redirect(e,'HOME')}>Acceuil</h3>
            <h3 className={style.menuItem} onClick={(e)=>redirect(e,'SERVICES')}>Nos services</h3>
            <h3 className={style.menuItem} onClick={(e)=>redirect(e,'ABOUT')}>Qui sommes nous</h3>
            <button className={style.devisButton} onClick={(e)=>redirect(e,'DEVIS')}>
              Demander un devis
            </button>
          </div>
        )}
      </>
    </>
  );
};

export default MenuBar;
