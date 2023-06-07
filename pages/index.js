import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn router</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Nextjs Router
        </h1>
        <Link href="/blog">Blog </Link>
        <Link href="/project">Project</Link>
      </main>
    </div>
  )
}
