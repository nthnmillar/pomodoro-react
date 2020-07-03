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
