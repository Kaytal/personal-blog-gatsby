module.exports = {
  siteMetadata: {
    title: `Josh Bryant`,
    tagline: `Bearded Robot Supreme`,
    description: `A small blog about what I'm currently up to.  Web Dev, Woodworking, Gardening, no hobby shall be spared!`,
    canonicalBase: `https://josh.beardedrobots.com`
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
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        precision: 8, // SASS default: 5
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`
  ],
};
