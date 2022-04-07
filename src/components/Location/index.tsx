import styles from './styles.module.css'

interface Props {
  city: string;
  state: string;
}

export function Location({ city, state }: Props) {
  return (
    <div className={styles.container}>
      <strong>{city}</strong>
      <p>{state}</p>
    </div>
  )
}