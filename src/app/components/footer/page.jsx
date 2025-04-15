import styles from './footer.module.css'
import Image from 'next/image'

export default function Footer(){
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerBlock1}>
                <h1 className={styles.contactTitle}>Nos contacts</h1>
                <h3 className={styles.contact}>Tel. (123) 456-7890</h3>
                <h3 className={styles.contact}>Email: hello@reallygreatsite.com</h3>
                <h3 className={styles.contact}>Social: @reallygreatsite</h3>
            </div>
            <div className={styles.socialBlock}>
                <Image src='/assets/facebook.png' alt='social link' width={40} height={40}/>
                <Image src='/assets/linkedin.png' style={{marginLeft:'30px'}} alt='social link' width={40} height={40}/>
                <Image src='/assets/email.png' style={{marginLeft:'30px'}} alt='social link' width={40} height={40}/>
            </div>

        </div>
    )
}