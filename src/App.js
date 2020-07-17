import React, {useState} from 'react';
import 'bootstrap';
import gong from './Metal_Gong-Dianakc-109711828.wav';

let count = 25 * 60;
let timer = "Session";

const App = () => { 
  const [breakCount, setBreakCount] = useState(5);
  const [sessionCount, setSessionCount] = useState(25);
  const [period, setPeriod] = useState(undefined); 
  const [playOn, setPlayOn] = useState(false); 
  const [clockCount, setClockCount] = useState(count);
  const [currentTimer, setCurrentTimer] = useState(timer);

  const handleStartStop = () => {
    if (playOn){
      setPlayOn(false);
      setPeriod(clearInterval(period));
    }else if(!playOn){
      setPlayOn(true);
      setPeriod(setInterval(() => {      
        if(count === 0){
          count = (timer === "Session") ? (breakCount * 60) : (sessionCount * 60);
          timer = (timer === "Session") ? "Break" : "Session";
          setClockCount(count);  
          setCurrentTimer(timer);
          document.getElementById("beep").play();               
        }else{
          count--;
          setClockCount(count);     
        } 
      }, 1000))
    }
  }

  const handleReset = () => {  
    setBreakCount(5);
    setSessionCount(25);
    setPlayOn(false);
    count = 25 * 60;
    setClockCount(count);
    timer = "Session";
    setCurrentTimer(timer);
    setPeriod(clearInterval(period));
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
  }

  const handleDecrease = (countType,timer) => {
    if (countType > 1){
      if (!playOn && timer === timer){
        (timer === 'Break') ? setBreakCount(countType - 1) : setSessionCount(countType - 1);
        count = (countType - 1 ) * 60;
        setClockCount(count);     
      }else if(!playOn && currentTimer === !timer){
        (timer === 'Break') ? setBreakCount(countType - 1) : setSessionCount(countType - 1);
      }
    }
  }

  const handleIncrease = (countType,timer) => {
    if (countType < 60){
      if (!playOn && timer === timer){
        (timer === 'Break') ? setBreakCount(countType + 1) : setSessionCount(countType + 1);
        count = (countType + 1 ) * 60;
        setClockCount(count); 
      }else if(!playOn && currentTimer === !timer){
        (timer === 'Break') ? setBreakCount(countType + 1) : setSessionCount(countType + 1);
      }
    }
  }  

  const breakProps = {
    title: 'Break Length',
    count: breakCount,
    ident: 'break',    
    handleDec:  () => handleDecrease(breakCount,'Break'),
    handleInc: () => handleIncrease(breakCount,'Break')
  }

  const sessionProps = {
    title: 'Session Length',
    count: sessionCount,
    ident: 'session',    
    handleDec: () => handleDecrease(sessionCount,'Session'),
    handleInc: () => handleIncrease(sessionCount,'Session')
  }

  const timeLoad = (inp) =>{
    let minutes = Math.floor(inp / 60);
    let seconds = inp % 60;    
    minutes = minutes < 10 ? ('0'+minutes) : minutes;
    seconds = seconds < 10 ? ('0'+seconds) : seconds; 
    return minutes + ':' + seconds;
  }

  return (
    <div className= "container">   
      <h1 className="text-center">Pomodoro Clock</h1>
      <div className= "text-center" id="options">
        <TimerSettings {...breakProps}/>
        <TimerSettings {...sessionProps}/>
        <audio id="beep" preload="auto" src={gong}/>
      </div>
      <div className= "text-center">
        <span id="timer-label">{currentTimer}</span>  
      </div> 
      <button id="start_stop" onClick={handleStartStop} >
        <div className="pie degree">
        <span id="time-left">{timeLoad(clockCount)}</span> 
        </div>       
      </button>  
      <button id="reset" onClick={handleReset} className="text-center">
        RESET       
      </button> 
    </div>
  )
}

const TimerSettings = (props) => {
  return (
    <div className = "choiceDiv text-center">
      <h2 id ={`${props.ident}-label`}>{props.title}</h2>
      <div className = "selectDiv">
        <button  onClick={props.handleDec} id ={`${props.ident}-decrement`}>-</button>
          <p id={`${props.ident}-length`}>{props.count}</p>
        <button  onClick={props.handleInc} id ={`${props.ident}-increment`}>+</button>
      </div>    
    </div>
  )
}

export default App;

// Information from Florin Pop's video assisted with development, however, this code was written with react functional components using hooks instead of class components.
// https://www.youtube.com/watch?v=5rz6XbrCqt0