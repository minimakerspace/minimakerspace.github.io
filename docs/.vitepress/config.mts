import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'mini MAKERSPACE Docs',
  description: 'Practical notes for 3D printing, electronics, and rapid prototyping.',
  cleanUrls: true,
  lastUpdated: true,
  appearance: false,
  sitemap: {
    hostname: 'https://docs.minimakerspace.id'
  },
  head: [
    ['link', { rel: 'icon', href: '/mini-logo.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Krona+One&family=Poppins:wght@400;500;600;700&display=swap'
      }
    ],
    ['meta', { name: 'theme-color', content: '#7e1417' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://docs.minimakerspace.id/' }],
    ['meta', { property: 'og:title', content: 'mini MAKERSPACE Docs' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'Practical notes for 3D printing, electronics, and rapid prototyping.'
      }
    ]
  ],
  themeConfig: {
    logo: '/mini-logo.svg',
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start Here', link: '/guide/getting-started' },
      {
        text: 'Build Guides',
        items: [
          { text: '3D Printing', link: '/guide/3d-printing' },
          { text: 'Electronics', link: '/guide/electronics' }
        ]
      },
      { text: 'Main Site ↗', link: 'https://minimakerspace.id' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Start Here',
          items: [
            { text: 'Welcome', link: '/guide/getting-started' },
            { text: 'Contributing', link: '/guide/contributing' }
          ]
        },
        {
          text: 'Build Guides',
          items: [
            { text: '3D Printing', link: '/guide/3d-printing' },
            { text: 'Electronics', link: '/guide/electronics' }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    editLink: {
      pattern: 'https://github.com/minimakerspace/minimakerspace.github.io/edit/main/docs/:path',
      text: 'Suggest an edit on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/minimakerspace' }
    ],
    footer: {
      message: 'Designed and documented in Indonesia.',
      copyright: '© 2026 mini MAKERSPACE'
    }
  }
})
