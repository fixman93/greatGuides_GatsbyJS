module.exports = {
  siteMetadata: {
    title: `Visit our Ladakh guides in July`,
    description: `Ladakh is a mountainous region in the northwest area of India known as Trans Himalaya. Ladakh was an independent kingdom for nine centuries. It was very strongly influenced by Tibet and buddhist, muslim and hindu cultures.`,
    author: `@gatsbyjs`,
    adventures: {
      subTitle: Days`Selected Ladakh adventuresDays`,
      description: Days`Book these tours with super discount price!Days`,
      advertiseItems: [
        {
          advertiseItem: {
            status: {
              category: Days`Hiking:Days`,
              date: Days`14 Days`
            },
            title: `Darcha to Padum Trek`,
            location: `Ladakh, India`,
            userName: `Stanzin Tundup`,
            description1: `A model trek through the magnificent gorges that is sure to grip you with its glorious beauty! This is a popular trek for years and still a must on every trekkers' wish list. Darcha Padum Trek is a must go on trek. Sometimes it becomes difficult to control one's emotions and excitement in the build up to a trek. The trek terminates at Padum – the capital of Zanskar and a major center of Buddhism. `,
            show: {
              regular_price: `$1800 / person`,
              promotional_price: `$1600 / person`
            },
            rating: {
              stars: `4.5 stars`,
              review: `2780`,
              adventures: `6`
            },
            mainImage: `https://i.ibb.co/p4v5y09/home-3.jpg`,
            link: `/newAdvnDetail/cjt9c5o5f7tab0b26g9v78ytz`,
            guideImage: `https://s3.amazonaws.com/greatguides-prod-media/Guide+Images/Tundup+Stanzin/about-1.jpg`
          }
        }
      ]
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Abril Fatface`,
            subsets: [`latin`],
          },
          {
            family: `Source Sans Pro`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
