module.exports = {
    title: "Jon Vinson Info",
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'canonical', href: 'https://vuepress-deploy.netlify.com' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    plugins: [
        '@vuepress/blog',
        {
            id: 'post',
            // Target directory
            dirname: '_posts',
            // Path of the `entry page` (or `list page`)
            path: '/post/',
            layout: 'MyIndexPost',
            itemLayout: 'MyPost',
            frontmatters: [
                {
                  // Unique ID of current classification
                  id: 'tag',
                  // Decide that the frontmatter keys will be grouped under this classification
                  keys: ['tag'],
                  // Path of the `entry page` (or `list page`)
                  path: '/tag/',
                  // Layout of the `entry page`
                  layout: 'Tags',
                  // Layout of the `scope page`
                  scopeLayout: 'Tag'
                },
              ],
        },
      ],
    serviceWorker: true,
    themeConfig: {
        docsDir: 'blog',
        repo: 'electricvino/jv-info',

        nav: [{
                text: 'Blog',
                link: '/blog/',
            },
            {
                text: 'Admin',
                link: '/admin',
            }

        ]

    }
}