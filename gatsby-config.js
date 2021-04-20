module.exports = {
  siteMetadata: {
    title: 'T Squared Inc',
    description: 'My Personal Blog - Maybe',
    twitter: 'TheRealTylerThompson2',
  },
  plugins: [
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
}
