import AbstractView from '../framework/view/abstract-view.js';

export const SortType = {
  DAY: 'day',
  TIME: 'time',
  PRICE: 'price',
};

export default class SortView extends AbstractView {
  constructor(currentSortType = SortType.DAY) {
    super();
    this.currentSortType = currentSortType;
  }

  get template() {
    return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
              <div class="trip-sort__item  trip-sort__item--day">
                <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-day" data-sort-type="day" value="day" ${
                  this.currentSortType === SortType.DAY ? 'checked' : ''
                }>
                <label class="trip-sort__btn" for="sort-day">Day</label>
              </div>

              <div class="trip-sort__item  trip-sort__item--event">
                <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-event" data-sort-type="event" value="event" disabled>
                <label class="trip-sort__btn" for="sort-event">Event</label>
              </div>

              <div class="trip-sort__item  trip-sort__item--time">
                <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-time" data-sort-type="time" value="time" ${
                  this.currentSortType === SortType.TIME ? 'checked' : ''
                }>
                <label class="trip-sort__btn" for="sort-time">Time</label>
              </div>

              <div class="trip-sort__item  trip-sort__item--price">
                <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-price" data-sort-type="price" value="price" ${
                  this.currentSortType === SortType.PRICE ? 'checked' : ''
                }>
                <label class="trip-sort__btn" for="sort-price">Price</label>
              </div>

              <div class="trip-sort__item  trip-sort__item--offer">
                <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-offer" data-sort-type="offer" value="offer" disabled>  
                <label class="trip-sort__btn" for="sort-offer">Offers</label>
              </div>
            </form>`;
  }

  setSortTypeChangeHandler(handler) {
    this.element.addEventListener('change', (e) => {
      const sortType = e.target.dataset.sortType;
      if (sortType) {
        handler(sortType);
      }
    });
  }
}
