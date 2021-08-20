import weatherApiRequestReducer from './weatherApiRequestReducer';
import searchStatusReducer from './searchStatusReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    weatherApi: weatherApiRequestReducer,
    searchStatus: searchStatusReducer,
})

export default rootReducer;