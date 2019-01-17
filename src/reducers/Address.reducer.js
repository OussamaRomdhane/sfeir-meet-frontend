import { INIT_ADDRESSES } from '../actions/Address.action';
import { ADD_ADDRESS } from '../actions/Address.action';
import { REMOVE_ADDRESS } from '../actions/Address.action';

export const addresses = function(state = [], action) {
  let stateClone = [...state];
  switch (action.type) {
    case INIT_ADDRESSES:
      return action.payload.addresses;
      break;
    case ADD_ADDRESS:
      return stateClone.length < 5 ? [...stateClone, action.payload.address] : stateClone;
    case REMOVE_ADDRESS:
      return [...stateClone.slice(0, action.payload.index), ...stateClone.slice(action.payload.index + 1)];
      break;
    default:
      return stateClone;
  }
};
