import Image from 'next/image'
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import { AiOutlineClockCircle, AiOutlineInfoCircle } from 'react-icons/ai'

import { ContactButton } from "../../components/ContactButton"
import { Sidebar } from "../../components/Sidebar"

import { api } from '../../services/api'

import styles from './styles.module.css'

export default function Orphanage() {
  const router = useRouter()
  const [orphanage, setOrphanage] = useState({})

  useEffect(() => {
    (async () => {
      const { id } = router.query
      const { data } = await api.get(`/orphanages/${id}`)

      setOrphanage(data)
    })()
  }, [])


  return (
    <div className={styles.container}>
      <Sidebar />

      <main>
        <div className={styles.details}>
          <img src="../public/assets/orphanage.png" alt={orphanage.name}/>

          <div className={styles.info}>
            <h1>{orphanage.name}</h1>
            <p>
              Presta assistência a cria nças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.
            </p>

            <div className={styles.separator} />

            <h2>Instruções para visita</h2>

            <p>
              Venha como se sentir a vontade e traga muito amor e paciência para dar.
            </p>

            <div className={styles.cardContainer}>
              <div className={styles.hoursCard}>
                <AiOutlineClockCircle size={40} color="#15B6D6" />
                <p>
                  Horário de visitas <br />
                  Das 18h até 8h
                </p>
              </div>

              <div className={styles.weekendCard}>
                <AiOutlineInfoCircle size={40} color="#3CDC8C" />
                <p>
                  Atendemos <br />
                  fim de semana
                </p>
              </div>
            </div>

            <ContactButton />
          </div>
        </div>
      </main>
    </div>
  )
}