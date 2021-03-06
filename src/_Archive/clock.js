import store from "./store";
import { breakLengthAction, sessionLengthAction, timerTitleAction, timerTimeAction, /* timerClockAction, */ timerClockColAction, timerClockImgAction} from "./actions/displayActions";
import {$,jQuery} from 'jquery';
window.$ = $;
window.jQuery = jQuery;

var breakL = 5;
var sessL = 25;
var countD = 0;
var curr = "SESSION";
var sessOn = false;
var countOn = false;
var totaltime;
var col;
var count = 0;
var counting = false;
var pause = false;
var breakClicked = false;
var sessClicked = false;
let myCounter;

/*
//Defualt settings for when document loads
function defStart(){
  document.getElementById("breakTime").innerHTML= breakL;
  document.getElementById("sessionTime").innerHTML= sessL;
  document.getElementById("current").innerHTML= curr;
  document.getElementById("time").innerHTML= sessL;
}
*/

//timeload(val * 60 * 1000)

const breakLengthDispatch = (breakLength) => {
    store.dispatch(breakLengthAction(breakLength));
}
const sessionLengthDispatch = (sessionLength) => {
    store.dispatch(sessionLengthAction(sessionLength));
} 
const timerTitleDispatch = (timerTitle) => {
    store.dispatch(timerTitleAction(timerTitle));
}
const timerTimeDispatch = (timerTime) => {
    store.dispatch(timerTimeAction(timerTime));
}
/*
const timerClockDispatch = (timerClock) => {
    store.dispatch(timerClockAction(timerClock));
}
*/
const timerClockColDispatch = (timerClockCol) => {
  store.dispatch(timerClockColAction(timerClockCol));
}
const timerClockImgDispatch = (timerClockImg) => {
  store.dispatch(timerClockImgAction(timerClockImg));
}




//Break length becomes less when its button is pressed at the beggining
export function breakLess(){ 
  if(breakL > 1 && countOn == false || counting == false && countOn == true){
    breakL--;
    breakLengthDispatch(breakL);
    // document.getElementById("breakTime").innerHTML= breakL;
    if(curr == "BREAK"){
        timeLoad(breakL * 60 * 1000);
        timerTitleDispatch(curr);
      // document.getElementById("current").innerHTML= curr;
      // document.getElementById("time").innerHTML= breakL;     
    }       
  }
  console.log("breakLess");
}
//Break length becomes less when its button is pressed during a pause
export function pauBreakLess(){   
   breakClicked = true;  
  if(breakL > 1 && countOn == true && pause == true){   
      breakL--;
      breakLengthDispatch(breakL);
      // document.getElementById("breakTime").innerHTML= breakL;   
  }  
  if (curr == "BREAK"){
    timeLoad(breakL * 60 * 1000);
   //  document.getElementById("time").innerHTML= breakL;
  }
  console.log("pauBreakLess");
}
//Break length becomes more when its button is pressed at the beggining
export function breakMore(){
  if(breakL < 60 && countOn == false || counting == false && countOn == true){
    breakL++;
    breakLengthDispatch(breakL)
    // document.getElementById("breakTime").innerHTML= breakL;
    if(curr == "BREAK"){
        timeLoad(breakL * 60 * 1000);
        timerTitleDispatch(curr);
      // document.getElementById("current").innerHTML= curr;
      // document.getElementById("time").innerHTML= breakL;      
    }
  }
  console.log("breakMore");
}
//Break length becomes more when its button is pressed during a pause
export function pauBreakMore(){
    breakClicked = true;
    if(breakL < 60 && countOn == true && pause == true){   
      breakL++;
      breakLengthDispatch(breakL);
      // document.getElementById("breakTime").innerHTML= breakL; 
      if (curr == "BREAK"){
        timeLoad(breakL * 60 * 1000);
        // document.getElementById("time").innerHTML= breakL;
      }
    }
    console.log("pauBreakMore");
}
//Session length becomes less when its button is pressed at the beggining
export function sessionLess(){
  if(sessL > 1 && countOn == false){
    sessL--;
    sessionLengthDispatch(sessL);
    // document.getElementById("sessionTime").innerHTML= sessL;
    if(curr == "SESSION"){
        timeLoad(sessL * 60 * 1000);
        timerTitleDispatch(curr);
        // document.getElementById("current").innerHTML= curr;
        // document.getElementById("time").innerHTML= sessL;      
    }
  }
}
//Session length becomes less when its button is pressed during a pause
export function pauSessLess(){
     sessClicked = true;
    if(sessL > 1 && countOn == true && pause == true){   
      sessL--;
      sessionLengthDispatch(sessL);
      // document.getElementById("sessionTime").innerHTML= sessL;   
      if (curr == "SESSION"){
          timeLoad(sessL * 60 * 1000);
        // document.getElementById("time").innerHTML= sessL;
      }
    }  
}
//Session length becomes more when its button is pressed at the beggining
export function sessionMore(){
  if(sessL < 60 && countOn == false){
    sessL++;
    sessionLengthDispatch(sessL);
    // document.getElementById("sessionTime").innerHTML= sessL;
    if(curr == "SESSION"){
      // document.getElementById("current").innerHTML= curr;
        timeLoad(sessL * 60 * 1000);
        timerTitleDispatch(curr);
      // document.getElementById("time").innerHTML= sessL;      
    }
  }
}
//Session length becomes more when its button is pressed during a pause
export function pauSessMore(){
      sessClicked = true;
    if(sessL < 60 && countOn == true && pause == true){   
      sessL++;
 
      // document.getElementById("sessionTime").innerHTML= sessL; 
       if (curr == "SESSION"){
        timeLoad(sessL * 60 * 1000);
        sessionLengthDispatch(sessL);
        // document.getElementById("time").innerHTML= sessL;
       }
    }
}

