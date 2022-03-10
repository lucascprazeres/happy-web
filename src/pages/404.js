import Image from 'next/image'
import styles from '../styles/Error.module.css'

import landingImg from '../../public/assets/landing.svg'

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Image src={landingImg} alt="Crianças" height={450} />
      <h1>Em breve, esse site estará funcionando!</h1>
      <p>Estamos trabalhando nisso.</p>
    </div>
  )
}