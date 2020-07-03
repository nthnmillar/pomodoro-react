import { createStore, combineReducers} from 'redux';

import mathEntryReducer from "./reducers/mathEntryReducer";
import mathSumReducer from "./reducers/mathSumReducer";

// Root Reducers
const rootReducer = combineReducers({
    mathEntry: mathEntryReducer,
    mathSum: mathSumReducer, 
  });
  
// Store
export default createStore(
  rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );