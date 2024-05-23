import React, { FC, useEffect } from 'react'
import { Input, Typography } from '@material-tailwind/react'
import { Map } from '../../../../components/map'
// import { YMaps, Map as YMap } from '@pbe/react-yandex-maps'

const ResidentialAddress: FC = props => {
  // const mapOptions = {
  //   suppressMapOpenBlock: true,
  //   yandexMapDisablePoiInteractivity: true,
  //   suppressObsoleteBrowserNotifier: true,
  //   supressMapOpenBlock: true
  // }

  return (
    <>
      <div>
        <Typography children="Город проживания" className="font-medium text-sm text-tip mr-auto mb-1" />
        <Input
          className="!border-disabled focus:!border-[1px] rounded-md py-[9px] px-[13px] text-tip_bold"
          labelProps={{
            className: 'before:content-none after:content-none'
          }}
          crossOrigin=""
        />
      </div>
      <div className="w-[566px] h-[242px] rounded-base overflow-hidden">
        <Map />
      </div>
      {/*Яндекс карт*/}
      {/*<YMaps>*/}
      {/*  <div className="w-[566px] h-[242px] rounded-base overflow-hidden">*/}
      {/*    <YMap*/}
      {/*      style={{ width: '100%', height: '100%' }}*/}
      {/*      defaultState={{ center: [43.238949, 76.889709], zoom: 13 }}*/}
      {/*      options={mapOptions}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</YMaps>*/}
    </>
  )
}

export default ResidentialAddress
