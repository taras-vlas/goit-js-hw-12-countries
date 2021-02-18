/*        -  Дає уявлення
Використання окремого об'єкта для збереження логіки /чи уявлення 
Можна виконувати як:
    як об'єкт (+методи, +властивості/property);
    як модуль;
    локальними змінними;
    функціями;
    класами
*/


//import './styles.css';
import './sass/styles.scss';
//import articlesTpl from './templates/articles.hbs'; // затягуємо цей шаблон templates  /////забираєм до ...js
//import fetchArticles from './js/fetch-articles.js';

import newsService from './js/news-service';
import updateArticlesMarkup from './js/update-articles-markup.js';
//import loadMoreBtn from './js/components/load-more-button'; /* Варіант для  Об'єкта */ 
  import LoadMoreBtn from './js/components/load-more-button'; /* Варіант для  Класу */
import refs from './js/refs';

// /* fetch - отримати | api = backend  */
//     //fetch('http://hn.algolia.com/api/v1/search?query=...'); //корінь і параметри запиту(endpoint): на публічний api (не приватний backend)
//     /*параметри    ЗАПИТу    через  fetch API - через Network|+Data cache...|All. XHR і інші фільтри...  */

// // const options = {
// //     method: 'GET',
// //     headers: {
// //         //Accept: 'application/json', // MIME-типи
// //         Accept: 'text/html', // MIME-типи
// //     },
// // };

// // fetch('https://jsonplaceholder.typicode.com/todos',  options);
//     //fetch('https://jsonplaceholder.typicode.com/todos').then(console.log);
//  // fetch('https://jsonplaceholder.typicode.com/todos')
//  //     .then(response => response.json())
//  //     .then(data => console.log(data));    // .then(console.log); вже доступний рез-т в цьому .then

// //fetch('https://jsonplaceholder.typicode.com')
//  //fetch('https://jsonplaceholder.typicode.com/users')
//  //    .then(response => response.json())
//  //    .then(data => console.log(data));    // .then(console.log);



// // fetch('http://hn.algolia.com/api/v1/search?query=html&tags=story') //властивість = значення  :або щось про react
// /* якщо цей запит зробити прямо в браузері то отримаєм JSON formating*/ 
// //     .then(res => res.json())
// //     .then(data => console.log(data));    // .then(console.log);
 



// /* AUTHENTICATION -  деякі публічні API вимагають мій ключ*/
// //fetch('http://newsapi.org/v2/everything?q=bitcoin&language=en&apiKey=3ee881b7ed69420ebc0d692477003d40');

// // const refs = {
// //     articlesContainer: document.querySelector('.js-articles'),
// //     searchForm: document.querySelector('.js-search-form'),
// // };

// // refs.searchForm.addEventListener('submit', event => {
// //     event.preventDefault();

// //     //console.log(event.currentTarget.elements.query.value);
// //     const form = event.currentTarget;
// //     const inputValue = form.elements.query.value;

// //     console.log(inputValue);
// // });  

// // const apiKey = '3ee881b7ed69420ebc0d692477003d40';
// // //const url = `http://newsapi.org/v2/everything?q=bitcoin&language=en&apiKey=${apiKey}`;
// // const url = `http://newsapi.org/v2/everything?q=bitcoin&language=en`;

// // const options = {
// //     headers: {
// //         //'X-Api-Ke': apiKey,
// //         Authorization: apiKey,
// //     },
// // };

// // fetch(url, options)
// //     .then(res => res.json())
// //     //.then(data => console.log(data.articles)) // в articles лежить об'єкт
// //     //.then(({articles}) => console.log(articles)) // деструктуризували articles
// //     .then(({ articles }) => {
// //        //console.log('articles:', articles);
        
// //         const markup = articlesTpl(articles);
        
// //         //console.log('markup:', markup);

// //         refs.articlesContainer.insertAdjacentHTML('beforeend', markup);   
// //     })
// //     .catch(error => console.log(error));




// /* Вводимо в поле  для ШУКАЄМО */
// // const refs = {
// //     articlesContainer: document.querySelector('.js-articles'),
// //     searchForm: document.querySelector('.js-search-form'),
// // };
// // refs.searchForm.addEventListener('submit', event => {
// //     event.preventDefault();

