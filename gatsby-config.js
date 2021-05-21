module.exports = {
  siteMetadata: {
    title: 'T Squared Inc',
    description: 'My Personal Blog',
    twitter: 'TheRealTylerThompson2',
    creator: 'Tyler Thompson',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
      // __key: `posts`,
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: `@theme-ui/preset-dark`,
        prismPreset: `prism-okaidia`,
      },
    },
  ],
}
