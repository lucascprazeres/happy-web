import dynamic from "next/dynamic";
import { DashSidebar } from "../../components/DashSidebar";

import styles from '../../styles/ApprovedRequests.module.css'

const ApprovedOrphanage = dynamic(() => import('../../components/ApprovedOrphanage'), {
  ssr: false,
})

export default function ApprovedRequests() {
  const orphanages = [
    {
      id: 3,
      name: "UNICEF",
      longitude: -1.4514856892179866,
      latitude: -48.48527454340272
    },
    {
      id: '2',
      name: "Abrigo Euclides Coelho Filho",
      longitude: -1.4514856892179866,
      latitude: -48.48527454340272,
    }
  ]

  return (
    <div className={styles.container}>
      <DashSidebar />

      <main className={styles.content}>
        <header>
          <h1>Orfanatos cadastrados</h1>
          <span>2 orfanatos</span>
        </header>

        <ul className={styles.orphanages}>
          <li>
            <ApprovedOrphanage orphanage={orphanages[0]} />
          </li>
          <li>
            <ApprovedOrphanage orphanage={orphanages[1]} />
          </li>
        </ul>
      </main>
    </div>
  )
}