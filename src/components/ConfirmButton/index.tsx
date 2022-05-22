import { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function ConfirmButton({ children }: Props) {
  return (
    <button className={styles.container}>
      {children}
    </button>
  )
}