
export default {
    fetchCountries(searchQuery) {
                                                            //endPoint
        const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;  // return fetch(url + articles)
        return fetch(url)
            .then(res => res.json())
            .catch(error => console.log(error));
    },
    get query() {
    return searchQuery;
  }
};

