import styles from './styles.module.css';

interface Props {
  open: boolean;
  handleSelect: (option: boolean) => void;
}

export function OpenOnWeenkends({ open, handleSelect }: Props) {
  return (
    <div className={styles.container}>
      <label
        htmlFor="doOpenOnWeekends"
        className={open ? styles.doOpenOnWeekendsActive : styles.doOpenOnWeekends}
      >
        Sim
      </label>
      <input type="radio"
        id="doOpenOnWeekends"
        onClick={() => handleSelect(true)}
      />
      <label
        htmlFor="dontOpenOnWeekends"
        className={!open ? styles.dontOpenOnWeekendsActive : styles.dontOpenOnWeekends}
      >
        Não
      </label>
      <input
        type="radio"
        id="dontOpenOnWeekends"
        onClick={() => handleSelect(false)}
      />
    </div>
  )
}