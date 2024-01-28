import { FC, ReactNode } from 'react'

interface GroupProps {
  children?: ReactNode
}

export const Group: FC<GroupProps> = ({ children }) => {
  return <div className="flex items-center -space-x-3">{children}</div>
}
