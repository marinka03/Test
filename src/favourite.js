import { common } from "./common";
import { createFavouriteMarkup } from "./helpers/create-favourite-markup";

const favouriteCars = document.querySelector('.js-favourite-cars')
const arrFavourite = JSON.parse(localStorage.getItem(common.arrFavourite)) ?? [];

createFavouriteMarkup(favouriteCars, arrFavourite);