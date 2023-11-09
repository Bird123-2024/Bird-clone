import { Children, cloneElement, useMemo, useState } from 'react'
import type { ComponentProps, FC, PropsWithChildren, ReactElement, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { DeepPartial } from '../../helpers/deep-partial'
import { mergeDeep } from '../../helpers/mergeDeep'
import { KeepBoolean } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContex'
import type { keepAccordionComponentTheme } from './AccordionContent'
import { AccordionContent } from './AccordionContent'
import type { AccordionPanelProps } from './AccordionPanel'
import { AccordionPanel } from './AccordionPanel'
import type { keepAccordionTitleTheme } from './AccordionTitle'
import { AccordionTitle } from './AccordionTitle'

/**
 * Interface for defining the theme of the KeepAccordion component.
 */
export interface keepAccordionTheme {
  /**
   * The root theme object for the KeepAccordion component.
   */
  root: keepAccordionRootTheme
  /**
   * The theme object for the KeepAccordionContent component.
   */
  content: keepAccordionComponentTheme
  /**
   * The theme object for the KeepAccordionTitle component.
   */
  title: keepAccordionTitleTheme
}

/**
 * Defines the theme of the root element of the Accordion component.
 */
export interface keepAccordionRootTheme {
  base: string
  flush: KeepBoolean
}

/**
 * Props for the Accordion component.
 * 
 * @interface AccordionProps
 * @extends {PropsWithChildren<ComponentProps<'div'>>}
 */
export interface AccordionProps extends PropsWithChildren<ComponentProps<'div'>> {
  /**
   * Determines whether the accordion should always be open.
   * 
   * @type {boolean}
   */
  alwaysOpen?: boolean

  /**
   * Determines whether to show the open/close icon for each accordion panel.
   * 
   * @type {boolean}
   */
  showIcon?: boolean

  /**
   * The icon to display when the accordion panel is open.
   * 
   * @type {ReactNode}
   */
  openIcon?: ReactNode

  /**
   * The icon to display when the accordion panel is closed.
   * 
   * @type {ReactNode}
   */
  closeIcon?: ReactNode

  /**
   * The accordion panels to display.
   * 
   * @type {(ReactElement<AccordionPanelProps> | ReactElement<AccordionPanelProps>[])}
   */
  children: ReactElement<AccordionPanelProps> | ReactElement<AccordionPanelProps>[]
  /**
   * Determines whether the accordion should be flush.
   * 
   * @type {boolean}
   */
  flush?: boolean
  /**
   * Determines whether the accordion should be collapsed by default.
   * 
   * @type {boolean}
   */
  collapseAll?: boolean
  /**
   * Additional CSS class name(s) to apply.
   * 
   * @type {string}
   */
  
  theme?: DeepPartial<keepAccordionTheme>
  /**
   * The position of the icon relative to the panel title.
   * 
   * @type {string}
   */

  iconPosition?: string
  /**
   * Determines whether the accordion is disabled.
   * 
   * @type {boolean}
   */
  disabled?: boolean
}

/**
 * Accordion component that displays collapsible panels.
 * @param alwaysOpen Whether to allow multiple panels to be open at the same time.
 * @param showIcon Whether to show an icon next to the panel title.
 * @param openIcon Icon to display when the panel is open.
 * @param closeIcon Icon to display when the panel is closed.
 * @param children The panels to display.
 * @param flush Whether to remove the margin and padding of the accordion.
 * @param collapseAll Whether to collapse all panels by default.
 * @param className Additional CSS class name(s) to apply.
 * @param iconPosition The position of the icon relative to the panel title.
 * @param disabled Whether the accordion is disabled.
 * @param customTheme Custom theme to apply.
 * @param props Additional HTML attributes to apply to the root element.
 */
const AccordionComponent: FC<AccordionProps> = ({
  alwaysOpen = false,
  showIcon = true,
  openIcon,
  closeIcon,
  children,
  flush = false,
  collapseAll = false,
  className,
  iconPosition = 'right',
  disabled = false,
  theme: customTheme = {},
  ...props
}) => {
  const [isOpen, setOpen] = useState(collapseAll ? -1 : 0)

  const panels = useMemo(
    () =>
      Children.map(children, (child, i) =>
        cloneElement(child, {
          alwaysOpen,
          showIcon,
          flush,
          closeIcon,
          openIcon,
          disabled,
          iconPosition,
          isOpen: isOpen === i,
          setOpen: () => setOpen(isOpen === i ? -1 : i),
        }),
      ),
    [alwaysOpen, showIcon, children, flush, isOpen, iconPosition, disabled, closeIcon, openIcon],
  )
  const oldTheme = useTheme().theme.accordion.root
  const theme = mergeDeep(oldTheme, customTheme)

  return (
    <div
      className={twMerge(!flush && theme.base, className, !flush && theme.flush.off, flush && theme.flush.on)}
      data-testid="keep-accordion"
      {...props}>
      {panels}
    </div>
  )
}

AccordionComponent.displayName = 'Accordion'
AccordionPanel.displayName = 'Accordion.Panel'
AccordionTitle.displayName = 'Accordion.Title'
AccordionContent.displayName = 'Accordion.Content'

export const Accordion = Object.assign(AccordionComponent, {
  Panel: AccordionPanel,
  Title: AccordionTitle,
  Content: AccordionContent,
})
