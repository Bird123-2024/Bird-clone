'use client'
import { FC, ReactNode } from 'react'
import { cn } from '~/src/helpers/cn'
import { useAccordionContext } from './AccordionContext'

export interface ContainerProps {
  children?: ReactNode
  className?: string
}

export interface keepAccordionContainerTheme {
  base: string
  open: string
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  const { isOpen, flush } = useAccordionContext()
  return (
    <div
      className={cn(
        'base from theme',
        !flush && isOpen ? 'open from theme' : '',
        flush && isOpen ? '' : '',
        className,
      )}>
      {children}
    </div>
  )
}
