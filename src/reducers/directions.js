import { List, fromJS } from 'immutable';

import actionTypes from '../actions/actionTypes';

const initialStepsState = fromJS({
  searchedRouteOptions: List(),
  activeRouteIndex: 0,
  // TODO Saved routes
});

export default (state = initialStepsState, { type, payload }) => {
  switch (type) {
  case actionTypes.directions.activeIndex.UPDATE:
    return state.set('activeRouteIndex', payload);
  case actionTypes.directions.searchedRouteOptions.UPDATE:
    return state.set('searchedRouteOptions', payload);
  default:
    return state;
  }
};