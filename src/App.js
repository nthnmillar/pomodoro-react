// negetive intergers need to be created before calulation from equal button
// deciaml numbers are getting split with the sumString is siplit into array in equalPress function

// minus should only be passed to numPress if it has a number after it 

import React, {useState} from 'react';
import 'bootstrap';

let screenEntry= "0";
let screenSum = "0";
let calculation = 0;
let operatorPressed = false;
let cePressed = false;
let decPointPressed = false;
let equalPressed = false;
let currentOperator = "";
let negIntMinus = false;


const displaySet = (entry, sum) =>{
  document.getElementById("display").innerHTML = entry;
  document.getElementById("disString").innerHTML = sum;   
}


const maxLength = () =>{
    console.log("maxLength screenSum", screenSum);
    const maxLengthString = screenSum.toString().replace(/\&#247;|\&#215;/g, " ");
    console.log("maxLength screenSum Replaced", maxLengthString);
    
    if (screenEntry.length > 8 || maxLengthString.length >= 23){
      console.log(screenSum);
      return true;
    }else{
      return false;
    }
}

const clearScreen = () => {
    screenEntry = "0";
    screenSum = "0";
    calculation = 0;
    displaySet("0","Limit");      
}

const acReset = () => {
    calculation = 0;
    decPointPressed = false;
    equalPressed = false;
    screenEntry = "0";
    screenSum = "0";
    displaySet(screenEntry, screenSum);
}

const ceReset = () => {  
    operatorPressed = false;
    cePressed = true;
    decPointPressed = false;
    screenEntry = "0";    
    const endClip = /\+$|\-$|\&#247;$|\&#215;$|\d+\.\d+$|\d+$|\.$|\d+\.$|^\-\d+$|^\-\d+\.\d+$/;
    console.log("CE screenSum before replace",screenSum)

    if (equalPressed){
      return
    }else if (!equalPressed){
      console.log("epPressed", equalPressed, "screenSum", screenSum);
      screenSum = screenSum.toString().replace(endClip,"");
    }
    console.log("CE screenSum after replace",screenSum)
 
  if(screenSum === ""){
      screenSum = "0";
    }

    displaySet(screenEntry, screenSum);
}

const numPress = (num) => {
  
  if (screenEntry === "-"  && /\d$/.test(num) == true){
    screenSum += currentOperator;
  //  screenEntry += num;
 //   screenEntry += num  
    screenSum += screenEntry;
 //   screenSum += "-";
 //   screenSum += num;

    currentOperator = "";
    document.getElementById("disString").innerHTML = screenSum; 
  }
  
  //  if (/\D$/.test(screenEntry) && currentOperator !== "-") {    
    if (screenEntry !== "-" && /\d$/.test(num) === true) {      
      console.log("Number adds operator to Sum display", currentOperator, "screenSum", screenSum)
      screenSum += currentOperator;
      currentOperator = "";
      document.getElementById("disString").innerHTML = screenSum; 
    } 



  if (maxLength() === false){     
    if(screenEntry === "0" && screenSum === "0" || calculation === "0" && equalPressed === true){
      screenEntry="";
      screenSum="";
      calculation = 0;
      equalPressed = false; 
    }

    if(screenEntry === "0" && cePressed === true)
      {
        screenEntry="";
      }

      operatorPressed = false; 
     // screenEntry = screenEntry.replace(/\+|\&#247;|\&#215;/g, "");
      screenEntry = screenEntry.replace(/\+|\-|\&#247;|\&#215;/g, "");

    if (cePressed === false  && num !== "-" ){
      screenEntry += num;
      screenSum += num;
      displaySet(screenEntry, screenSum);   

    }else if (num === "-"){
        
    }else if (/\d$/.test(screenSum) !== true && cePressed === true  && num !== "-" ){
      cePressed = false;
      screenEntry += num;
      screenSum += num;
      displaySet(screenEntry, screenSum);  
    }
  }else{
    clearScreen();
  }  
}

const operatorPress = (op) => {
  /*
  if (op === "-" && /\-$/.test(screenSum) === false){
    numPress("-");
    console.log("Minus last line check",/\-$/.test(screenSum));
    decPointPressed = false;
    return
  }

  if (/\D$/.test(screenSum) === true){
    numPress(op);
    decPointPressed = false;
    return
  }
  */


  if (equalPressed === true){
    equalPressed = false;
    screenSum = calculation;
    calculation = 0;
   }

  if (maxLength() === false){
    decPointPressed = false;

    if (/\.$/.test(screenSum) === true){
      screenSum = screenSum.slice(0, -1);
    } 

    if (/\.0+$/.test(screenSum) === true){  
      screenSum = screenSum.replace(/\.0+$/, "");
    } 

    if (/\./g.test(screenSum) === true && /0+$/.test(screenSum) === true){
      screenSum = screenSum.replace(/0+$/, "");
    } 

    if(screenEntry !== "0" && operatorPressed === false  && screenSum !== "0"){
      screenEntry = op; 
      document.getElementById("display").innerHTML = screenEntry;
      
      if(op !== "-"){
        currentOperator = op;
      }

      if(operatorPressed === false && screenSum !== "0" /* &&  /\-$/.test(screenSum) === false */){
     //   operatorPressed = true;
     //   screenSum += op;
     //   document.getElementById("disString").innerHTML = screenSum;      
        if(op !== "-"){
          currentOperator = op;
        }

      }         
    }

    if(cePressed === true  && operatorPressed === false  && screenSum !== "0" && /\d$/.test(screenSum) === true /* && /\-$/.test(screenSum) === false */){
      operatorPressed = true;
      screenEntry = op;  
      
      if(op !== "-"){
        currentOperator = op;
      }
         
     // screenSum += op;    
     // displaySet(screenEntry,screenSum); 
    // document.getElementById("disString").innerHTML = screenSum;
    }
  }else{
    clearScreen();
  }
}

const zeroPress = (zero) => {
if (maxLength() === false){    

  if(screenEntry !== "0"  && operatorPressed === false ){
      screenEntry += zero; 
      screenSum += zero;
      displaySet(screenEntry, screenSum);   
    }

    else if(decPointPressed === true){   
      screenEntry += "0";  
      screenSum += "0";
      displaySet(screenEntry, screenSum);            
     }
  }else{
    clearScreen();
  }
}

const decPointPress = () => {
  if (maxLength() === false){ 
    if (decPointPressed === false  && operatorPressed === false && cePressed === false){    
      decPointPressed = true;    
      screenEntry += ".";   
      screenSum += ".";
      displaySet(screenEntry, screenSum);  

    }else if (decPointPressed === false  && operatorPressed === true  && cePressed === false){
      operatorPressed = false;
      decPointPressed = true;    
      screenEntry = "0.";   
      screenSum += "0.";
      displaySet(screenEntry, screenSum);    

    }else if (decPointPressed === false && /\d$/.test(screenSum) !== true && cePressed === true){
      cePressed = false;
      decPointPressed = true;
      screenEntry = "0.";
      screenSum += "0.";
      displaySet(screenEntry, screenSum);      
    
    }else if (decPointPressed === false  && operatorPressed === false  && screenSum ==="0" && cePressed === true){
      cePressed = false;
      decPointPressed = true;
      screenEntry += ".";  
      screenSum += ".";
      displaySet(screenEntry, screenSum);  
    }
  }else{
    clearScreen();
  }
}

const equalPress = () => {
  if (/\d$/.test(screenSum) === true){
    console.log("equalPress screenSum String", screenSum);
    screenSum = screenSum.replace(/\&#247;/g, "/").replace(/\&#215;/g, "*").replace(/(\/)/g, " $1 ").replace(/(\*)/g, " $1 ").replace(/(\+)/g, " $1 ").replace(/((?!^)\-)/g, " $1 ").split(" ");
    console.log("equalPress screenSum Array", screenSum);

    // Sort Array 
    for(var i = 0; i < screenSum.length; i++){
      // spaces
      if(screenSum[i] === ""){  
        screenSum.splice(i,1); 
        console.log ("space removed", screenSum, "screenSum[i]", screenSum[i]);   
      }
      // negetive integers
      // Number.isInteger(parseInt(screenSum[i-1])) === false
      if (screenSum[i] === "-" && /\+|\-|\*|\//.test(screenSum[i-1]) === true ){
        const negInt = screenSum[i].concat(screenSum[i+1]);
        screenSum.splice(i,1);
        screenSum.splice(i,1);
        screenSum.splice(i,0,negInt) 
        console.log("negetive interger", screenSum);
      // calculation += parseFloat(screenSum[i]);    
      }
    }
    


    // Calculate Array
    for(var i = 0; i < screenSum.length; i++){

      if (i === 0 ){
        calculation += parseFloat(screenSum[i]);
      }
 
      if (/\//.test(screenSum[i]) == true){
        calculation /= parseFloat(screenSum[i + 1]);
      }  
  
      if (/\*/.test(screenSum[i]) == true){
        calculation *= parseFloat(screenSum[i + 1]);
      }  
 
      if (/\+/.test(screenSum[i]) == true){
        calculation += parseFloat(screenSum[i + 1]);
      } 
              
      if(/^\-$/.test(screenSum[i]) == true) {
        console.log("just a minus",calculation);
        calculation -= parseFloat(screenSum[i + 1]);
      }
    }
   
    console.log("Equal calculation",calculation);
    calculation = calculation.toFixed(2).replace(/\.0+$|0+$/,"");

    if (calculation.length > 8){ 
    clearScreen();        
      
    }else{
      document.getElementById("display").innerHTML = calculation;
      document.getElementById("disString").innerHTML +="="+calculation;  
      equalPressed = true;

      if (calculation === "0"){
        screenEntry = "0";
        screenSum = "0";
      }
    }  
  }
}

const Display = () => {
  return (
    <div id="screen" className="text-right">
      <p id="display">0</p>
      <p id="disString">0</p>
    </div>
    )
}

const Buttons = () => {
  return (
    <>
      <button onClick={acReset} id="clear">AC</button>
      <button onClick={ceReset} id="CE">CE</button>
      <button onClick={() => {operatorPress("&#247;")}} id="divide">&#247;</button>
      <button onClick={() => {operatorPress("&#215;")}} id="multiply">&#215;</button>  
      <button onClick={() => {numPress("7")}} id="seven">7</button>
      <button onClick={() => {numPress("8")}} id="eight">8</button>
      <button onClick={() => {numPress("9")}} id="nine">9</button>
      <button onClick={() => {operatorPress("-")}} id="subtract">-</button>   
      <button onClick={() => {numPress("4")}} id="four">4</button>
      <button onClick={() => {numPress("5")}} id="five">5</button>
      <button onClick={() => {numPress("6")}} id="six">6</button>
      <button onClick={() => {operatorPress("+")}} id="add">+</button>    
      <button onClick={() => {numPress("1")}} id="one">1</button>
      <button onClick={() => {numPress("2")}} id="two">2</button>
      <button onClick={() => {numPress("3")}} id="three">3</button>  
      <button onClick={equalPress} id="equals">=</button>     
      <button onClick={() => {zeroPress("0")}} id="zero">0</button>
      <button onClick={decPointPress} id="decimal">.</button> 
    </> 
  )
}

function App(){
  let [displayscreenEntry,setDisplayscreenEntry] = useState("0");
  // Stores the second string for the display screen
  let [displayscreenSum, setDisplayscreenSum] = useState("0");
  
  return (
    <div id="calcBase" className= "container">   
      <div id="padDiv">
        <h1 className="text-center">CALCULATOR</h1>
        <Display/>
        <Buttons/>
      </div>          
    </div>
    )
}

export default App;