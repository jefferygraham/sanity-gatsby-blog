export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea4e0fc3ea009fd304ef435',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3mtpmrdt',
                  apiId: '6e469d15-dca3-4647-b32e-e3c40ec60fdf'
                },
                {
                  buildHookId: '5ea4e0fc3ea009e9644ef503',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-bso7nbyd',
                  apiId: 'bfa34cf4-5b45-4db7-b64c-2be325d42a05'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jefferygraham/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-bso7nbyd.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
