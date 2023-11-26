'use client'

import { FC, ReactNode } from 'react'
import { Collapse } from 'react-collapse'
import { cn } from '~/src/helpers/cn'
import { useAccordionContext } from './AccordionContext'

export interface ContentProps {
  children?: ReactNode
  className?: string
}

export interface keepAccordionContentTheme {
  base: string
}

export const Content: FC<ContentProps> = ({ children, className }) => {
  const { isOpen = false, openFirstPanel } = useAccordionContext()
  return (
    <Collapse isOpened={openFirstPanel ? openFirstPanel : isOpen}>
      <div className={cn('base from content', className)}>{children}</div>
    </Collapse>
  )
}
