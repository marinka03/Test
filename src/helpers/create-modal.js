import * as basicLightbox from 'basiclightbox';
import { closeModal } from './close-modal';

function createModal({ id, img, model, type, year, price }) {
  const instance = basicLightbox.create(
    `
    <div class="js-item modal" data-car-id=${id}>
      <img src=${img} alt=${type} class="js-target img-car" loading="lazy" width="700" height="372">
      <h2 class="js-car-name car-name">${type}</h2>
      <h3 class="js-car-model car-model" >${model}</h3>

      <div class="js-wrapper-more-description wrapper-more-description">
        <p class="js-year year">Year: ${year}</p>
        <p class="js-price price">Price: ${price}$</p>
      </div>
      
    </div>
  `,
    {
      handler: null,
      onShow(instance) {
        this.handler = closeModal.bind(instance);
        document.addEventListener('keydown', this.handler);
      },
      onClose() {
        document.removeEventListener('keydown', this.handler);
      },
    }
  );
  instance.show();
}

export { createModal };
