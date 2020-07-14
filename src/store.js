import { createStore, combineReducers} from 'redux';
import breakLengthReducer from "./reducers/breakLengthReducer";
import sessionLengthReducer from "./reducers/sessionLengthReducer";
import timerClockReducer from "./reducers/timerClockReducer";
import timerTimeReducer from "./reducers/timerTimeReducer";
import timerTitleReducer  from "./reducers/timerTitleReducer";


const rootReducer = combineReducers({
    rootBreakLength: breakLengthReducer,
    rootSessionLength: sessionLengthReducer,
    rootTimerTitle: timerTitleReducer,
    rootTimerTime: timerTimeReducer,
    rootTimerClock: timerClockReducer
  });

export default createStore(
  rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );