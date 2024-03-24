import { useContext } from "react"
import { MapContext, PlacesContext } from "../context"

export const ButtonMyLocation = () => {

    const { map, isMapReady } = useContext(MapContext)
    const { userLocation } = useContext(PlacesContext)

    const onClick = () => {
        if( !isMapReady ) throw new Error('Map is not ready')
        if( !userLocation ) throw new Error('User location is not defined')

        map?.flyTo({
            zoom: 14,
            center: userLocation,
            essential: true
        })

    }

    return (
        <button 
            className="btn btn-primary"
            style={{
                position: 'fixed',
                right: '20px',
                top: '20px',
                zIndex: 999
            }}
            onClick={ onClick }
        >
            My Location 📍
        </button>
    )
}