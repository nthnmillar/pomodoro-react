import { createStore, combineReducers} from 'redux';
import breakLengthReducer from "./reducers/breakLengthReducer";
import sessionLengthReducer from "./reducers/sessionLengthReducer";
import timerTitleReducer  from "./reducers/timerTitleReducer";
import timerTimeReducer from "./reducers/timerTimeReducer";
//import timerClockReducer from "./reducers/timerClockColReducer";
import timerClockColReducer from "./reducers/timerClockColReducer";
import timerClockImgReducer from "./reducers/timerClockImgReducer";



const rootReducer = combineReducers({
    rootBreakLength: breakLengthReducer,
    rootSessionLength: sessionLengthReducer,
    rootTimerTitle: timerTitleReducer,
    rootTimerTime: timerTimeReducer,
  //  rootTimerClock: timerClockReducer,
    rootTimerClockCol: timerClockColReducer,
    rootTimerClockImg: timerClockImgReducer
  });

export default createStore(
  rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );