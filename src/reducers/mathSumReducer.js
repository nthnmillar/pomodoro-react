
const mathSumReducer = (state = {sum:"0"}, action) =>{ 
    if (action.type === 'DISPLAY_SUM'){
      return {sum: action.payload};
    }
    return state;
  }

  export default mathSumReducer;
  