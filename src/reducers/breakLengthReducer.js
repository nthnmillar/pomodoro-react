
const breakLengthReducer = (state = {breakLength:"0"}, action) =>{ 
    if (action.type === 'BREAK_LENGTH'){
      return {breakLength: action.payload};
    }
    return state;
  }

  export default breakLengthReducer;
  