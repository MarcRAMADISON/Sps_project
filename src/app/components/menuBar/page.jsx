import Image from 'next/image';
import style from './menubar.module.css'

const MenuBar=()=>{
    return (
        <div className={style.menuContainer}>
            <Image src='/assets/sps_logo.png' alt="logo sps" width={100} height={80} className={style.logo}/>
            <div className={style.menuItems}>
                <h3 className={style.menuItem}>Acceuil</h3>
                <h3 className={style.menuItem}>Nos services</h3>
                <h3 className={style.menuItem}>Qui sommes nous</h3>
            </div>
            <button className={style.devisButton}>Demander un devis</button>
        </div>

    )
}

export default MenuBar;