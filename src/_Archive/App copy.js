//try
// using one setstate with objects
// alterante of setinterval with react hooks
//ensure time is correct between transitions

import React, {useState, useEffect, userRef} from 'react';
import 'bootstrap';
import gong from './Metal_Gong-Dianakc-109711828.wav';

let count = 25 * 60;
let timer = "Session";


const App = (props) => { 

  
  const [breakCount, setBreakCount] = useState(5);
  const [sessionCount, setSessionCount] = useState(25);
  const [period, setPeriod] = useState(undefined); 
  const [playOn, setPlayOn] = useState(false);
  
  const [clockCount, setClockCount] = useState(count);
 
  const [currentTimer, setCurrentTimer] = useState(timer);


  const handleStartStop = () => {
    if(!playOn){
      setPlayOn(true);
      setPeriod(setInterval(() => {
        
        count--;
        setClockCount(count);
   
      
        if(count === 0){
          setCurrentTimer((currentTimer === "Session") ? "Break" : "Session");
          setClockCount((currentTimer === "Session") ? (breakCount * 60) : (sessionCount * 60));
          count = ((currentTimer === "Session") ? (breakCount * 60) : (sessionCount * 60));
        }
    
       document.getElementById("beep").play();

       /*
        console.log(clockCount,"clock Count setInterval");
        if (count === 1 && timer === "Session" ){
          document.getElementById("beep").play();
          timer = "Break";
          setCurrentTimer(timer);
          count = breakCount * 60;
        } else if (count === 1 && timer === "Break"){
          document.getElementById("beep").play();
          timer = "Session";
          setCurrentTimer(timer);
          count = sessionCount * 60;
        } */
      
      }, 1000))
    }else{
      setPlayOn(false);
      setPeriod(clearInterval(period));
      setPeriod(undefined);  
    }
  }
  /*
  useEffect(() => {

  },[]);
  */

  const handleReset = () => {
    setBreakCount(1);
    setSessionCount(1);
    setPlayOn(false);
    count = 3;
    setClockCount(count);
    timer = "Session";
    setCurrentTimer(timer);
    setPeriod(clearInterval(period));
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
    /*
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
    */
  }

  console.log(clockCount,"clock Count App",period, period);

  const handleBreakDec = () => { 
    if (breakCount > 1){
      if (!playOn && currentTimer === 'Break'){
        setBreakCount(breakCount - 1);
        count = (breakCount - 1 ) * 60;
        setClockCount(count);
      }else if(breakCount > 1){
        setBreakCount(breakCount - 1);
      }
    }
  };
  
  const handleBreakInc = () => { 
    if (breakCount < 60){
      if (!playOn && currentTimer === 'Break'){
        setBreakCount(breakCount + 1);
        count = (breakCount + 1 ) * 60;
        setClockCount(count);
      }else if (breakCount < 60){
        setBreakCount(breakCount + 1);
      }
    }
  };

  const handleSessionDec = () => { 
    if (sessionCount > 1 ){
      if (!playOn && currentTimer === 'Session'){
        setSessionCount(sessionCount - 1);
        count = (sessionCount - 1 ) * 60;
        setClockCount(count);
      }else if(sessionCount > 1 ){
        setSessionCount(sessionCount - 1);
      }
    }  
  };

  const handleSessionInc = () => { 
    if (sessionCount < 60 ){
      if (!playOn < 60 && currentTimer === 'Session'){
        setSessionCount(sessionCount + 1);
        count = (sessionCount + 1 ) * 60;
        setClockCount(count);
      }else if(sessionCount < 60){
        setSessionCount(sessionCount + 1);
      }
    }
  };

  const breakProps = {
    title: 'Break Length',
    count: breakCount,
    ident: 'break',
    handleDec: handleBreakDec,
    handleInc: handleBreakInc
  }

  const sessionProps = {
    title: 'Session Length',
    count: sessionCount,
    ident: 'session',
    handleDec: handleSessionDec,
    handleInc: handleSessionInc
  }

  const timeLoad = (inp) =>{
    /*
    let minutes = Math.floor(inp / 60);
    let seconds = inp % 60;

    seconds = seconds< 0 ? ('0' + seconds) : seconds;
    return minutes + ":" + seconds;
    */
    inp = inp * 1000
    let hours = Math.floor((inp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((inp % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((inp % (1000 * 60)) / 1000);  

    if(minutes < 10){
      minutes = '0' + minutes;
    }
    if(seconds < 10){
      seconds = '0'+ seconds;
    }
    if (hours > 0){  
      return hours + ':' + minutes + ':' + seconds; 
    }else{
      return minutes + ':' + seconds; 
    } 
  }

  /*
  const handleDec = () => {
    if(!playOn){
      
    }
  }
  
  const handleInc = () => {
    if(!playOn){
      
    }
  }
  */

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
            <br/>
            <span id="time-left">{timeLoad(clockCount)}</span> 
          </div> 
          <button id="start_stop" onClick={handleStartStop} >
            <div /* style={{backgroundColor: props.timerClockCol, backgroundImage: props.timerClockImg , borderColor: props.timerClockCol  }} */ className="pie degree"/>       
          </button>  
          <button id="reset"   onClick={handleReset} className="text-center">
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