import { useRouter } from 'next/router';
import { FiArrowLeft } from 'react-icons/fi';
import styles from './styles.module.css'

export function DashGoButton() {
  const router = useRouter();

  function handleGoBack() {
    router.back();
  }
  
  return (
    <button onClick={handleGoBack} className={styles.container}>
      <FiArrowLeft size={24} />
    </button>
  )
}