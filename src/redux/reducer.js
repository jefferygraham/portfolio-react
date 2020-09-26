import { DESTINATIONS } from '../shared/destinations';
import { SERVICES } from '../shared/services';
import { SLIDERIMAGES } from '../shared/sliderImages';

export const initialState = {
  destinations: DESTINATIONS,
  services: SERVICES,
  sliderImages: SLIDERIMAGES,
};

export const Reducer = (state = initialState) => {
  return state;
};
