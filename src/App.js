import React from 'react';
import 'bootstrap';

const BreakLength = () => {
  return (
    <div className = "choiceDiv text-center">
      <h2 id ="break-label">BREAK LENGTH</h2>
      <div className = "selectDiv">
        <button /* onClick= */ id ="break-decrement">-</button>
        <p id="break-length"></p>
        <button  /* onClick= */ id ="break-increment">+</button>
      </div>    
    </div> 
  )
}

const SessionLength = () => {
  return (
    <div className = "choiceDiv text-center">
      <h2 id ="session-label">SESSION LENGTH</h2>
      <div className = "selectDiv">
        <button  /* onClick= */ id ="session-decrement">-</button>
        <p id="session-length"></p>
        <button  /* onClick= */ id ="session-increment">+</button>
      </div>    
    </div> 
  )
}

const TimeLabel = () => {
  return (
    <>
      <span id="timer-label"></span>      
    </>
  )
}

const Time = () => {
  return (
    <>
       <span id="time-left"></span> 
    </>
    )
}

const PieButton = () => {

  return (
    <>
      <button id="start_stop"   /* onClick= */ >
        <div /* style={{backgroundColor: props.timerClockCol, backgroundImage: props.timerClockImg , borderColor: props.timerClockCol  }} */ className="pie degree"/>       
      </button>  
    </>
    )
}

const Reset = () => {
  return (
    <>
      <button id="reset"  /* onClick= */ className="text-center">
        RESET       
      </button>  
    </>
    )
}

const App = () =>{ 
  return (

      <div className= "container">   
        <h1 className="text-center">Pomodoro Clock</h1>
          <div className= "text-center" id="options">
            <BreakLength/>
            <SessionLength/>
          </div>
          <div className= "text-center">
            <TimeLabel/>
            <br/>
            <Time/>
          </div> 
          <PieButton/>
          <Reset/>
      </div>
    )
}

export default App;