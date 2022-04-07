import dynamic from 'next/dynamic'
import { useState } from "react"

import { AiOutlineClockCircle, AiOutlineInfoCircle } from 'react-icons/ai'

import { ContactButton } from "../../components/ContactButton"
import { Sidebar } from "../../components/Sidebar"

import styles from './styles.module.css'

const OpenGoogleMapsWithNoSSR = dynamic(
  () => import('../../components/OpenGoogleMaps'),
  { ssr: false }
)

export default function Orphanage() {
  const [orphanage, setOrphanage] = useState({
    id: 1,
    name: "Abrigo Euclides Coelho Filho",
    longitude: -1.4514856892179866,
    latitude: -48.48527454340272
  })

  return (
    <div className={styles.container}>
      <Sidebar />

      <main>
        <div className={styles.details}>
          <img
            src="https://activeforlife.com/content/uploads/2014/08/mom-kids-sand.jpg"
            alt={orphanage.name}
          />

          <div className={styles.info}>
            <h1>{orphanage.name}</h1>
            <p>
              Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.
            </p>

            <OpenGoogleMapsWithNoSSR orphanage={orphanage}/>

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