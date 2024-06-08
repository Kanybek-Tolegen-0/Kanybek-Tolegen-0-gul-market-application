import React, { FunctionComponent, useEffect, useRef } from 'react'
import { load } from '@2gis/mapgl'
import { Map as MapType } from '@2gis/mapgl/types'
import { Ruler, RulerControl } from '@2gis/mapgl-ruler'
import { GeoIcon } from '@design-system/ui'

interface IMapProps {}

export const Map: FunctionComponent<IMapProps> = React.memo(
  () => {
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
    useEffect(() => {
      geoFindMe()
      load().then(mapglAPI => {
        mapRef.current = new mapglAPI.Map('map-container', {
          center: [76.889709, 43.238949],
          zoom: 13,
          zoomControl: false,
          key: '8e342245-f776-4647-b92b-45b36e82a790'
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

        mapRef.current.on('click', function (e) {
          const coordinates = e.lngLat // Получаем координаты щелчка
          Marker.setCoordinates(coordinates) // Добавляем маркер
        })
        rulerControl.toggle()
      })

      return () => mapRef.current?.destroy()
    }, [])

    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div style={{ width: '100%', height: '100%' }}>
          <div id="map-container" style={{ width: '100%', height: '100%' }}></div>
        </div>
        <div id="status" ref={statusRef} className={'h-8 w-8 bg-primary cursor-pointer rounded'}>
          <GeoIcon className={'h-8 w-8'} alt={'find'} />
        </div>
      </div>
    )
  },
  () => true
)
