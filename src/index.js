// FIRST SECTION

// import Notiflix from 'notiflix';

// const start = document.querySelector('.game-section-btn');
// const container = document.querySelector('.js-container');

// start.addEventListener('click', onClick);
// function onClick() {
//   const promises = [...container.children].map((item, idx) => {
//     start.disabled = true;
//     item.textContent = '';
//     const promise = createPromise(idx);
//     promise
//       .then(value => {
//         item.textContent = value;
//       })
//       .catch(err => {
//         item.textContent = err;
//       });

//     return promise;
//   });
//   Promise.allSettled(promises).then(promise => {
//     const isAllRes = promise.every(({ status }) => status === 'fulfilled');
//     const isAllRej = promise.every(({ status }) => status === 'rejected');

//     setTimeout(() => {
//       if (isAllRes || isAllRej) {
//         Notiflix.Notify.success('Winner!!!');
//       } else {
//         Notiflix.Notify.failure('Try again');
//       }
//       start.disabled = false;
//     }, 1000);
//   });
// }

// function createPromise(delay) {
//   return new Promise((res, rej) => {
//     const random = Math.random();
//     setTimeout(() => {
//       if (random > 0.5) {
//         res('🤑');
//       } else {
//         rej('😈');
//       }
//     }, delay * 1000);
//   });
// }

// -----------------------------------------------------------------------------------
// SECOND SECTION

// THIRD SECTION----------------------------------------------------------------------

import { carArr } from './cars';
import { common } from './common';
import { createMarkup } from './helpers/create-markup-card';
import { createModal } from './helpers/create-modal';
import { findProduct } from './helpers/find-product';

// const section = document.querySelector('.section');
const form = document.querySelector('.js-search-form');
const carList = document.querySelector('.js-car-list');
form.addEventListener('submit', onSearch);
carList.addEventListener('click', onClickEl);

createMarkup(carList, carArr);

const arrFavourite = JSON.parse(localStorage.getItem(common.arrFavourite)) ?? [];
const arrCheckOut = JSON.parse(localStorage.getItem(common.arrCheckOut)) ?? [];

function onClickEl(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains('js-more-info')) {
    const currentProduct = findProduct(evt.target)
    createModal(currentProduct)

  }else if(evt.target.classList.contains('js-favourite-btn')){
    const currentProduct = findProduct(evt.target);
    const inFavourite = arrFavourite.some(({id}) => id === currentProduct.id);

    if(inFavourite){
      return;
    }
    arrFavourite.push(currentProduct);
    localStorage.setItem(common.arrFavourite, JSON.stringify(arrFavourite))
  }
}

const mainEl = document.querySelector('main');

function onSearch(evt) {
  evt.preventDefault();
  const { qwery, typeSelect } = evt.currentTarget.elements;
  const result = carArr.filter(item =>
    item[typeSelect.value].toLowerCase().includes(qwery.value.toLowerCase())
  );

  result.length <= 1
    ? mainEl.classList.add('background-height')
    : mainEl.classList.remove('background-height');
    createMarkup( carList, result);
}

// -----------------------------------------------------------------------------------
// const textList = document.querySelector('.js-text-list');
// textList.addEventListener('click', onClick);

// const maxLength = 70;
// const totalLength = maxLength + 3;
// function formatText(title){
//     const result = title.textContent.slice(0, maxLength);
//     const data = title.textContent.slice(maxLength);
//     title.textContent = result + "...";
//     title.setAttribute('data-text-item', data);
//     // console.log(title.dataset)
// }
// [...textList.children].forEach(formatText)

// function onClick(evt){
//     console.dir(evt.target.textContent.length)
//     const el = evt.target
//     if(el.textContent.length <= totalLength){
//         el.textContent = el.textContent.slice(0, maxLength) + el.dataset.textItem;
//     }else{
//         formatText(el);
//     }

// }

// -------------------------------------
// const box = document.querySelector(".js-box");
// const btn = document.querySelector(".js-btn");
// btn.addEventListener("click", onClick);

// function onClick(){
//     box.classList.remove('hidden')
//     document.addEventListener("keydown", onkeydown)
// }

// function onkeydown(evt){
//     console.dir(evt)
//     if(evt.code === "Escape"){
//         box.classList.add('hidden')
//         document.removeEventListener("keydown",onkeydown);
//     }
// }
