import React from 'react'
import Island from '../components/Island'
import styles from '../styles/Photos.module.css'
import Image from 'next/image'


const Photos = () => {


    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1 className={styles.h1}>Photos</h1>
                <p className={styles.phrase}>The ability to stop time.</p>
            </div>
            <div className={styles.photosDiv}>
                <div className={styles.photosDiv2}>
                    <Image 
                    className={styles.image}
                    src="/images/emil.JPG" 
                    alt="helito emil"
                    width={265}
                    height={350}
                    />
                    <Image 
                    className={styles.image}
                    src="/images/tobi.JPG" 
                    alt="tobi"
                    width={265}
                    height={350}
                    />
                    <Image 
                    className={styles.image}
                    src="/images/ocean.JPG" 
                    alt="ocean"
                    width={265}
                    height={350}
                    />
                    <Image 
                    className={styles.image}
                    src="/images/jetski.JPG" 
                    alt="jetski"
                    width={265}
                    height={350}
                    />
                </div>
                <div className={styles.photosDiv2}>
                    <Image 
                    className={styles.image}
                    src="/images/lolla.JPG" 
                    alt="lolla"
                    width={265}
                    height={350}
                    />
                    <Image 
                    className={styles.image}
                    src="/images/mex.JPG" 
                    alt="teques"
                    width={265}
                    height={350}
                    />
                    <Image 
                    className={styles.image}
                    src="/images/san.JPG" 
                    alt="san"
                    width={265}
                    height={350}
                    />
                    <Image 
                    className={styles.image}
                    src="/images/panam.JPG" 
                    alt="panam"
                    width={265}
                    height={350}
                    />
                </div>
                <div className={styles.photosDiv2}>
                    <Image 
                    className={styles.image}
                    src="/images/hancock.JPG" 
                    alt="hancock"
                    width={265}
                    height={350}
                    />
                    <Image 
                    className={styles.image}
                    src="/images/surf.JPG" 
                    alt="surf"
                    width={265}
                    height={350}
                    />
                    <Image 
                    className={styles.image}
                    src="/images/dos.JPG" 
                    alt="studio"
                    width={265}
                    height={350}
                    />
                    <Image 
                    className={styles.image}
                    src="/images/masters.JPG" 
                    alt="masters"
                    width={265}
                    height={350}
                    />
                </div>
                <div className={styles.photosDiv2}>
                    <Image 
                    className={styles.image}
                    src="/images/moomba.JPG" 
                    alt="moomba"
                    width={265}
                    height={350}
                    />
                    <Image 
                    className={styles.image}
                    src="/images/sunset.JPG" 
                    alt="sunset"
                    width={265}
                    height={350}
                    />
                    <Image 
                    className={styles.image}
                    src="/images/coldplay.JPG" 
                    alt="coldplay"
                    width={265}
                    height={350}
                    />
                    <Image 
                    className={styles.image}
                    src="/images/bronze.JPG" 
                    alt="bronze"
                    width={265}
                    height={350}
                    />
                </div>
                <div className={styles.photosDiv2}>
                    <Image 
                    className={styles.image}
                    src="/images/pants.JPG" 
                    alt="pants"
                    width={265}
                    height={350}
                    />
                    <Image 
                    className={styles.image}
                    src="/images/slu.JPG" 
                    alt="slu"
                    width={265}
                    height={350}
                    />
                    <Image 
                    className={styles.image}
                    src="/images/music.JPG" 
                    alt="justin"
                    width={265}
                    height={350}
                    />
                    <Image 
                    className={styles.image}
                    src="/images/jump.JPG" 
                    alt="jump"
                    width={265}
                    height={350}
                    />
                </div>
            </div>
            <div className={styles.footerContainer}>
                <Island/>
            </div>
        </div>
    )
}

export default Photos
