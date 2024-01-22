'use client'
import { FileArrowUp } from 'phosphor-react'
import { FC, useRef } from 'react'
import { cn } from '../../helpers/cn'
import { Button } from '../Button/Button'
import { useUploadContext } from './UploadContext'
import { UploadFailed } from './UploadFailed'
import { UploadPending } from './UploadPending'
import { UploadSuccess } from './UploadSuccess'
import { uploadTheme } from './theme'

export const UploadHorizontal: FC = () => {
  const { disabled, showProgressBar, progressType, file, onFileChange, title, fileType, id, uploadBtnColor } =
    useUploadContext()

  const theme = uploadTheme.uploadHorizontal
  const extension = file?.split('.').pop()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    inputRef.current?.click()
  }
  return (
    <div className={cn(theme.base)}>
      <label htmlFor={id} className={cn(theme.label.base, disabled && theme.disabled)}>
        <div className={cn(theme.label.root.base)}>
          <div className={cn(theme.label.root.iconBox.base)}>
            <div className={cn(theme.label.root.iconBox.icon)}>
              <FileArrowUp size={40} color="#5E718D" weight="thin" />
            </div>
            <div>
              <p className={cn(theme.label.root.iconBox.dragDrop)}>{title ? title : 'Drag and Drop files here'}</p>

              {file ? (
                <p className={cn(theme.label.root.upload.fileName)}>
                  FileName :{file ? file.split('.')[0].slice(0, 5) + '.' + extension : null}
                </p>
              ) : (
                <p className={cn(theme.label.root.iconBox.fileType)}>
                  {fileType ? fileType : 'Files : JPEG, PNG, GIF'}
                </p>
              )}
            </div>
          </div>

          <div className={cn(theme.label.root.upload.base)}>
            <p className={cn(theme.label.root.upload.fileSize)}>Maximum: 5MB</p>

            <Button
              color={uploadBtnColor}
              disabled={disabled}
              className="!relative !z-40 !cursor-pointer"
              onClick={handleClick}>
              Choose File
            </Button>
            <input
              id={id}
              type="file"
              ref={inputRef}
              className={cn(theme.label.root.upload.input)}
              onChange={onFileChange}
              disabled={disabled}
            />
          </div>
        </div>
      </label>
      {showProgressBar &&
        !disabled &&
        (progressType === 'success' ? (
          <UploadSuccess />
        ) : progressType === 'error' ? (
          <UploadFailed />
        ) : progressType === 'pending' ? (
          <UploadPending />
        ) : null)}
    </div>
  )
}
