const { request, logger } = require("../common/utils");
const retryer = require("../common/retryer");
require("dotenv").config();

const fetcher = (variables, token) => {
    return request(
        {
            query: `
      query userInfo($login: String!) {
        user(login: $login) {
          # fetch only owner repos & not forks
          repositories(ownerAffiliations: OWNER, isFork: false, first: 100) {
            nodes {
              name
              languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
                edges {
                  size
                  node {
                    color
                    name
                  }
                }
              }
            }
          }
        }
      }
      `,
            variables,
        },
        {
            Authorization: `bearer ${token}`,
        },
    );
};


// exclude 排除
async function fetchTopLanguages(username, exclude_repo = []) {
    if (!username) throw Error("Invalid username");

    const res = await retryer(fetcher, { login: username });

    if (res.data.errors) {
        logger.error(res.data.errors);
        throw Error(res.data.errors[0].message || "Could not fetch user");
    }

    let repoNodes = res.data.data.user.repositories.nodes;
    let repoToHide = {};

    // populate repoToHide map for quick lookup
    // while filtering out
    if (exclude_repo) {
        exclude_repo.forEach((repoName) => {
            repoToHide[repoName] = true;
        });
    }

    // filter out repositories to be hidden
    repoNodes = repoNodes
        .sort((a, b) => b.size - a.size)
        .filter((name) => {
            return !repoToHide[name.name];
        });

    repoNodes = repoNodes
        .filter((node) => {
            return node.languages.edges.length > 0;
        })
        // flatten the list of language nodes
        .reduce((acc, curr) => curr.languages.edges.concat(acc), [])
        .reduce((acc, prev) => {
            // get the size of the language (bytes)
            let langSize = prev.size;

            // if we already have the language in the accumulator
            // & the current language name is same as previous name
            // add the size to the language size.
            if (acc[prev.node.name] && prev.node.name === acc[prev.node.name].name) {
                langSize = prev.size + acc[prev.node.name].size;
            }
            return {
                ...acc,
                [prev.node.name]: {
                    name: prev.node.name,
                    color: prev.node.color,
                    size: langSize,
                },
            };
        }, {});

    const topLangs = Object.keys(repoNodes)
        .sort((a, b) => repoNodes[b].size - repoNodes[a].size)
        .reduce((result, key) => {
            result[key] = repoNodes[key];
            return result;
        }, {});




    

    const lifeTime = {
        day: {name: 'day', color: 'f1e05a', size: 155},
        week: {name: 'week', color: '#e34c26', size: 136},
        month: {name: 'month', color: '#563d7c', size: 245},
        year: {name: 'year', color: '#89e051', size : 185},
        lifetime: {name: 'lifetime', color: '#89e051', size: 221}
    };





/*      {
            JavaScript: { name: 'JavaScript', color: '#f1e05a', size: 6342638 },
            HTML: { name: 'HTML', color: '#e34c26', size: 6289904 },
            CSS: { name: 'CSS', color: '#563d7c', size: 1683524 },
            Shell: { name: 'Shell', color: '#89e051', size: 21546 }
        } */

    return lifeTime;
}

module.exports = fetchTopLanguages;
