import { LabelHTMLAttributes, forwardRef } from 'react'
import { cn } from '~/app/src/helpers/cn'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, children, ...props }, ref) => {
  return (
    <label ref={ref} {...props} className={cn('cursor-pointer text-body-4 font-medium text-metal-600', className)}>
      {children}
    </label>
  )
})

Label.displayName = 'Label'
