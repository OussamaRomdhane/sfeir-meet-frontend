import axios from 'axios';

import { ADD_ADDRESS, REMOVE_ADDRESS } from '../actions/Address.action';

import { setRecommendations } from '../actions/Recommendation.action';

export default store => next => action => {
  let result = next(action);
  if (action.type === ADD_ADDRESS || action.type === REMOVE_ADDRESS) {
    axios
      .get(BACKEND_URL + 'recommendations?addresses=' + JSON.stringify(store.getState().addresses))
      .then(function({ data: response }) {
        store.dispatch(setRecommendations(response.data.recommendations));
      });
  }
  return result;
};
