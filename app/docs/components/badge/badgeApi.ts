export const badgeApiData = [
  {
    id: 1,
    propsName: "color",
    propsType: ["error", "gray", "info", "success", "warning"],
    propsDescription: "Available Badge color.",
    default: "gray",
  },
  {
    id: 2,
    propsName: "colorType",
    propsType: ["light", "strong"],
    propsDescription: "Color type of the badge",
    default: "light",
  },
  {
    id: 3,
    propsName: "badgeType",
    propsType: ["default", "outline", "text"],
    propsDescription: "Type of the badge ('default', 'outline', or 'text').",
    default: "default",
  },
  {
    id: 4,
    propsName: "href",
    propsType: "string",
    propsDescription: "URL to navigate when the badge is clicked.",
    default: "None",
  },
  {
    id: 5,
    propsName: "icon",
    propsType: "ReactNode",
    propsDescription: "Icon element to be displayed inside the badge.",
    default: "<Crown/>",
  },
  {
    id: 6,
    propsName: "iconPosition",
    propsType: ["left", "right"],
    propsDescription: "Position of the icon inside the badge.",
    default: "right",
  },
  {
    id: 7,
    propsName: "className",
    propsType: "string",
    propsDescription: "Custom CSS class to be added to the badge.",
    default: "None",
  },
  {
    id: 8,
    propsName: "size",
    propsType: ["xs", "sm"],
    propsDescription: "Size variant of the badge.",
    default: "sm",
  },

  {
    id: 10,
    propsName: "dot",
    propsType: "boolean",
    propsDescription: "Show a dot on the badge.",
    default: "false",
  },
  {
    id: 11,
    propsName: "dotPosition",
    propsType: ["left", "right"],
    propsDescription:
      "Position of the dot inside the badge ('left' or 'right').",
    default: "right",
  },
];
