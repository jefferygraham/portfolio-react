import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchDestinations = () => (dispatch) => {
  dispatch(destinationsLoading());

  return fetch(baseUrl + 'destinations')
    .then((res) => res.json())
    .then((destinations) => dispatch(addDestinations(destinations)));
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

  return fetch(baseUrl + 'slider_images')
    .then((res) => res.json())
    .then((sliderImages) => dispatch(addSliderImages(sliderImages)));
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

  return fetch(baseUrl + 'services')
    .then((res) => res.json())
    .then((services) => dispatch(addServices(services)));
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
