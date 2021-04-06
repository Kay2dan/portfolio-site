/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-github-api`,
      options: {
        // url: API URL to use. Defaults to  https://api.github.com/graphql
        url: "https://api.github.com/graphql",
        // token: required by the GitHub API
        token: process.env.TOKEN,
        // GraphQLquery: defaults to a search query
        // graphQLQuery: `
        // query ($author: String = "", $userFirst: Int = 0, $searchFirst: Int = 0, $q: String = "") {
        //   user(login: $author) {
        //     contributionsCollection {
        //       contributionCalendar {
        //         # colors,
        //         # months{
        //         #   firstDay, name,totalWeeks,year
        //         # },
        //         totalContributions,
        //         weeks{
        //           firstDay, contributionDays{
        //             contributionCount,
        //             contributionLevel,
        //             date,
        //             weekday,
        //             color
        //           }
        //         },
        //       }
        //     }
        //   }
        // }`,
        // // variables: defaults to variables needed for a search query
        // variables: {
        //   userFirst: 0,
        //   searchFirst: 0,
        //   q: "author:Kay2dan is:merged state:closed type:pr sort:comments",
        //   author: "Kay2dan",
        // },
        graphQLQuery: `
            query ($author: String = "", $userFirst: Int = 0, $searchFirst: Int = 0, $q: String = "") {
              user(login: $author) {
                repositories(first: $userFirst, orderBy: {field: STARGAZERS, direction: DESC}) {
                  edges {
                    node {
                      name
                      description
                      url
                      stargazers {
                        totalCount
                      }
                      readme: object(expression:"master:README.md"){
                        ... on Blob{
                          text
                        }
                      }
                    }
                  }
                }
              }
              search(query: $q, type: ISSUE, first: $searchFirst) {
                edges {
                  node {
                    ... on PullRequest {
                      title
                      merged
                      url
                      state
                      repository {
                        stargazers {
                          totalCount
                        }
                        repoUrl: url
                        name
                      }
                    }
                  }
                }
              }
            }`,
        variables: {
          userFirst: 3,
          searchFirst: 2,
          q: "author:Kay2dan is:merged state:closed type:pr sort:comments",
          author: "Kay2dan",
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
  ],
};
