
const breakLengthReducer = (state = {breakLength:5}, action) =>{ 
    if (action.type === 'BREAK_LENGTH'){
      return {breakLength: action.payload};
    }
    return state;
  }

  export default breakLengthReducer;
  