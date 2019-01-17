import { TOGGLE_FILTER } from '../actions/Filter.action';

const defaultFilters = ['bar', 'restaurant', 'cafe', 'park'];

export const filters = function(state = defaultFilters, action) {
  let stateClone = [...state];
  switch (action.type) {
    case TOGGLE_FILTER:
      let index = stateClone.indexOf(action.payload.filter);
      if (index > -1) {
        return [...stateClone.slice(0, index), ...stateClone.slice(index + 1)];
      } else {
        return [...stateClone, action.payload.filter];
      }
    default:
      return stateClone;
  }
};
