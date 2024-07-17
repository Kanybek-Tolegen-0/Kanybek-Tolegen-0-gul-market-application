import React, { FC, useState } from 'react'
import { HeartIcon, productImage3 } from '@design-system/ui'
import { api } from '../../api'
import { AxiosResponse } from 'axios'

interface FavoriteIconProps {
  is_Liked: boolean
  delivery_id: number
  handleLikeClick: (e: MouseEvent, liked, delivery_id, productIndex) => void
  productIndex
}

const FavoriteIcon: FC<FavoriteIconProps> = ({ is_Liked, handleLikeClick, delivery_id, productIndex }) => {
  return (
    <HeartIcon
      fill={Boolean(is_Liked) ? '#EC4899' : '#D1D5DB'}
      onClick={e => handleLikeClick(e, is_Liked, delivery_id, productIndex)}
    />
  )
}

export default FavoriteIcon
