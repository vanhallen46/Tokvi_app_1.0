import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function aboutPage() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tokvi App - Tokenización</title>
                <meta name="description" content="aboutPage" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Ir a <a href="">Home</a>  
                </h1>
                
                <p className={styles.description}>
                    Get started by editing {' '}
                <code className={styles.code}>pages/about.tsx</code>  
                </p>
            </main>
        </div>
    )
}  