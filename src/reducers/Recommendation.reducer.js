import { SET_RECOMMENDATIONS } from '../actions/Recommendation.action';
import { RESET_RECOMMENDATIONS } from '../actions/Recommendation.action';

export const recommendations = function(state = [], action) {
  switch (action.type) {
    case SET_RECOMMENDATIONS:
      return action.payload.recommendations;
    case RESET_RECOMMENDATIONS:
      return [];
    default:
      return [...state];
  }
};
