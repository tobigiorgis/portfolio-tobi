import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import UseAnimation from "react-useanimations"
import home from 'react-useanimations/lib/home'
import activity from 'react-useanimations/lib/activity'



const Island = () => {
    return (
        <>
        <UseAnimation
        animation={home}
        size={70}
        render={(eventProps, animationProps )=> (
            <button type="button" {...eventProps} >
                <Link href="/">
                        <div className={styles.site} {...animationProps}/>
                            {/* <Image alt='home' width={20} height={20} src="/images/home.svg"/> */}
                        
                </Link>
            </button>
            )}
        />
                <UseAnimation
        animation={activity}
        speed={0.5}
        size={70}
        render={(eventProps, animationProps )=> (
            <button type="button" {...eventProps}>
            <Link href="/projects/">
                    <div className={styles.site} {...animationProps}/>
                        {/* <Image alt='home' width={20} height={20} src="/images/home.svg"/> */}
                    
            </Link>
            </button>
            )}
        />
        {/* <Link href="/projects">
            <div className={styles.site}>
                <Image width={20} height={20} src="/images/activity.svg" alt ='portfolio'/>
            </div>
        </Link> */}
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
        </>
    )
}

export default Island
