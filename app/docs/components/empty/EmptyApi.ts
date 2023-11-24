export const emptyApiData = [
  {
    id: 1,
    propsName: 'title',
    propsType: 'string',
    propsDescription: 'Title or heading of the empty component.',
    default: 'title',
  },
  {
    id: 2,
    propsName: 'content',
    propsType: 'string',
    propsDescription: 'Additional content or description for the empty component.',
    default: 'content',
  },
  {
    id: 3,
    propsName: 'redirectUrl',
    propsType: 'string',
    propsDescription: 'URL to redirect users when a certain action is taken.',
    default: '/home',
  },
  {
    id: 4,
    propsName: 'buttonText',
    propsType: 'string',
    propsDescription: 'Text for the button that triggers a specific action.',
    default: 'Go To Home Page',
  },
  {
    id: 5,
    propsName: 'redirectBtnSize',
    propsType: ['xs', 'sm', 'md', 'lg'],
    propsDescription: 'Redirects button size',
    default: 'md',
  },
  {
    id: 6,
    propsName: 'image',
    propsType: 'ReactNode',
    propsDescription: 'Image displayed in the empty component.',
    default: '',
  },
  {
    id: 7,
    propsName: 'titleStyle',
    propsType: 'string',
    propsDescription: 'Custom class to style the title.',
    default: 'None',
  },
  {
    id: 8,
    propsName: 'contentStyle',
    propsType: 'string',
    propsDescription: 'Custom class to style the content.',
    default: 'None',
  },
  {
    id: 9,
    propsName: 'variant',
    propsType: ['primary', 'dashed', 'text', 'linkPrimary', 'linkGray', 'outlineGray', 'outlinePrimary', 'default'],
    propsDescription: 'Redirect Button type',
    default: 'primary',
  },
]
