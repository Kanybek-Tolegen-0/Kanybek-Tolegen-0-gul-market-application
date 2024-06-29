import React, { FC } from 'react'

export const Label: FC<{ label: string }> = ({ label }) => (
  <label className="text-sm leading-5 font-medium text-gray-700">{label}</label>
)
