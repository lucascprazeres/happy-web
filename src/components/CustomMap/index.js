import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility"

export default function CustomMap() {
  const postition = [-1.4644649, -48.4882172]
  
  return (
    <MapContainer center={postition} zoom={15} style={{ width: '100%', height: '100%' }}>
      <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={postition}>
        <Popup>
          Hey ! you found me
        </Popup>
      </Marker>
    </MapContainer>
  )
}