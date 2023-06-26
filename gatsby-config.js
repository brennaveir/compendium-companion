/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `compendium-companion`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
   
    resolve: 'gatsby-source-filesystem',
    options: {
      name: `collection`,
      path: `${__dirname}/collection`
    },
    __key: "collection"
  }]
};