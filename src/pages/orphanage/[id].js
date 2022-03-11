import { useRouter } from "next/router"
import { Sidebar } from "../../components/Sidebar"

import styles from './styles.module.css'

export default function Orphanage() {
  const router = useRouter()
  const { id } = router.query
  
  return (
    <div className={styles.container}>
      <Sidebar />
    </div>
  )
}