//displayBreakLength
export function breakLengthAction(breakLength){
  return {
    type: 'BREAK_LENGTH',
    payload: breakLength
  };
}

//displaySessionLength
export function sessionLengthAction(sessionLength){
  return {
    type: 'SESSION_LENGTH',
    payload: sessionLength
  };
}

//displayTimerTitle
export function timerTitleAction(timerTitle){
  return {
    type: 'TIMER_TITLE',
    payload: timerTitle
  };
}

//displayTimerTime
export function timerTimeAction(timerTime){
  return {
    type: 'TIMER_TIME',
    payload: timerTime
  };
}

//displayTimerClock
export function timerClockAction(timerClock){
  return {
    type: 'TIMER_CLOCK',
    payload: timerClock
  };
}


/*
export function resetAction(reset){
  return {
    type: 'RESET',
    payload: reset
  };
}

export function startAction(start)
  return {
    type: 'START',
    payload:start 
  }
}

export function stopAction(stop){
  return {
    type: 'STOP',
    payload:stop
  }
}

export function breakIncAction(breakInc){
    return {
      type: 'BREAK_INC',
      payload: breakInc
    }
}

export function breakDecAction(breakDec){
  return {
    type: 'BREAK_DEC',
    payload: breakDec
  }
}

export function sessionIncAction(sessionInc){
  return {
    type: 'SESSION_INC',
    payload: sessionInc
  }
}

export function sessionDecAction(sessionDec){
  return {
    type: 'SESSION_DEC',
    payload: sessionDec
  }
}

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
*/