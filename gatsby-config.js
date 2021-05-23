module.exports = {
  siteMetadata: {
    title: 'T Squared Inc',
    description: 'My Personal Blog',
    twitter: 'TheRealTylerThompson2',
    creator: 'Tyler Thompson',
    siteUrl: 'https://tylerthompson.io',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        prismPreset: `prism-okaidia`,
        preset: `@theme-ui/preset-funk`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
