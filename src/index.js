// FIRST SECTION

// import Notiflix from 'notiflix';
// const basicLightbox = require('basiclightbox')
// import * as basicLightbox from 'basiclightbox';

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
const carArr = [
  {
    id: 1,
    img: 'https://auto.24tv.ua/resources/photos/tag/700x372_DIR/201910/2241c58878d8-6a11-4b0c-a999-410284db134a.png?1572008337000',
    model: 'Scala',
    type: 'Skoda',
    year: 2019,
    price: 25000,
  },
  {
    id: 2,
    img: 'https://auto.24tv.ua/resources/photos/tag/700x372_DIR/201902/1835d3d537f7-e4f2-4d18-909e-bd888e35b447.png?1572008566000',
    model: 'RAV4 Hybrid',
    type: 'Toyota',
    year: 2018,
    price: 35000,
  },
  {
    id: 3,
    img: 'https://auto.24tv.ua/resources/photos/tag/700x372_DIR/201902/183386a81d1d-678f-4768-924a-368fb06345a7.png?1572008531000',
    model: 'Vitara',
    type: 'Suzuki',
    year: 2018,
    price: 22000,
  },
  {
    id: 4,
    img: 'https://auto.24tv.ua/resources/photos/tag/700x372_DIR/201808/598d2c6464f-4325-440b-a000-591f2fe1683e.png?1550505538000',
    model: 'C3',
    type: 'Citroen',
    year: 2019,
    price: 15000,
  },
  {
    id: 5,
    img: 'https://auto.24tv.ua/resources/photos/tag/700x372_DIR/201910/2225a8013ece-b524-4329-ab14-548b58582d3c.png?1572008012000',
    model: 'Taycan',
    type: 'Porsche',
    year: 2019,
    price: 150000,
  },
  {
    id: 6,
    img: 'https://auto.24tv.ua/resources/photos/tag/700x372_DIR/201808/635ff3df75b-81b2-4db8-8542-177d652c183a.png?1550515471000',
    model: 'CX-5',
    type: 'Mazda',
    year: 2017,
    price: 30000,
  },
];

const form = document.querySelector('.js-search-form');
const carList = document.querySelector('.js-car-list');
form.addEventListener('submit', onSearch);

//  beginer murkup
(function () {
  const murkup = carArr.map(
    ({ id, img, type }) => `<li class="js-item item" data-car-id=${id}>
    <img src=${img} alt=${type} class="js-target img-car">
    <h2>${type}</h2>
    </li>`
  );
  carList.insertAdjacentHTML('beforeend', murkup.join(''));
})();

carList.addEventListener('click', onClickEl);
function onClickEl(evt) {
  if (!evt.target.classList.contains('js-target')) {
    return;
  }
  const currentCard = evt.target.closest('.js-item');
  const carId = Number(currentCard.dataset.carId);
  const fullInfoItem = carArr.find(({ id }) => id === carId);

  const instance = basicLightbox.create(`
  <div class="modal">
      <p>
          Your first lightbox with just a few lines of code.
          Yes, it's really that simple.
      </p>
  </div>
`);

  instance.show(() => console.log('lightbox now visible'));
  console.log(fullInfoItem);
}

function createMurkup(arr) {
  const murkup = arr
    .map(
      ({ id, img, model, type, year, price }) => `
      <li class="item" data-car-id=${id}>
      <img src=${img} alt=${type}>
      <h2>${type}</h2>
      <h3>${model}</h3>
      <h3>${year}</h3>
      <p>Price: ${price}$</p>
      </li>`
    )
    .join('');
  return murkup;
}
// carList.insertAdjacentHTML('beforeend', createMurkup(carArr));

function onSearch(evt) {
  evt.preventDefault();
  const { qwery, typeSelect } = evt.currentTarget.elements;
  const result = carArr.filter(item =>
    item[typeSelect.value].toLowerCase().includes(qwery.value.toLowerCase())
  );
  //   console.dir(result);
  carList.innerHTML = createMurkup(result);
}

// const carList = document.querySelector('.js-car-list');
// console.dir(carList);
// const murkup = carArr
//   .map(
//     ({ id, img, model, type, year, price }) => `
// <li class="item" data-car-id=${id}>
// <img src=${img} alt=${type}>
// <h2>${type}</h2>
// <h3>${model}</h3>
// <h3>${year}</h3>
// <p>Price: ${price}$</p>
// </li>`
//   )
//   .join('');
// carList.insertAdjacentHTML('beforeend', murkup);

// carList.addEventListener('click', onClick);
// function onClick(evt) {
//   const parent = evt.target.closest('li');
//   console.dir(parent);
//   const id = parent.dataset.carId;
//   console.log(id);
// }

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
