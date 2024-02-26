import { ReactElement } from 'react'
import { v4 as generatedID } from 'uuid'
import {
  BarChartComponent,
  DatePickerComponent,
  ModalComponent,
  PaginationComponent,
  RadioSelectComponent,
  SliderComponent,
  TabsComponent,
  TooltipComponent,
} from '../app/components/ComponentsList'

interface routerPath {
  id: string
  name: string
  href: string
  tag?: boolean
  deprecate?: boolean
  redirect?: boolean
  folderName?: string
}

export const routes: routerPath[] = [
  {
    id: generatedID(),
    name: 'Accordion',
    href: '/docs/components/accordion',
    tag: false,
    deprecate: false,
    folderName: 'Accordion',
  },
  {
    id: generatedID(),
    name: 'Alert',
    href: '/docs/components/alert',
    tag: false,
    deprecate: false,
    folderName: 'Alert',
  },
  {
    id: generatedID(),
    name: 'Area Chart',
    href: '/docs/components/areaChart',
    tag: false,
    deprecate: false,
    folderName: 'Chart',
  },
  {
    id: generatedID(),
    name: 'Avatar',
    href: '/docs/components/avatar',
    tag: false,
    deprecate: false,
    folderName: 'Avatar',
  },
  {
    id: generatedID(),
    name: 'Badge',
    folderName: 'Badge',
    href: '/docs/components/badge',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Bar Chart',
    folderName: 'Chart',
    href: '/docs/components/barChart',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'BreadCrumb',
    folderName: 'Breadcrumb',
    href: '/docs/components/breadcrumb',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Button',
    folderName: 'Button',
    href: '/docs/components/button',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Button Group',
    folderName: 'Button',
    href: '/docs/components/buttonGroup',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Card',
    folderName: 'Card',
    href: '/docs/components/card',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Carousel',
    folderName: 'Carousel',
    href: '/docs/components/carousel',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'CheckBox',
    folderName: 'CheckBox',
    href: '/docs/components/checkbox',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Divider',
    folderName: 'Divider',
    href: '/docs/components/divider',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Date Picker',
    folderName: 'DatePicker',
    href: '/docs/components/datePicker',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Dropdown',
    folderName: 'Dropdown',
    href: '/docs/components/dropdown',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Empty',
    folderName: 'Empty',
    href: '/docs/components/empty',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Modal',
    folderName: 'Modal',
    href: '/docs/components/modal',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Navbar',
    folderName: 'Navbar',
    href: '/docs/components/navbar',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Notification',
    folderName: 'Notification',
    href: '/docs/components/notification',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Number Input',
    folderName: 'FormControls',
    href: '/docs/components/numberInput',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Play',
    folderName: 'Play',
    href: '/docs/components/play',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Progress',
    folderName: 'Progress',
    href: '/docs/components/progress',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Pagination',
    folderName: 'Pagination',
    href: '/docs/components/pagination',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Popover',
    folderName: 'Popover',
    href: '/docs/components/popover',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Radio',
    folderName: 'FormControls',
    href: '/docs/components/radio',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Rating',
    folderName: 'Rating',
    href: '/docs/components/rating',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Sidebar',
    folderName: 'Sidebar',
    href: '/docs/components/sidebar',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Skeleton',
    folderName: 'Skeleton',
    href: '/docs/components/skeleton',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Slider',
    folderName: 'Slider',
    href: '/docs/components/slider',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Spinner',
    folderName: 'Spinner',
    href: '/docs/components/spinner',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Steps',
    folderName: 'Steps',
    href: '/docs/components/steps',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Switch',
    folderName: 'FormControls',
    href: '/docs/components/switch',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Table',
    folderName: 'Table',
    href: '/docs/components/table',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Tabs',
    folderName: 'Tabs',
    href: '/docs/components/tabs',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Tag',
    folderName: 'Tag',
    href: '/docs/components/tag',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Text Area',
    folderName: 'FormControls',
    href: '/docs/components/textArea',
    tag: false,
    deprecate: false,
  },

  {
    id: generatedID(),
    name: 'Input',
    folderName: 'Input',
    href: '/docs/components/input',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Timeline',
    folderName: 'Timeline',
    href: '/docs/components/timeline',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Tooltip',
    folderName: 'Tooltip',
    href: '/docs/components/tooltip',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Tree',
    folderName: 'Tree',
    href: '/docs/components/tree',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Upload',
    folderName: 'Upload',
    href: '/docs/components/upload',
    tag: false,
    deprecate: false,
  },
]

export const gettingStartedRoutes: routerPath[] = [
  {
    id: generatedID(),
    name: 'Introduction',
    href: '/docs/getting-started/Introduction',
  },
  {
    id: generatedID(),
    name: 'Typography',
    href: '/docs/getting-started/Typography',
  },
]

export const navbarRoutes: routerPath[] = [
  {
    id: generatedID(),
    href: 'https://keepdesign.io',
    name: 'Figma',
    redirect: true,
  },
  {
    id: generatedID(),
    href: '/docs/getting-started/Introduction',
    name: 'Documentation',
    redirect: false,
  },
]

export const ComponentList: {
  id: string
  href: string
  component: () => ReactElement
}[] = [
  {
    id: generatedID(),
    href: '/docs/components/pagination',
    component: PaginationComponent,
  },
  {
    id: generatedID(),
    href: '/docs/components/tabs',
    component: TabsComponent,
  },
  {
    id: generatedID(),
    href: '/docs/components/modal',
    component: ModalComponent,
  },
  {
    id: generatedID(),
    href: '/docs/components/tooltip',
    component: TooltipComponent,
  },
  {
    id: generatedID(),
    href: '/docs/components/barChart',
    component: BarChartComponent,
  },

  {
    id: generatedID(),
    href: '/docs/components/radio',
    component: RadioSelectComponent,
  },

  {
    id: generatedID(),
    href: '/docs/components/slider',
    component: SliderComponent,
  },
  {
    id: generatedID(),
    href: '/docs/components/datePicker',
    component: DatePickerComponent,
  },
]
