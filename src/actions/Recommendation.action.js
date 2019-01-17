export const SET_RECOMMENDATIONS = 'SET_RECOMMENDATIONS';
export const RESET_RECOMMENDATIONS = 'RESET_RECOMMENDATIONS';

export function setRecommendations(recommendations) {
  return { type: SET_RECOMMENDATIONS, payload: { recommendations } };
}

export function resetRecommendations() {
  return { type: RESET_RECOMMENDATIONS, payload: {} };
}
