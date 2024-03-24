import { MapProvider, PlacesProvider } from "./context"
import { HomePage } from "./pages"

import 'mapbox-gl/dist/mapbox-gl.css'
import './styles.css'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = import.meta.env.VITE_MAP_ACCESS_TOKEN

export const MapsApp = () => {
    return (
        <PlacesProvider>
            <MapProvider>
                <HomePage />
            </MapProvider>
        </PlacesProvider>
    )
}