import React from 'react'
import Island from '../components/Island'
import styles from '../styles/Photos.module.css'
import Image from 'next/image'

const photos = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1 className={styles.h1}>Photos</h1>
                <p className={styles.phrase}>Unforgettable moments</p>
            </div>
            <div className={styles.photosDiv}>
                <Image 
                className={styles.image}
                src="/images/san.JPG" 
                alt="sandrita"
                width={80}
                height={200}
                />
                <Image 
                className={styles.image}
                src="/images/tobi.JPG" 
                alt="tobi"
                width={80}
                height={200}
                />
                <Image 
                className={styles.image}
                src="/images/justin.JPG" 
                alt="justin"
                width={80}
                height={200}
                />
                <Image 
                className={styles.image}
                src="/images/jetski.JPG" 
                alt="jetski"
                width={80}
                height={200}
                />
            </div>
            <footer className={styles.footer}>
                <Island/>
            </footer>
        </div>
    )
}

export default photos
