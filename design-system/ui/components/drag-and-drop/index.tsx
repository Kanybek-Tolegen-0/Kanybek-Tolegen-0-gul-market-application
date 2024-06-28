import React, { FC, DragEvent, useState, ChangeEvent, useCallback } from 'react'
import { AddImageIcon, DeleteIcon } from '../../assets'
import { Typography } from '@material-tailwind/react'

export const DragAndDrop: FC = () => {
  const [dragging, setDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [fileUrl, setFileUrl] = useState<string>('')

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(true)
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
  }

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)

    const files = e.dataTransfer.files
    if (files && files.length === 1 && files[0]) {
      if (['image/jpg', 'image/png', 'image/jpeg'].includes(files[0].type)) {
        const url = URL.createObjectURL(files[0])
        setFile(files[0])
        setFileUrl(url)
        e.dataTransfer.clearData()
      }
    }
  }

  const handleInputFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    const { files } = e.target
    if (files && files.length === 1 && files[0]) {
      if (['image/jpg', 'image/png', 'image/jpeg'].includes(files[0].type)) {
        const url = URL.createObjectURL(files[0])
        setFile({ ...files[0] })
        setFileUrl(url)
      }
    }
  }

  const handleDelete = () => {
    setFile(null)
    setFileUrl('')

    const input = document.getElementById('file-input') as HTMLInputElement
    console.log(input)
    if (input) {
      input.value = ''
    }
  }

  return (
    <div
      className={`flex flex-col gap-1 items-center border-2 rounded-md ${
        dragging ? 'border-blue-500' : 'border-disabled'
      } border-dashed p-[26px] pt-[22px] cursor-pointer`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {fileUrl ? (
        <div className="relative">
          <img src={fileUrl} alt="Uploaded file" />
          <DeleteIcon style={{ position: 'absolute', right: 0, top: 0, cursor: 'pointer' }} onClick={handleDelete} />
        </div>
      ) : (
        <AddImageIcon className="h-9 w-9" alt="Add Image Icon" />
      )}
      <div className="flex font-medium text-sm">
        <div className="relative">
          {file ? (
            <>
              <Typography children="Если хотите поменять логотип, то" className="text-tip_bold inline" />
              <Typography children="Загрузите другой логотип&nbsp;" className="text-brand_bold inline mx-[4px]" />
              <Typography children="или перенесите его сюда" className="text-tip_bold inline" />
            </>
          ) : (
            <>
              <Typography children="Загрузите логотип&nbsp;" className="text-brand_bold inline" />
              <Typography children="или перенесите его сюда" className="text-tip_bold inline" />
            </>
          )}
          <input
            id="file-input"
            name="file-input"
            type="file"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              opacity: 0,
              width: '100%',
              height: '100%',
              zIndex: 10,
              cursor: 'pointer'
            }}
            onChange={handleInputFileChange}
          />
        </div>
      </div>
      <Typography
        children="Логотип должен быть не более 2000x2000px и иметь формат .jpg, .jpeg, .png"
        className="font-normal text-xs text-t-disabled"
      />
    </div>
  )
}
