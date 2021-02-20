import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/r.module.css'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Roghib Open Source</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Roghib github repositories, increase your maximum level and gain a great amount of power." />
        <meta property="og:title" content="Roghib Open Source" key="title" />
        <meta property="og:url" content="https://opensource.roghib.com/" />
        <meta property="og:image" content="https://opensource.roghib.com/goku.png" />
        <meta name="theme-color" content="#06080e" />
      </Head>
      
      <header className={styles.fhedr}>
      
        <img src="/Roghib.svg" alt="Roghib | Open Source" className={styles.gokus} />
        <span className={styles.letterspace}>HELLO WORLD!</span>
        </header>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/">Roghib</a> Github Repositories
        </h1>

        <p className={styles.description}>
          Build anything with{' '}
          <code className={styles.code}>Roghib</code>
        </p>

        <section className={styles.grid}>
          {posts.map((post) => (
            <div className={styles.card} key={post.id} id={post.id*43167}>
              <a href={post.html_url} target="_blank" rel="noopener noreferrer">
                <h3>{post.name} &rarr;</h3>
                <p>{post.description}</p>
                <div className={styles.cctr}>
                <Image src="/goku.png" alt="Goku" className={styles.goku} width={90} height={114} />
                <span>{post.stargazers_count}</span>
                </div>
                </a>
                
                </div>
            ))}
        </section>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.roghib.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          ©Roghib{' '}
          <img src="/Roghib.svg" alt="Roghib Logo" className={styles.logo} />
        </a>
      </footer>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/users/roghib/repos')
  const posts = await res.json()

  return {
    props: {
      posts,
    },

  }
}