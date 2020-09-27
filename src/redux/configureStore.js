import { createStore, combineReducers } from 'redux';
import { Destinations } from './destinations';
import { Services } from './services';
import { SliderImages } from './sliderImages';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      destinations: Destinations,
      services: Services,
      sliderImages: SliderImages,
    })
  );

  return store;
};
