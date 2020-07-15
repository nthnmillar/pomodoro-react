
const timerClockColReducer = (state = {timerClockCol:""}, action) =>{ 
    if (action.type === 'TIMER_CLOCK_COL'){
      return {timerClockCol: action.payload};
    }
    return state;
  }

  export default timerClockColReducer;
  