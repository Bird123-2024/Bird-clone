export const drawerAPIData = [
  {
    id: 1,
    propsName: 'open',
    propsType: 'string',
    propsDescription: 'Drawer show or not?',
    default: 'false',
  },

  {
    id: 3,
    propsName: 'onOpenChange',
    propsType: 'Function',
    propsDescription: 'setState function',
    default: 'None',
  },
]

export const drawerContentAPIData = [
  {
    id: 1,
    propsName: 'position',
    propsType: ['left', 'top', 'right', 'bottom'],
    propsDescription: 'Drawer position',
    default: 'bottom',
  },
]
