const retryer = require("../common/retryer");
require("dotenv").config();


async function fetchTopLanguages(username) {

    // let repoNodes = res.data.data.user.repositories.nodes;


/*     const topLangs = Object.keys(repoNodes)
        .sort((a, b) => repoNodes[b].size - repoNodes[a].size)
        .reduce((result, key) => {
            result[key] = repoNodes[key];
            return result;
        }, {}); */

    

    const lifeTime = {
        day: {name: 'day', color: '#f1e05a', size: 155},
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
