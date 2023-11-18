import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { TableContext } from './TableContext'
import { DeepPartial } from '../../helpers/deep-partial'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface keepTableHeadCellTheme {
  base: string
  icon: {
    base: string
    on: {
      left: string
      right: string
    }
    off: string
  }
}

export interface TableHeadCellProps extends PropsWithChildren, ComponentProps<'th'> {
  theme?: DeepPartial<keepTableHeadCellTheme>
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export const TableHeadCell: FC<TableHeadCellProps> = ({
  children,
  className,
  icon,
  iconPosition = 'right',
  ...props
}) => {
  const theme = useTheme().theme.table.head.cell

  return (
    <TableContext.Provider value={{ icon, iconPosition }}>
      <th className={cn(theme.base, !icon && theme.icon.off, className)} {...props}>
        <div className={cn(theme.icon.base)}>
          {icon && iconPosition === 'left' && <span className={cn(theme.icon.on.left)}>{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className={cn(theme.icon.on.right)}>{icon}</span>}
        </div>
      </th>
    </TableContext.Provider>
  )
}
