import styles from './styles.module.css'

export function Location({ city, state }) {
  return (
    <div className={styles.container}>
      <strong>{city}</strong>
      <p>{state}</p>
    </div>
  )
}