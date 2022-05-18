import { useState } from 'react'
import { LeafletMouseEvent } from 'leaflet'
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import { mapIcon } from '../../utils/mapIcon'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility"

import styles from './styles.module.css'

interface Props {
  handleMapClick: (e: LeafletMouseEvent) => void;
}

function LocationMarker({ handleMapClick }: Props) {
  const [position, setPosition] = useState<any>(null)
  const map = useMapEvents({
    click(e) {
      map.flyTo(e.latlng, map.getZoom())
      setPosition(e.latlng);
      handleMapClick(e)
    },
  })

  return position === null ? null : (
    <Marker
      interactive={false}
      icon={mapIcon}
      position={position}
    />
  )
}

export default function MapInput({ handleMapClick }: Props) {
  return (
    <div className={styles.container}>
      <MapContainer
        center={[-1.4644649, -48.4882172]}
        zoom={16}
        style={{
          width: '100%',
          height: 280,
          borderBottom: '1px solid #dde3f0',
          borderRadius: 20
        }}

      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker handleMapClick={handleMapClick} />
      </MapContainer>
      <footer>
        <span>Clique no mapa para adicionar a localização</span>
      </footer>
    </div>
  )
}