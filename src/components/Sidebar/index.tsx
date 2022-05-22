import Image from "next/image";
import { useRouter } from 'next/router'

import { FiArrowLeft } from 'react-icons/fi';

//@ts-ignore
import mapMarkerImg from '../../../public/assets/map-marker.svg'

import styles from './styles.module.css'

export function Sidebar() {
  const router = useRouter();

  function handleGoBack() {
    router.back();
  }

  return (
    <aside className={styles.container}>
      <Image src={mapMarkerImg} alt="Happy" />

      <button onClick={handleGoBack} className={styles.goBackButton}>
        <FiArrowLeft size={24} color="#fff" />
      </button>
    </aside>
  )
}