function createFavouriteMarkup(container, arr) {
  const markup = arr.map(
    ({ id, img, model, type }) => `<li class="js-item item" data-car-id=${id}>
    <img src=${img} alt=${type} class="js-target img-car" loading="lazy" width="700" height="372">
    <h2 class="js-car-name car-name">${type}</h2>
  <h3 class="js-car-model car-model" >${model}</h3>
  
  <div class="all-btns-item">
    <a class="js-more-info more-info">More information...</a>
    <button class="js-delete-btn delete-btn btn">Delete</button>

  </div>

    </li>`
  ).join('');
  container.innerHTML = markup;
}

export { createFavouriteMarkup };
