import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { load } from '@2gis/mapgl'
import { Map as MapType } from '@2gis/mapgl/types'
import { Ruler, RulerControl } from '@2gis/mapgl-ruler'
import { GeoIcon } from '@design-system/ui'

interface IMapProps {
  setAddress: (address: string) => void
  inputValue?: string
}

export const Map: FunctionComponent<IMapProps> = React.memo(
  ({ setAddress, inputValue }) => {
    const mapRef = useRef<MapType | null>(null)
    const statusRef = useRef<HTMLDivElement | null>(null)

    function success(pos: GeolocationPosition) {
      const center: [number, number] = [pos.coords.longitude, pos.coords.latitude]
      mapRef.current?.setCenter(center)
    }
    function error() {
      if (statusRef.current) {
        statusRef.current.textContent = 'Не удалось определить местоположение'
      }
    }

    function geoFindMe() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error)
      }
    }

    async function getAddress(coords: number[]) {
      try {
        const response = await fetch(
          `https://catalog.api.2gis.com/3.0/items/geocode?point=${coords[0]},${coords[1]}&key=785a6d32-f76c-4256-b9a3-334bf5c074fb`
        )
        const data = await response.json()
        if (data.result && data.result.items.length > 0) {
          const address = data.result.items[0].full_name
          setAddress(address)
        } else {
          setAddress('Адрес не найден')
        }
      } catch (error) {
        console.error('Ошибка при получении адреса:', error)
        setAddress('Ошибка при получении адреса')
      }
    }

    async function setMarkerByInput(value: string) {
      try {
        const response = await fetch(
          `https://catalog.api.2gis.com/3.0/items/geocode?q=${value}&fields=items.point&key=785a6d32-f76c-4256-b9a3-334bf5c074fb`
        )
        const data = await response.json()
        if (data.result && data.result.items.length > 0) {
          return data.result.items[0].point
        }
        return null
      } catch (error) {
        console.error('Ошибка при получении координат:', error)
      }
    }
    useEffect(() => {
      geoFindMe()
      load().then(mapglAPI => {
        mapRef.current = new mapglAPI.Map('map-container', {
          center: [76.889709, 43.238949],
          zoom: 13,
          zoomControl: false,
          key: '785a6d32-f76c-4256-b9a3-334bf5c074fb'
        })

        const rulerControl = new RulerControl(mapRef.current, {
          position: 'centerRight',
          mode: 'polyline'
        } as any)

        if (statusRef.current) {
          const control = new mapglAPI.Control(mapRef.current, statusRef.current?.outerHTML || '', {
            position: 'centerRight'
          })
          control.getContainer().addEventListener('click', geoFindMe)
        }

        const zoomControl = new mapglAPI.ZoomControl(mapRef.current, { position: 'centerRight' })

        const Marker = new mapglAPI.Marker(mapRef.current, {
          coordinates: mapRef.current.getCenter()
        })

        if (inputValue) {
          setMarkerByInput(inputValue)
            .then(r => {
              if (r) {
                Marker.setCoordinates([r.lon, r.lat])
              } else {
                console.warn('Coordinates not found for input value:', inputValue)
              }
            })
            .catch(error => {
              console.error('Error setting marker by input:', error)
            })
        }

        mapRef.current.on('click', function (e) {
          const coordinates = e.lngLat
          Marker.setCoordinates(coordinates)
          getAddress(coordinates)

          if (!e.target) {
            return
          }
          const { id } = e.target
          mapRef.current?.setSelectedObjects([id])
        })

        rulerControl.toggle()
      })

      return () => mapRef.current?.destroy()
    }, [inputValue])

    return (
      <div style={{ width: 'auto', height: '100%' }}>
        <div style={{ width: '100%', height: '100%' }}>
          <div id="map-container" style={{ width: '100%', height: '100%' }}></div>
        </div>
        <div id="status" ref={statusRef} className={'h-8 w-8 bg-primary cursor-pointer rounded'}>
          <GeoIcon className={'h-8 w-8'} alt={'find'} />
        </div>
      </div>
    )
  },
  (prevProps, nextProps) => {
    // Custom comparison function for memoization
    // Memoize only when `inputValue` remains unchanged
    return prevProps.inputValue === nextProps.inputValue
  }
)
