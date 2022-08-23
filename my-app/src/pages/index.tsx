import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeaderView from '../components/Header'
import FooterView from '../components/Footer'
import Products from './Products'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderView />
      <Products />
      <FooterView />
    </div>
  )
}

export default Home



