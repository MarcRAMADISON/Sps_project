'use client'


import styles from './presentation.module.css'
import Image from 'next/image'
import  {useState,useEffect,useRef} from 'react'

export default function Presentation() {
    const ref = useRef(null);

    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
      if (ref.current) observer.observe(ref.current);
    }, []);

    return (
        <div className={styles.presentationContainer}>
            <div className={styles.block1}>
                <h3 className={styles.title}>Professionnalisme, Efficacité et rapidité</h3>
                <button className={styles.contactButton}>Contacter nous</button>
            </div>
            <div  ref={ref} className={`${styles.hiddenBlock2} ${visible ? styles.visible : ""} ${styles.block2}`}>
                <Image src='/assets/block2.png' alt="image illustration" objectFit='cover' layout='fill' />
            </div>
            <div ref={ref} className={`${styles.hiddenBlock3} ${visible ? styles.visible : ""} ${styles.block3}`}>
                <Image src='/assets/block4.png' alt="image illustration" objectFit='cover' layout='fill' objectPosition='100%' />
            </div>
            <div className={styles.block4}>
                <h4 className={styles.textDescription}>Nous offrons des services de call center pour optimiser votre relation client, du support à la prospection. En parallèle, nous développons des solutions web sur mesure et facilitons l’importation depuis la Chine, en assurant sourcing, négociation et logistique.</h4>
            </div>
        </div>
    )
}