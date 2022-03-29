import Image from "next/image"
import Link from "next/link"
import { FiArrowRight } from 'react-icons/fi'
import logoImg from '../../public/assets/logo.svg'

import styles from '../styles/Landing.module.css'

export default function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.contentWrapper}>
        <header>
          <Image src={logoImg} alt="Happy" />

          <Link href="/dashboard">
          <a className={styles.enterDashboard}>
            Acesso restrito
          </a>
        </Link>
        </header>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia <br/> de muitas crianças.</p>
        </main>

        <Link href="/app">
          <a className={styles.enterApp}>
            <FiArrowRight  size={26} color="rgba(0, 0, 0, 0.6)"/>
          </a>
        </Link>
      </div>
    </div>
  )
}