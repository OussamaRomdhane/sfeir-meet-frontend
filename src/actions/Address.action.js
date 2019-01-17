export const INIT_ADDRESSES = 'INIT_ADDRESSES';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const REMOVE_ADDRESS = 'REMOVE_ADDRESS';

export function initAddresses(addresses) {
  return { type: INIT_ADDRESSES, payload: { addresses } };
}

export function addAddress(address) {
  return { type: ADD_ADDRESS, payload: { address } };
}

export function removeAddress(index) {
  return { type: REMOVE_ADDRESS, payload: { index } };
}
