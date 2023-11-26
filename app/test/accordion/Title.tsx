'use client'

import { FC, ReactNode } from 'react'
import { cn } from '~/src/helpers/cn'

export interface TitleProps {
  children?: ReactNode
  className?: string
}
export interface keepAccordionTitleTheme {
  base: string
}

export const Title: FC<TitleProps> = ({ children, className }) => {
  return <div className={cn('', className)}>{children}</div>
}