// //     const form = event.currentTarget;
// //     const inputValue = form.elements.query.value;

// // const apiKey = '3ee881b7ed69420ebc0d692477003d40';
// // const url = `http://newsapi.org/v2/everything?q=${inputValue}&language=en`;

// // const options = {
// //     headers: {
// //         Authorization: apiKey,
// //     },
// // };

// // fetch(url, options)
// //     .then(res => res.json())
// //     .then(({ articles }) => {
// //         const markup = articlesTpl(articles);
// //         refs.articlesContainer.insertAdjacentHTML('beforeend', markup);   
// //     })
// //     .catch(error => console.log(error));
// // });
    





// /// const refs = {
// ///     articlesContainer: document.querySelector('.js-articles'),  /*перенесли до ...js !!!! не можу  */
// ///     searchForm: document.querySelector('.js-search-form'),
// /// };

// //let searchQuery = '';  // пішло до news-srvice
// //let page = 1;

// refs.searchForm.addEventListener('submit', event => {
//     event.preventDefault();

//     const form = event.currentTarget;
//     //const inputValue = form.elements.query.value;
//     //searchQuery = form.elements.query.value;
//     newsService.query = form.elements.query.value;

//     refs.articlesContainer.innerHTML = '';  /* хороший спосіб очистки */
    
//     newsService.resetPage();
//     fetchArticles();

// //     refs.loadMoreBtn.classList.add('is-hidden'); /* схованa btn */
// //     refs.spinner.classList.remove('is-hidden'); /* запускаєм перед запитом завжди */
// //     //fetchArticles(inputValue).then(data => console.log(data));
// //     //fetchArticles(inputValue).then(articles => console.log(articles));
// //     //fetchArticles(inputValue).then(updateArticlesMarkup);
// //     //newsService.fetchArticles(searchQuery, page).then(articles => {
// //     //newsService.fetchArticles(searchQuery).then(articles => {
// //     newsService.fetchArticles()
// //         .then(articles => {
// //             updateArticlesMarkup(articles);
// //             refs.loadMoreBtn.classList.remove('is-hidden'); /* Показуєм сховану  btn */
// //         })
// //         .finally( () => {
// //         refs.spinner.classList.add('is-hidden');
// //         // page += 1;
// //         });  
// // ////// newsService.fetchArticles().then(updateArticlesMarkup);   
// // ////// });
//     form.reset();
// });

// refs.loadMoreBtn.addEventListener('click', fetchArticles);

// // // function updateArticlesMarkup(articles) {   /*перенесли до ...js */
// // //     const markup = articlesTpl(articles);
// // //     refs.articlesContainer.insertAdjacentHTML('beforeend', markup);   
// // // }

// // refs.loadMoreBtn.addEventListener('click', () => {
// //     refs.loadMoreBtn.classList.add('is-hidden'); /* схованa btn */
// //     refs.spinner.classList.remove('is-hidden'); /* запускаєм перед запитом завжди */
// //     //newsService.fetchArticles(searchQuery, page).then(articles => {
// //     //newsService.fetchArticles(searchQuery).then(articles => {
// //     newsService.fetchArticles().then(articles => {
// //         updateArticlesMarkup(articles);
// //         refs.loadMoreBtn.classList.remove('is-hidden'); /* Показуєм сховану  btn */
// //         })
// //         .finally( () => {
// //         refs.spinner.classList.add('is-hidden');
// //         // page += 1;
// //         });  
// // });


// function fetchArticles() {
//     refs.loadMoreBtn.classList.add('is-hidden'); /* схованa btn */
//     refs.spinner.classList.remove('is-hidden'); /* запускаєм перед запитом завжди */

//     newsService.fetchArticles().then(articles => {
//         updateArticlesMarkup(articles);
//         refs.loadMoreBtn.classList.remove('is-hidden'); /* Показуєм сховану  btn */
        
//         // console.log(document.documentElement.offsetHeight);

//         // window.scrollTo({
//         //     top: document.documentElement.offsetHeight,
//         //     behavior: 'smooth',
//         //     });
//         })
//         .finally( () => {
//         refs.spinner.classList.add('is-hidden');
//         // page += 1;
//         });  
// }






    /* Варіант для  Об'єкта */ 
