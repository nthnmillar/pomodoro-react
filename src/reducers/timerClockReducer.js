
const timerClockReducer = (state = {timerClock:"0"}, action) =>{ 
    if (action.type === 'TIMER_CLOCK'){
      return {timerClock: action.payload};
    }
    return state;
  }

  export default timerClockReducer;
  