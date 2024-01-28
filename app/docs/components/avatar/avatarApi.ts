export const avatarApiData = [
  {
    id: 1,
    propsName: 'alt',
    propsType: 'string',
    propsDescription: 'Alternative text for the avatar image.',
    default: 'avatar',
  },
  {
    id: 2,
    propsName: 'img',
    propsType: 'string',
    propsDescription: "Path to the user's image",
    default: '/avatar.png',
  },
  {
    id: 3,
    propsName: 'size',
    propsType: ['sm', 'md', 'lg', 'xl', '2xl'],
    propsDescription: 'Specifies the size of the avatar',
    default: 'md',
  },
  {
    id: 4,
    propsName: 'shape',
    propsType: ['circle', 'rounded'],
    propsDescription: 'The shape of the avatar.',
    default: 'circle',
  },
  {
    id: 5,
    propsName: 'status',
    propsType: 'boolean',
    propsDescription: "Reflects the user's availability status.",
    default: 'false',
  },
  {
    id: 6,
    propsName: 'className',
    propsType: 'string',
    propsDescription: 'Injects the class name in avatar',
    default: 'None',
  },
]
