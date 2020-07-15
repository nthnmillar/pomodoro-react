
const timerTimeReducer = (state = {timerTime:"0:25:00"}, action) =>{ 
    if (action.type === 'TIMER_TIME'){
      return {timerTime: action.payload};
    }
    return state;
  }

  export default timerTimeReducer;
  