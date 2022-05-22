import Image from "next/image"
import Link from "next/link"
import { FiArrowRight } from 'react-icons/fi'

import { Location } from '../components/Location'
//@ts-ignore
import logoImg from '../../public/assets/logo.svg'

import styles from '../styles/Landing.module.css'

export default function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.contentWrapper}>
        <header>
          <Image src={logoImg} alt="Balão amarelo com um sorriso" />

          <span className={styles.location}>
            <Location city="Belém" state="Pará" />
          </span>

          <Link href="/signin">
            <a className={styles.enterDashboard}>
              Acesso restrito
            </a>
          </Link>
        </header>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia <br /> de muitas crianças.</p>
        </main>

        <footer className={styles.footer}>
          <p>Adaptado do design criado pela <a href="https://www.rocketseat.com.br/">Rocketseat</a> 💛</p>
        </footer>

        <Link href="/app">
          <a className={styles.enterApp}>
            <span>Abrir o mapa</span>
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"  />
          </a>
        </Link>
      </div>

    </div>
  )
}