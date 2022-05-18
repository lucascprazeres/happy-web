import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { FiPlus } from 'react-icons/fi'

import { Location } from '../components/Location'
//@ts-ignore
import mapMarkerImg from '../../public/assets/map-marker.svg'

import styles from '../styles/Home.module.css'

const MapWithNoSSR = dynamic(() => import('../components/CustomMap'), { ssr: false })

export default function Home() {
  return (
    <div className={styles.homepage}>
      <aside>
        <header>
          <Image
            src={mapMarkerImg}
            alt="Happy"
          />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças <br /> esperam a sua visita :)</p>
        </header>

        <div></div>

        <footer>
          <Location
            city="Belém"
            state="Pará"
          />
        </footer>
      </aside>

      <Link href="/create-orphanage">
        <a className={styles.createOrphanage}>
          <FiPlus size={32} color="#fff" />
        </a>
      </Link>
      <MapWithNoSSR />
    </div>
  )
}