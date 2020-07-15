
const timerTitleReducer = (state = {timerTitle:"SESSION"}, action) =>{ 
    if (action.type === 'TIMER_TITLE'){
      return {timerTitle: action.payload};
    }
    return state;
  }

  export default timerTitleReducer;
  