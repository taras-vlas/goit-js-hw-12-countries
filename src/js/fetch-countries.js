
import countrySearchApi from './rest-countries';
import refs from './refs';
import countryList from '../templates/country-list.hbs';
import countryArticles from '../templates/country-articles.hbs';

import debounce from 'lodash.debounce';  //npm-пакет lodash.debounce | var debounce = require('lodash.debounce'); 
import '@pnotify/core/dist/PNotify.css';  //React
import '@pnotify/core/dist/BrightTheme.css'; //Styles
import { error } from '@pnotify/core'; //плагін pnotify  || const { error } = require('@pnotify/core');  

let delayEvent = debounce(countrySearchInputHandler, 500);

refs.searchForm.addEventListener('input', delayEvent);

function countrySearchInputHandler(event) {
    event.preventDefault();
    clearArticlesContainer();
      const searchQuery = event.target.value;
    fetchCountries(searchQuery);

  
  function fetchCountries() {
    countrySearchApi.fetchCountries(searchQuery)       //function fetchCountries() {
      .then(countries => {
        console.log('countries (About): ', countries, 'countries.length: ', countries.length);
     
        if (countries.length > 10)
          error('Too many matches found. Please enter a more specific query!');
        if (countries.status === 404)
          error('No country has been found. Please enter a more specific query!');
      
        appendListMarkup(countries);
      })
      .catch(Error => {
        Error('You must enter query parameters!');
        console.log(Error);
      })
  }
}


function appendListMarkup(countries) {
  let template = '';
  if (countries.length === 1) {
      template = countryArticles(countries);
  } else if (countries.length <= 10) {
    template = countryList(countries);
  }
    
      console.log('template: ', template);
      console.log('refs.articlesContainer: ', refs.articlesContainer);
  refs.articlesContainer.insertAdjacentHTML('afterbegin', template);
}


function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}



/*
npm i --save lodash.debounce
Далее импорт. В js файле, в котором находится функция для дебаунса пишете
import debounce from 'lodash.debounce';
Далее "оборачиваете" нужную функцию (callback). Например, так:
элемент для слушателя.addEventListener("событие"[например, клик или инпут], 
debounce([название функции или блок кода], 500 [время задержки]));
*/

/*
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import {
  notice,
  error,
  defaultModules,
  // defaults,
  Stack,
} from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
defaultModules.set(PNotifyMobile, {});
const myStack = new Stack({
  dir1: 'down',
  dir2: 'left',
  firstpos1: 25,
  firstpos2: 30,
  context: document.body,
});
const noticeOptions = {
  title: 'Serching for images',
  text: 'Awaiting while downloading images from server',
  stack: myStack,
  delay: 2000,
};
notice({
      ...noticeOptions,
      title: 'Ops! No more Images',
      text: 'Try to find something else!',
    });
*/