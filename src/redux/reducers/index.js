import products from './products';
import categories from './categories'
import orders from './orders'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  
  categories: categories,
  
});

export default rootReducer;