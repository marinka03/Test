import { carArr } from '../cars';

function findProduct(elem) {
  const currentCard = elem.closest('.js-item');
  const carId = Number(currentCard.dataset.carId);

  return carArr.find(({ id }) => id === carId);
}
export { findProduct };