//Converts time to hours, minutes and seconds and inserts it into the html
function timeLoad(inp){
  console.log("timeload inp",inp)
  let hours = Math.floor((inp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((inp % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((inp % (1000 * 60)) / 1000);  
  //Adds '0' if minutes or seconds below 1
  if(minutes < 10){
    minutes = '0' + minutes;
  }
  if(seconds < 10){
    seconds = '0'+ seconds;
  }
  //Inserts time into html

  if (hours > 0){  
    timerTimeDispatch(hours + ':' + minutes + ':' + seconds); 
  }else{
    timerTimeDispatch(minutes + ':' + seconds); 
  } 
 
  // document.getElementById("time").innerHTML= hours + ':' + minutes + ':' + seconds;
}

//Sets the timer at its beginning before counting starts
function timerSet(inp){
  if (pause == false){
    timeLoad(inp)
    countD-=1000;
  }
}

//Pause and unpause time
export function pauseTime(){
  //Pause
  if (pause == false && countOn == true && counting == true){   
    pause = true;
    counting = false;
   }
  //Unpause and restart counter
  else if (pause == true && countOn == true && counting == true){
    pause = false;
    counting = true;
    counter();
    
  //Unpause if break time was edited
    if (curr == "BREAK" && breakClicked == true){
      update(0);
      reset(breakL);
    }  
  //Unpause if session time was edited
    if (curr == "SESSION" && sessClicked == true){
        update(0);
        reset(sessL);
    }
  }  
}
 
//Resets the time display and animation
function reset(per){
      breakClicked = false;
      sessClicked = false; 
      totaltime = per * 60;
      countD= per * 60 * 1000;    
      count = 0;
      timeLoad(countD);     
}

export function resetTimer(){
  breakL = 5;
  breakLengthDispatch(breakL);
  sessL = 25;
  sessionLengthDispatch(sessL);
  curr = "SESSION"
  timerTitleDispatch(curr)
  counting = false;
  pause = false;
  breakClicked = false;
  sessClicked = false;
  count = 0;
  counting = false;
  pause = false;
  breakClicked = false;
  sessClicked = false;
  countOn = false;
  clearTimeout(myCounter);
  timerTimeDispatch("25:00");
  col = 'green';
  timerClockImgDispatch('linear-gradient(90deg, transparent 50%, rgb(25, 30, 32) 50%), linear-gradient(90deg, rgb(25, 30, 32) 50%, transparent 50%)');
  timerClockColDispatch(col);
  sessOn = false;   
 // countEnd();
}

//Starts the counter if its is not already counting
export function countStart(){
  if (countOn == false && pause==false){ 
      countOn = true;    
      //The counter starts either the Session or Break depending on whether the session switch is on or off
      //Sets the Session title and colour
      if (sessOn === false){
         totaltime = sessL * 60;
         countD=sessL * 60 * 1000;
         curr = "SESSION";
         timerTitleDispatch(curr);
         // document.getElementById("current").innerHTML= curr;
         col = 'green';          
       }
      //Sets the Break title and colour
      if (sessOn === true){
        totaltime = breakL * 60;
        countD= breakL * 60 * 1000;
        curr = "BREAK";        
        timerTitleDispatch(curr);
        // document.getElementById("current").innerHTML= curr;
        col = 'yellow';
      }
      //Sets the time in hours minutes and seconds
      timeLoad(countD);
      //Starts the time count
      counter(); 
    }
}    
    
//Animated timer    
function update(percent){
        timerSet(countD -1000);
        counting = true;
        //First half of pie timer
        var deg;    
 //       if(percent<(totaltime/2)){
 //         deg = 90 + (360*percent/totaltime);
        
 //         timerClockImgDispatch('linear-gradient('+deg+'deg, transparent 50%, #191e20 50%),linear-gradient(90deg, #191e20 50%, transparent 50%)');
 //         timerClockColDispatch(col);
          //$('.pie').css('background-image', 'linear-gradient('+deg+'deg, transparent 50%, #191e20 50%),linear-gradient(90deg, #191e20 50%, transparent 50%)');
          //$(".pie").css({'background-color': col, 'border-color': col});              
        //Second half of pie timer         
 //       }else if(percent>=(totaltime/2)){
  //        deg = -90 + (360*percent/totaltime);
 //         timerClockImgDispatch('linear-gradient('+deg+'deg, transparent 50%, '+ col +' 50%),linear-gradient(90deg, #191e20 50%, transparent 50%)');
         // $('.pie').css('background-image', 'linear-gradient('+deg+'deg, transparent 50%, '+ col +' 50%),linear-gradient(90deg, #191e20 50%, transparent 50%)');
 //        }
}

//The time counter
function counter(){ 
  myCounter = setInterval(function(){
   //Stops the timer if the pause button has been pressed 
   if(pause == true){
       clearTimeout(myCounter);    
   }
   //Counts if the pause button has noT been pressed
    if(pause == false){
      count+=1;
    }
    //Updates the timer animation
    update(count);
    //Events at the end of the current timer
    if(count==totaltime){
       countEnd();
    }
  }, 1000);
}

/* ACCURATE TIME
var origin = new Date().getTime();

function accuTime(timer, max, repeatArgument, callbackArgument){
  var counter = 1;

  var init = (t) => {
    let timeStart = new Date().getTime();
    setTimeout(function () {
      if (counter < max) {
        let fix = (new Date().getTime() - timeStart) - timer;
        init(t - fix);
        counter++;
      
      // event to be repeated max times
        repeatArgument();
        
      } else {
      // event to be executed at animation end
        callbackArgument();
      }
    }, t);
  }
init(timer);
}
*/

//example
//accuTime(100, 20,function test(){console.log(new Date().getTime())},function test2(){console.log(new Date().getTime() - origin);});




function countEnd(){
    count = 0;
    //Turns the session switch off if its on
    if(sessOn === true){       
       sessOn = false;
    }
    //Turns the session switch on if its off
    else if(sessOn === false){
        sessOn = true;
    }
    //Stops counter
    clearInterval(myCounter);
    //Turns the counter switch off for the next round
    countOn = false;
    //Turns off each period switch
    breakClicked = false;
    sessClicked = false;
    //Starts the next period
    countStart(); 
}