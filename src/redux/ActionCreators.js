import * as ActionTypes from './ActionTypes';
import { DESTINATIONS } from '../shared/destinations';
import { SLIDER_IMAGES } from '../shared/sliderImages';
import { SERVICES } from '../shared/services';

export const fetchDestinations = () => (dispatch) => {
  dispatch(destinationsLoading());

  setTimeout(() => {
    dispatch(addDestinations(DESTINATIONS));
  }, 2000);
};

export const destinationsLoading = () => ({
  type: ActionTypes.DESTINATIONS_LOADING,
});

export const destinationsFailed = (errMsg) => ({
  type: ActionTypes.DESTINATIONS_FAILED,
  payload: errMsg,
});

export const addDestinations = (destinations) => ({
  type: ActionTypes.ADD_DESTINATIONS,
  payload: destinations,
});

export const fetchSliderImages = () => (dispatch) => {
  dispatch(sliderImagesLoading());

  setTimeout(() => {
    dispatch(addSliderImages(SLIDER_IMAGES));
  }, 2000);
};

export const sliderImagesLoading = () => ({
  type: ActionTypes.SLIDER_IMAGES_LOADING,
});

export const addSliderImages = (sliderImages) => ({
  type: ActionTypes.ADD_SLIDER_IMAGES,
  payload: sliderImages,
});

export const sliderImagesFalied = (errMsg) => ({
  type: ActionTypes.SLIDER_IMAGES_FAILED,
  payload: errMsg,
});

export const fetchServices = () => (dispatch) => {
  dispatch(servicesLoading());

  setTimeout(() => {
    dispatch(addServices(SERVICES));
  }, 2000);
};

export const servicesLoading = () => ({
  type: ActionTypes.SERVICES_LOADING,
});

export const addServices = (services) => ({
  type: ActionTypes.ADD_SERVICES,
  payload: services,
});

export const servicesFailed = (errMsg) => ({
  type: ActionTypes.SERVICES_FAILED,
  payload: errMsg,
});
