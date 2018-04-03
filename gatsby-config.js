module.exports = {
  siteMetadata: {
    title: `Josh Bryant`,
    tagline: `Bearded Robot Supreme`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-glamor`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`
  ],
};
