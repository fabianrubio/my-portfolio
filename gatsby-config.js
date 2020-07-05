module.exports = {
  siteMetadata: {
    title: "Fabian Rubio | Front-end Developer",
    author: "Fabian Rubio",
    description: "This website is about professional information",
    keywords: `Frontend developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter`,
    linkedin: `https://www.linkedin.com/in/fabian-rubio`,
    github: `https://github.com/fabianrubio`,
    bulma: `https://bulma.io/`,
    codepen: `https://codepen.io/fabian_rubio`,
    urlResume: `https://drive.google.com/file/d/1M8_WyNiqio6s5SO8qWdLjvXeT-_B04Mb/view?usp=sharing`,
    siteUrl: `https://fabianrubio.dev`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Makefolio",
        short_name: "Makefolio",
        start_url: "/",
        background_color: "#2980b9",
        theme_color: "#2980b9",
        display: "standalone",
        icon: "src/images/my-avatar.png",
        orientation: "portrait",
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-XXXXXXXX-X",
        // Setting this parameter is optional (requried for some countries such as Germany)
        anonymize: true,
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
