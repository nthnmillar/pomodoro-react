
const timerTitleReducer = (state = {timerTitle:"0"}, action) =>{ 
    if (action.type === 'TIMER_TITLE'){
      return {timerTitle: action.payload};
    }
    return state;
  }

  export default timerTitleReducer;
  