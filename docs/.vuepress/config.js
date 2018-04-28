module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Accreative',
      description: '一直在行动'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'accr',
    editLinks: true,
    docsDir: 'docs',
    nav: [
      { text: '首页', link: '/' },
      { text: '技术博客',
        items: [
          { text: '前端开发', link: '/blog/fe/' },
          { text: '区块链', link: '/blog/blockchain/' }
        ]
      },
      { text: '项目案例',
        items: [
          { text: '去中心化电商', link: '/project/ec/' },
          { text: '区块链', link: '/blog/blockchain/' }
        ]
      },
      { text: '投资理财', link: '/investment/' },
      { text: '相册集', link: '/music/' },
      { text: '关于我', link: '/about/' }
    ],
    // locales: {
    //   '/': {
    //     label: '简体中文',
    //     selectText: 'Languages',
    //     editLinkText: 'Edit this page on GitHub',
    //     nav: [
    //       {
    //         text: '首页',
    //         link: '/new/',
    //       },
    //       {
    //         text: '技术博客',
    //         link: '/blog/'
    //       },
    //       {
    //         text: '理财',
    //         link: '/default-theme-config/'
    //       }
    //     ],
    //     sidebar: {
    //       '/guide/': genSidebarConfig('Guide')
    //     }
    //   },
    //   '/zh/': {
    //     label: '简体中文',
    //     selectText: '选择语言',
    //     editLinkText: '在 GitHub 上编辑此页',
    //     nav: [
    //       {
    //         text: '指南',
    //         link: '/zh/guide/',
    //       },
    //       {
    //         text: '配置',
    //         link: '/zh/config/'
    //       },
    //       {
    //         text: '默认主题',
    //         link: '/zh/default-theme-config/'
    //       }
    //     ],
    //     sidebar: {
    //       '/zh/guide/': genSidebarConfig('指南')
    //     }
    //   }
    // }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
      ]
    }
  ]
}
