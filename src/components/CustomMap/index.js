import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { FiArrowRight } from 'react-icons/fi'
import { mapIcon } from '../../utils/mapIcon'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility"

import styles from './styles.module.css'

// import { api } from '../../services/api'

export default function CustomMap() {
  const [orphanages, setOrphanages] = useState([
    {
      "id": 1,
      "name": "Abrigo Euclides Coelho Filho",
      "longitude": -1.4342403463123783,
      "latitude": -48.452913890666444
    },
    {
      "id": 2,
      "name": "Lar Fabiano de Cristo",
      "longitude": -1.4657289667649644,
      "latitude": -48.461113205018115
    },
    {
      "id": 3,
      "name": "UNICEF",
      "longitude": -1.4514856892179866,
      "latitude": -48.48527454340272
    },
    {
      "id": 4,
      "name": "Creche Lar Cordeirinho de Deus",
      "longitude": -1.4501568954598456,
      "latitude": -48.47089542011791
    }
  ])
  const postition = [-1.4644649, -48.4882172]

  // useEffect(() => {
  //   (async () => {
  //     const response = await api.get('/orphanages')
  //     const loadedOrphanages = response.data
  //     setOrphanages(loadedOrphanages)
  //   })()
  // }, [])

  return (
    <MapContainer center={postition} zoom={15} style={{ width: '100%', height: '100%' }}>
      <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {orphanages.map(orphanage => (
        <Marker
          key={orphanage.id}
          position={[orphanage.longitude, orphanage.latitude]}
          icon={mapIcon}
        >
          <Popup closeButton={false} offset={{ x: -170, y: -70 }}>
            <div className={styles.popupContainer}>
              <span>{orphanage.name}</span>
              <Link
                href={`/orphanage/${orphanage.id}`}
              >
                <a className={styles.popupAnchor}>
                  <FiArrowRight size={22} color="#FFF" />
                </a>
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}