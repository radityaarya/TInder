import { combineReducers } from 'redux';
import PeopleListReducer from './PeopleListReducer';
import SearchReducer from './SearchReducer'

const rootReducers = combineReducers({
  people : PeopleListReducer,
  chatSearch : SearchReducer

})

export default rootReducers
