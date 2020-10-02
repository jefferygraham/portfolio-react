import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Destinations } from './destinations';
import { Services } from './services';
import { SliderImages } from './sliderImages';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      destinations: Destinations,
      services: Services,
      sliderImages: SliderImages,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
