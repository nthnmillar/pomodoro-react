//Reset

//Start

//Stop

//Break inc

//break dec

//session inc

//session dec

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
