import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Island from '../components/Island'
// import Mailto from 'react-mailto'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Portfolio</title>
        <meta name="description" content="Tobi's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Tobi Giorgis
        </h1>
        <p className={styles.description}>
          20 y/o - from Argentina 
        </p>
        <h2 className={styles.info}>
          Developer guided by aesthetic and design. Building through code. Always seeking perfection.
        </h2>
        <h2 className={styles.info}>
          Currently at Learning. Any cool project in mind?
        </h2>
      </main>

      <div className={styles.footerContainer}>
        <Island/>
      </div>
    </div>
  )
}
