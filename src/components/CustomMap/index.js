import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { FiArrowRight } from 'react-icons/fi'
import { mapIcon } from '../../utils/mapIcon'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility"

import { api } from '../../services/api'

export default function CustomMap() {
  const [orphanages, setOrphanages] = useState([])
  const postition = [-1.4644649, -48.4882172]

  useEffect(() => {
    (async () => {
      const response = await api.get('/orphanages')
      const loadedOrphanages = response.data
      setOrphanages(loadedOrphanages)
    })()
  }, [])

  return (
    <MapContainer center={postition} zoom={15} style={{ width: '100%', height: '100%' }}>
      <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {orphanages.map(orphanage => (
        <Marker
          key={orphanage.id}
          position={[orphanage.longitude, orphanage.latitude]}
          icon={mapIcon}
        >
          <Popup closeButton={false} maxWidth={240} minWidth={240}>
            {orphanage.name}
            <Link
              href={`/orphanage/${orphanage.id}`}
            >
              <a>
                <FiArrowRight size={20} color="#FFF" />
              </a>
            </Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}