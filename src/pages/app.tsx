import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { FiPlus } from 'react-icons/fi'

import { Location } from '../components/Location'
//@ts-ignore
import mapMarkerImg from '../../public/assets/map-marker.svg'

import styles from '../styles/Home.module.css'
import { Sidebar } from '../components/Sidebar'

const MapWithNoSSR = dynamic(() => import('../components/CustomMap'), { ssr: false })

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />

      <Link href="/create-orphanage">
        <a className={styles.createOrphanage}>
          <FiPlus size={32} color="#fff" />
        </a>
      </Link>
      <MapWithNoSSR />
    </div>
  )
}