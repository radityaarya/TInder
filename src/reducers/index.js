import { combineReducers } from 'redux';
import PeopleListReducer from './PeopleListReducer';

const rootReducers = combineReducers({
  people : PeopleListReducer,

})

export default rootReducers
