import { FC, ReactNode } from 'react'
import { cn } from '~/src/helpers/cn'

interface CardContainerProps {
  className?: string
  children?: ReactNode
}

export const Container: FC<CardContainerProps> = ({ className, children }) => {
  return <div className={cn(className)}>{children}</div>
}
