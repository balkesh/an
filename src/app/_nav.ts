export const navItems = [
  {
    name: 'Portals',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Pool Portal',
    url: '/pool-portal',
    icon: 'icon-layers',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    divider: true
  },
  {
    name: 'Pool Participant',
    url: '/pool-participant',
    icon: 'icon-layers',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    divider: true
  },
  {
    name: 'Premium & Penalty',
    url: '/premium-and-penalty-home',
    icon: 'icon-layers',
    children: [
      {
        name: 'Home',
        url: '/premium-and-penalty-home',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    divider: true
  },
  {
    name: 'Vessel Portal',
    url: '/vessel-portal-home',
    icon: 'icon-layers',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  }
];
