import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const pizzas = (state = [], action) => {
  if(action.type === 'SET_PIZZAS')
    return action.payload
  return state;
}

const store = createStore(
  combineReducers({
    pizzas, // 👈 Be sure to replace this, too!
  }),
  applyMiddleware(logger),
);


export default store;
