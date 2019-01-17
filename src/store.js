import thunk from 'redux-thunk';

import { createLogger } from 'redux-logger';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import requestRecommendations from './middleware/request-recommendations';

import { addresses } from './reducers/Address.reducer';
import { recommendations } from './reducers/Recommendation.reducer';
import { filters } from './reducers/Filter.reducer';

const SFEIRMeetApp = combineReducers({ addresses, recommendations, filters });

const middleware = applyMiddleware(thunk, createLogger(), requestRecommendations);
const store = createStore(SFEIRMeetApp, middleware);

// Export the store
export { store };
