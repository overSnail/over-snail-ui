module.exports = {
  title: 'MyUI',
  base: '/over-snail-ui/',
  description: '基于vue2.x版本的组件学习项目',
  port: 8083, 
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/component/guide/introduction' },
      { text: '主题', link: '/theme/' },
      // { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      '/component/': [
        {
          title: '开发指南',
          collapsable: false,
          children: [
            'guide/introduction',
            'guide/guide'
          ]
        },
        {
          title: '基础组件',
          collapsable: false,
          children: [
            'basic/button',
            'basic/radio',
            'basic/checkbox',
            'basic/input',
            'basic/input-number'
          ]
        },
      ]
    }
  }
}