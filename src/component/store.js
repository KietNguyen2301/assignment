// src/store.js
import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  users: userReducer,
});

const store = createStore(rootReducer);

export default store;
