import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { mapIcon } from '../../utils/mapIcon'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility"

import styles from './styles.module.css'

export default function OpenGoogleMaps({ orphanage }) {
  return (
    <div className={styles.container}>
      <MapContainer
        center={[orphanage.longitude, orphanage.latitude]}
        zoom={16}
        style={{
          width: '100%',
          height: 280,
          borderBottom: '1px solid #dde3f0',
          borderRadius: 20
        }}
        dragging={false}
        touchZoom={false}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          interactive={false}
          icon={mapIcon}
          position={[orphanage.longitude, orphanage.latitude]}
        />
      </MapContainer>
      <footer>
        <a
          href={`//www.google.com.br/maps/place/${orphanage.latitude},${orphanage.longitude}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver rotas no Google Maps
        </a>
      </footer>
    </div>
  )
}