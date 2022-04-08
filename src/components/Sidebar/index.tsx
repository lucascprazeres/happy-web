import Link from "next/link";
import Image from "next/image";

import { FiArrowLeft } from 'react-icons/fi';

//@ts-ignore
import mapMarkerImg from '../../../public/assets/map-marker.svg'

import styles from './styles.module.css'

export function Sidebar() {
  return (
    <aside className={styles.container}>
      <Image src={mapMarkerImg} alt="Happy"/>

      <Link href="/app">
        <a className={styles.goBackButton}>
          <FiArrowLeft size={24} color="#fff" />
        </a>
      </Link>
    </aside>
  )
}