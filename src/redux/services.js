import * as ActionTypes from './ActionTypes';

export const Services = (
  state = {
    isLoading: true,
    errMsg: null,
    services: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.SERVICES_LOADING:
      return { ...state, isLoading: true, errMsg: null, services: [] };
    case ActionTypes.ADD_SERVICES:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        services: action.payload,
      };
    case ActionTypes.SERVICES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        services: [],
      };
    default:
      return state;
  }
};
