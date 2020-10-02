import * as ActionTypes from './ActionTypes';
import { DESTINATIONS } from '../shared/destinations';

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
