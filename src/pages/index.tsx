import Head from "next/head";
import { CompletedChallange } from "../components/CompletedChallenge";
import { Countdonw } from "../components/Countdonw";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div >
          <Profile />
          <CompletedChallange />
          <Countdonw />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
