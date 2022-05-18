import Image from 'next/image'
import { useRouter } from 'next/router'

import successImg from '../../public/assets/success.svg'
import styles from '../styles/Success.module.css'

export default function Success() {
  const router = useRouter()

  function handleGoBack() {
    router.replace('/app')
  }

  return (
    <div className={styles.container}>
      <aside className={styles.message}>
        <h1>Ebaaa!</h1>
        <p>
          O cadastro deu certo e foi enviado <br/>
          ao administrador para ser aprovado. <br/>
          Agora é só esperar :)
        </p>
        <button
          type='button'
          className={styles.goBackButton}
          onClick={handleGoBack}
        >
          Voltar para o mapa
        </button>
      </aside>

      <Image
        src={successImg}
        alt="Menina sorrindo"
      />
    </div>
  )
}