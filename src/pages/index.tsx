import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>群馬高専理科部</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>群馬高専理科部</h1>
        <p>絶賛開発中！！</p>
      </main>
    </div>
  );
}
