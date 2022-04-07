import dynamic from 'next/dynamic'
import { useState } from "react"

import { FiClock, FiInfo } from 'react-icons/fi'

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
    latitude: -48.48527454340272,
    about: 'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
    instructions: 'Venha como se sentir a vontade e traga muito amor e paciência para dar.',
    opening_hours: 'Das 18h até 8h',
    open_on_weekends: false,
    whatsapp: '1234',
    images: [
      { id: 1, path: 'https://activeforlife.com/content/uploads/2014/08/mom-kids-sand.jpg' },
      { id: 2, path: 'https://previews.123rf.com/images/stylephotographs/stylephotographs1604/stylephotographs160400351/55606029-.jpg' },
      { id: 3, path: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/active_kids_other/1800x1200_active_kids_other_alt.jpg' },
    ]
  })
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className={styles.container}>
      <Sidebar />

      <main>
        <div className={styles.details}>
          <img
            src={orphanage.images[activeImageIndex].path}
            alt={orphanage.name}
          />

          <div className={styles.info}>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className={styles.images}>
              {orphanage.images.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}
                >
                  <img
                    src={image.path}
                    alt={orphanage.name}
                    data-testid={`images_${image.id}`}
                  />
                </button>
              ))}
            </div>

            <OpenGoogleMapsWithNoSSR orphanage={orphanage} />

            <div className={styles.separator} />

            <h2>Instruções para visita</h2>

            <p>{orphanage.instructions}</p>

            <div className={styles.cardContainer}>
              <div className={styles.hoursCard}>
                <FiClock size={40} color="#15B6D6" />
                <p>
                  Horário de visitas <br />
                  {orphanage.opening_hours}
                </p>
              </div>

              {orphanage.open_on_weekends ? (
                <div className={styles.weekendCard}>
                  <FiInfo size={40} color="#3CDC8C" />
                  <p>
                    Atendemos <br />
                    fim de semana
                  </p>
                </div>
              ) : (
                <div className={styles.noWeekendCard}>
                  <FiInfo size={40} color="#FF669D" />
                  <p>
                    Não atendemos <br />
                    fim de semana
                  </p>
                </div>
              )}
            </div>

            <ContactButton whatsapp={orphanage.whatsapp}/>
          </div>
        </div>
      </main>
    </div>
  )
}