/*
 *     Використовуєм окремий об'єкт для збереження логіки 
 *     newsService.js  -  об'єкт виконує логіку
 */

const apiKey = '3ee881b7ed69420ebc0d692477003d40';

export default {
    searchQuery: '',
    page: 1,
    // fetchArticles(searchQuery) {                                                                   /* REST-пагінація */
    //     const url = `http://newsapi.org/v2/everything?q=
    //     ${this.searchQuery}&language=en&pageSize=10&page=
    //     ${this.page}`; // !!! На цю адресу запит
    fetchArticles(searchQuery) {                                                                   /* REST-пагінація */
        const url = `http://newsapi.org/v2/everything?q=
        ${this.query}&language=en&pageSize=2&page=
        ${this.page}`;    /* як варіант звернення до GET-ера  */
        const options = {
            headers: { Authorization: apiKey,},
        };

        return fetch(url, options)
            .then(res => res.json())
            .then(({ articles }) => {
                //this.page += 1; /* виносим в incrementPage() */
                this.incrementPage(); /*  incrementPage() */

                return articles;
            });       // !!! Це відповідь на наш запит          
    },
    resetPage() {
        this.page = 1;
    },    
    incrementPage() {  /* створюєм incrementPage() */
        this.page += 1;
    },
    get query() {         /*  на всяк випадок стоять */
        return this.searchQuery;
    },
    set query(value) {
        this.searchQuery = value;
    },
};


  
