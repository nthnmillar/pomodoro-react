
const sessionLengthReducer = (state = {sessionLength:1}, action) =>{ 
    if (action.type === 'SESSION_LENGTH'){
      return {sessionLength: action.payload};
    }
    return state;
  }
  
  export default sessionLengthReducer;