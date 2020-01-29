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
                  buildHookId: '5e31a4a015989a1700c18cee',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-bwsh1gvo',
                  apiId: '39e899b6-f1a3-467f-b1be-07ae36352585'
                },
                {
                  buildHookId: '5e31a4a0a46a961fa2298944',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-kotv1guh',
                  apiId: 'b414cc3d-89ed-45e3-bba6-1aa6bb12555a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iquestfr/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-kotv1guh.netlify.com', category: 'apps' }
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
