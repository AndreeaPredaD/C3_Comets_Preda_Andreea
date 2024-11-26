import { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import WalletContextProvider from '../components/WalletContextProvider'
import { AppBar } from '../components/AppBar'
// import { BalanceDisplay } from '../components/BalanceDisplay'
import { PingButton } from '../components/PingButton'
import Head from 'next/head'

import { useState } from "react";

const Home: NextPage = (props) => {

  const [amount, setAmount] = useState(0)
  const [destinatyion, setDestination] = useState(1)

  return (
    <div className={styles.App}>
      <Head>
        <title>Wallet-Adapter Example</title>
        <meta
          name="description"
          content="Wallet-Adapter Example"
        />
      </Head>
      
      <WalletContextProvider>
        <AppBar />
        <div className={styles.AppBody}>
          <PingButton />
        </div>
      </WalletContextProvider >
    </div>
  );
}

export default Home;