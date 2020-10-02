import * as ActionTypes from './ActionTypes';

export const Destinations = (
  state = {
    isLoading: true,
    errMsg: null,
    destinations: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_DESTINATIONS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        destinations: action.payload,
      };
    case ActionTypes.DESTINATIONS_LOADING:
      return { ...state, isLoading: true, errMsg: null, destinations: [] };
    case ActionTypes.DESTINATIONS_FAILED:
      return { ...state, isLoading: false, errMsg: action.payload };
    default:
      return state;
  }
};