// // const loadMoreBtn = {  /* робимо об'єкт */
// //     enable() {   /*show*/
// //         refs.loadMoreBtn.disabled = false; /* коли все OK, вона включена*/
// //         refs.loadMoreBtnLabel.textContent = 'Показати ще';
// //         refs.loadMoreBtnSpinner.classList.add('is-hidden'); /* Після загрузки Spinner ховаємо */ 
// //     },
// //     disable() {  /*hide*/
// //         refs.loadMoreBtn.disabled = true;
// //         refs.loadMoreBtnLabel.textContent = 'Загрузка...';
// //         refs.loadMoreBtnSpinner.classList.remove('is-hidden'); /* Перед загрузкою Spinner прибираємо */ 
// //     },
// //     show() {  /* покажемо btn при першій загрузці */
// //         refs.loadMoreBtn.classList.remove('is-hidden');
// //     },
// // }

// // refs.searchForm.addEventListener('submit', event => {
// //     event.preventDefault();  
// // });
// refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
// loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

// function searchFormSubmitHandler(event) {
//     event.preventDefault();

//     const form = event.currentTarget;   
//     newsService.query = form.elements.query.value;
//     //refs.articlesContainer.innerHTML = '';  /* хороший спосіб очистки */
    
//     clearArticlesContainer();
//     newsService.resetPage();
//     fetchArticles();
//     form.reset();
//  }

// function fetchArticles() {
//     //refs.loadMoreBtn.classList.add('is-hidden'); /* схованa btn */
//     //refs.spinner.classList.remove('is-hidden'); /* запускаєм перед запитом завжди */

//     loadMoreBtn.disable();
//     // refs.loadMoreBtn.disabled = true;
//     // refs.loadMoreBtnLabel.textContent = 'Загрузка...';
//     // refs.loadMoreBtnSpinner.classList.remove('is-hidden'); /* Перед загрузкою Spinner прибираємо */ 

//     newsService.fetchArticles().then(articles => {
//         updateArticlesMarkup(articles);
//         loadMoreBtn.show();
//         loadMoreBtn.enable();
//         // refs.loadMoreBtn.disabled = false; /* коли все OK, вона включена*/
//         // refs.loadMoreBtnLabel.textContent = 'Показати ще';
//         // refs.loadMoreBtnSpinner.classList.add('is-hidden'); /* Після загрузки Spinner ховаємо */ 

//         //refs.loadMoreBtn.classList.remove('is-hidden'); /* Показуєм сховану  btn */

//         // window.scrollTo({
//         //   top: document.documentElement.offsetHeight,
//         //   behavior: 'smooth',
//         // });
//     });
//         // .finally(() => {
//         //     //refs.spinner.classList.add('is-hidden');
//         // });  
// }

// function clearArticlesContainer() {
//     refs.articlesContainer.innerHTML = '';  /* хороший спосіб очистки */
// }




/* Варіант для  Класа */
//console.log(new LoadMoreBtn('button[data-action="load-more"]'));
/* Робимо новий spinner */
//const loadMoreBtn = new LoadMoreBtn('button[data-action="load-more"]');
//console.log(loadMoreBtn);
const loadMoreBtn = new LoadMoreBtn({  /*для btn без is-hidden*/
    selector: 'button[data-action="load-more"]',
    hidden: true,                  
    });
 console.log(loadMoreBtn); 

// const loadMoreUsersBtn = new LoadMoreBtn('.load-more-enything'); /* Можна зробити безліч цих кнопок на Класі */
//  console.log(loadMoreUsersBtn);

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

function searchFormSubmitHandler(event) {
    event.preventDefault();

    const form = event.currentTarget;   
    newsService.query = form.elements.query.value;
    
    clearArticlesContainer();
    newsService.resetPage();
    fetchArticles();
    form.reset();
}

function fetchArticles() {
    loadMoreBtn.disable();

    newsService.fetchArticles().then(articles => {
        updateArticlesMarkup(articles);
        loadMoreBtn.show();
        loadMoreBtn.enable();
    });
}

function clearArticlesContainer() {
    refs.articlesContainer.innerHTML = '';  /* хороший спосіб очистки */
}


