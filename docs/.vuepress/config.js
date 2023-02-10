import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

// .vuepress/config.js
module.exports = {
  title: '',
  lang: 'zh-CN',
  base: '/undwin.github.io/',
  description: '开发技术，分布式，微服务，高并发，高可用，高可扩展，高可维护，JVM技术，MySQL，分布式数据库，分布式事务，云原生，大数据，云计算，渗透技术，各种面试题，面试技巧',
  markdown:{
      pageSuffix: '.md',
  },
  themeConfig: {
       displayAllHeaders: true ,
       activeHeaderLinks: false,
       smoothScroll: true,
       sidebarDepth: 2,
       nav: [
            { text: '首页', link: '/' },
            { 
                text: '消息中间件', 
                items: [
                    // { text: 'kafka', link: '/kafka/' }
                ]
            }
        ],
        sidebar: {
             // '/kafka/': genSidebar.genDefaultSidebar('kafka', 'kafka', true, 4),
             '/': ['']

        }
  },
    plugins:[
     backToTopPlugin()
    ]

}