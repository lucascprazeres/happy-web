import { FaWhatsapp } from 'react-icons/fa'
import styles from './styles.module.css'

export function ContactButton({ whatsapp }) {
  return (
    <a
      className={styles.container}
      target="_blank"
      rel="noreferrer"
      href={`https://api.whatsapp.com/send?phone=${whatsapp}&text=Ol%C3%A1,%20gostaria%20de%20visitar%20a%20institui%C3%A7%C3%A3o!`}
    >
      <FaWhatsapp size={24} color="#FFF"/>
      <span>Entrar em contato</span>
    </a>
  )
}