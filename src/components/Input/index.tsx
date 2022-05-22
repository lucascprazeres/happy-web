import { InputHTMLAttributes } from 'react';
import styles from './styles.module.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onChangeText: (value: string) => void;
}

export function Input({ type, value, onChangeText, name }: Props) {
  return (
      <input
        className={styles.input}
        type={type || 'text'}
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
      />
  )
}