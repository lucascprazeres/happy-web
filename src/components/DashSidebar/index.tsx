import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiPower, FiMapPin, FiAlertCircle } from 'react-icons/fi'

import mapMarkerImg from '../../../public/assets/map-marker.svg'

import styles from './styles.module.css'

export function DashSidebar() {
  const router = useRouter()

  function handleSignOut() {
    router.replace('/signin')
  }
  
  return (
    <aside className={styles.container}>
      <Image src={mapMarkerImg} alt="Happy" />

      <nav>
        <ul className={styles.links}>
          <li>
            <Link href="approved-requests">
              <a
                className={
                  [styles.link, router.pathname === '/dashboard/approved-requests' ? styles.active : ''].join(' ')
                }
              >
                <FiMapPin size={24} />
              </a>
            </Link>
          </li>

          <li>
            <Link href="pending-requests">
              <a className={[styles.link, router.pathname === '/dashboard/pending-requests' ? styles.active : ''].join(' ')}>
                <FiAlertCircle size={24} />
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <button onClick={handleSignOut} className={styles.button}>
        <FiPower size={24} color="#fff" />
      </button>
    </aside>
  )
}