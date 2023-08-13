interface routerPath {
  id: number;
  name: string;
  href: string;
}

export const routes: routerPath[] = [
  { id: 1, name: "Alert", href: "/alert" },
  { id: 2, name: "Avatar", href: "/avatar" },
  { id: 3, name: "Avatar Group", href: "/avatarGroup" },
  { id: 4, name: "Accordion", href: "/accordion" },
  { id: 5, name: "Button", href: "/button" },
  { id: 6, name: "Button Group", href: "/buttonGroup" },
  { id: 7, name: "Badge", href: "/badge" },
  { id: 8, name: "BreadCrumb", href: "/breadcrumb" },
  { id: 9, name: "Card", href: "/card" },
  { id: 10, name: "Carousel", href: "/carousel" },
  { id: 11, name: "Play Button", href: "/playButton" },
  { id: 12, name: "Progress", href: "/progress" },
  { id: 13, name: "Notification", href: "/notification" },
  { id: 14, name: "Tooltip", href: "/tooltip" },
];
