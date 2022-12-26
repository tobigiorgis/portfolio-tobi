import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Projects.module.css"



const Island = () => {


    return (
        <footer className={styles.footer}>
            <Link href="/">
                    <div className={styles.site}>
                        <Image alt='home' width={20} height={20} src="/images/home.svg" />
                    </div>
            </Link>
            <Link href="/projects">
                <div className={styles.site}>
                    <Image width={20} height={20} src="/images/activity.svg" alt ='portfolio'/>
                </div>
            </Link>
        <Link href="/photos">
            <div className={styles.site}>
                <Image alt='photos'width={20} height={20} src="/images/instagram.svg"/>
            </div>
        </Link>
        <div className={styles.lineDiv}></div>
        <Link href={'https://www.twitter.com/tobigiorgis'}>
            <a target="_blank" >
                <div className={styles.site}>
                    <Image alt='twitter'width={20} height={20} src="/images/twitter.svg"/>
                </div>
            </a>
        </Link>
        <Link href={'https://www.github.com/tobigiorgis'}>
            <a target="_blank">
                <div className={styles.site}>
                    <Image alt='github'width={20} height={20} src="/images/github.svg"/>
                </div>
            </a>
        </Link>
        <div className={styles.lineDiv}>
            {/* <Image alt='separator'/> */}
        </div>
        <a href='mailto:tobigiorgis@icloud.com'>
            <div className={styles.site}>
                <Image alt='contact'width={20} height={20} src="/images/mail.svg"/>
            </div>
        </a>
        </footer>
    )
}

export default Island
