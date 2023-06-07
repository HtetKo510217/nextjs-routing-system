import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter();

  const searchProject = () => {
    console.log('search project');
    router.push('/project');
  }
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
        <br></br><br></br><br></br>
        <button onClick={searchProject}>Search Project</button>
      </main>
    </div>
  )
}
