const apiKey = '3ee881b7ed69420ebc0d692477003d40';

function fetchArticles(searchQuery, page = 1) {
                                                                     /* REST-пагінація */
    const url = `http://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=10&page=${page}`; // !!! На цю адресу запит
    const options = {
        headers: {
            Authorization: apiKey,
        },
    };

    return fetch(url, options)
        .then(res => res.json())
        //.then(data => data.articles)          // !!! Це відповідь на наш запит
        .then(({articles}) => articles)          // !!! Це відповідь на наш запит
        .catch(error => console.log(error));
}

export default fetchArticles;