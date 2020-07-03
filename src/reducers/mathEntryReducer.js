
const mathEntryReducer = (state = {entry:"0"}, action) =>{ 
    if (action.type === 'DISPLAY_ENTRY'){
      return {entry: action.payload};
    }
    return state;
  }
  
  export default mathEntryReducer;