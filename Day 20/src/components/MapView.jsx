import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function MapView({ lat, lon, weather }) {
  if (!lat || !lon) return null

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg border border-blue-200">
      <MapContainer
        center={[lat, lon]}
        zoom={10}
        style={{ height: "300px", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[lat, lon]}>
          <Popup>{weather?.weather[0]?.description || "Your location"}</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
