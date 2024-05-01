/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "One Piece Character Database",
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
      }
    },
  ],
}
