// Actions

// Actions Type
//const DISPLAY_ENTRY = 'entry';
//const DISPLAY_SUM = 'sum'; 


export function displayEntryAction(entry){
  return {
  type: 'DISPLAY_ENTRY',
  payload: entry,
  };
}

export function displaySumAction(sum){
  return {
  type: 'DISPLAY_SUM',
  payload: sum,
  };
}
