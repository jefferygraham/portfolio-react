import * as ActionTypes from './ActionTypes';

export const SliderImages = (
  state = {
    isLoading: true,
    errMsg: null,
    sliderImages: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.SLIDER_IMAGES_LOADING:
      return { ...state, isLoading: true, errMsg: null, sliderImages: [] };
    case ActionTypes.ADD_SLIDER_IMAGES:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        sliderImages: action.payload,
      };
    case ActionTypes.SLIDER_IMAGES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        sliderImages: [],
      };
    default:
      return state;
  }
};
