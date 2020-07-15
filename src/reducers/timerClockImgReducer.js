
const timerClockImgReducer = (state = {timerClockImg:""}, action) =>{ 
    if (action.type === 'TIMER_CLOCK_IMG'){
      return {timerClockImg: action.payload};
    }
    return state;
  }

  export default timerClockImgReducer;
  