export interface RouteConfig {
  name: string;
  isActive: boolean;
}

export const appRoutes: RouteConfig[] = [
  {
    name: 'Home',
    isActive: true
  },
  {
    name: 'Services',
    isActive: false
  },
  {
    name: 'News',
    isActive: false
  },
  {
    name: 'Blog',
    isActive: false
  },
  {
    name: 'Contact',
    isActive: false
  }
]