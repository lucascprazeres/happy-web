import Image from 'next/image'
import whatsappImg from '../../../public/assets/whatsapp.svg'
import styles from './styles.module.css'

export function ContactButton() {
  return (
    <button type="button" className={styles.container}>
      <Image
        src={whatsappImg}
      />
      <span>Entrar em contato</span>
    </button>
  )
}