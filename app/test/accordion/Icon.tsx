'use client'
import { FC, ReactNode } from 'react'
import { cn } from '~/src/helpers/cn'
import { useAccordionContext } from './AccordionContext'

export interface IconProps {
  children?: ReactNode
  className?: string
}

export interface keepAccordionIconTheme {
  base: string
  rotated: {
    full: string
    half: string
  }
}

export const Icon: FC<IconProps> = ({ children, className }) => {
  const { isOpen } = useAccordionContext()
  return <div className={cn(isOpen ? '' : '', className)}>{children}</div>
}
