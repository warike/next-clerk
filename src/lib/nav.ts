import { Icons } from "@/components/shared/Icons"


export const MenuItems = {
  navMain: [
    {
      title: "Admin",
      url: "#",
      icon: Icons.settings,
      isActive: true,
      items: [
        {
          title: "Users",
          
          url: {
            pathname: '/dashboard/users'
          },
        },
      ],
    },
  ],
}
  export const navigation = {
    solutions: [
      { name: 'Marketing', href: '#' },
      { name: 'Analytics', href: '#' },
      { name: 'Automation', href: '#' },
      { name: 'Commerce', href: '#' },
      { name: 'Insights', href: '#' },
    ],
    support: [
      { name: 'Submit ticket', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Guides', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
    ],
    legal: [
      { name: 'Terms of service', href: '#' },
      { name: 'Privacy policy', href: '#' },
      { name: 'License', href: '#' },
    ],
  }
