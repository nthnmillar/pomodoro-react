import React, {useState} from 'react';
import 'bootstrap';

import { createStore, combineReducers, applyMiddleware } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider, connect } from 'react-redux';

let screenEntry= "0";
let screenSum = "0";
let calculation = 0;
let operatorPressed = false;
let cePressed = false;
let decPointPressed = false;
let equalPressed = false;
let currentOperator = "";
let negIntMinus = false;


// REDUX

// Actions Type

const DISPLAY_ENTRY = 'entry';
const DISPLAY_SUM = 'sum'; 

// Actions
const displayEntryAction = (entry) => ({
  type: DISPLAY_ENTRY,
  payload: entry,
});

const displaySumAction = (sum) => ({
  type: DISPLAY_SUM,
  payload: sum,
});

// Reducers 
const mathEntryReducer = (state = {entry:"0"}, action) =>{ 
  if (action.type === DISPLAY_ENTRY){
    return {entry: action.payload};

  }
  return state;
}

const mathSumReducer = (state = {sum:"0"}, action) =>{ 
  if (action.type === DISPLAY_SUM){
    return {sum: action.payload};
  }
  return state;
}




// Root Reducers
const rootReducer = combineReducers({
  mathEntry: mathEntryReducer,
  mathSum: mathSumReducer

});

// Store
const store = createStore(
  rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
  /*, composeWithDevTools(
    applyMiddleware(...middleware), 
) */ );

// mapStatetoProps
const mapStatetoProps = (state => {
  return {
    entry:state.mathEntry.entry,
    sum:state.mathSum.sum,
  };
});

// mapDispatchToProps
const mapDispatchToProps = dispatch => ({
    displayEntry: () => dispatch(displayEntryAction()),
    displaySum: () => dispatch(displaySumAction()),
});


// To replace with redux actions/reducers
/*
const displaySet = (entry, sum) =>{
  document.getElementById("display").innerHTML = entry;
  document.getElementById("disString").innerHTML = sum;   
}
*/


const maxLength = () =>{
    console.log("maxLength screenSum", screenSum);
    const maxLengthString = screenSum.toString().replace(/\÷|\×/g, " ");
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
   // displaySet("0","Limit");
    store.dispatch(displayEntryAction("0"));
    store.dispatch(displaySumAction("Limit"));      
}

const acReset = () => {
    calculation = 0;
    decPointPressed = false;
    equalPressed = false;
    screenEntry = "0";
    screenSum = "0";
    //displaySet(screenEntry, screenSum);
    store.dispatch(displayEntryAction(screenEntry));
    store.dispatch(displaySumAction(screenSum));   
}

const ceReset = () => {  
    operatorPressed = false;
    cePressed = true;
    decPointPressed = false;
    screenEntry = "0";    
    const endClip = /\+$|\-$|\÷$|\×$|\d+\.\d+$|\d+$|\.$|\d+\.$|^\-\d+$|^\-\d+\.\d+$/;
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

   // displaySet(screenEntry, screenSum);
    store.dispatch(displayEntryAction(screenEntry));
    store.dispatch(displaySumAction(screenSum));   
    
}

const numPress = (num) => { 
  if (screenEntry === "-"  && /\d$/.test(num) == true){
    screenSum += currentOperator;
    screenSum += screenEntry;
    currentOperator = "";
    store.dispatch(displaySumAction(screenSum));
    //document.getElementById("disString").innerHTML = screenSum; 
  } 
  
  if (screenEntry !== "-" && /\d$/.test(num) === true) {      
    console.log("Number adds operator to Sum display", currentOperator, "screenSum", screenSum)
    screenSum += currentOperator;
    currentOperator = "";
    store.dispatch(displaySumAction(screenSum));
    //document.getElementById("disString").innerHTML = screenSum; 
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
    screenEntry = screenEntry.replace(/\+|\-|\÷|\×/g, "");

    if (cePressed === false  && num !== "-" ){
      screenEntry += num;
      screenSum += num;
      store.dispatch(displayEntryAction(screenEntry));
      store.dispatch(displaySumAction(screenSum));   
     // displaySet(screenEntry, screenSum);   
    }

    else if (/\d$/.test(screenSum) !== true && cePressed === true  && num !== "-" ){
      cePressed = false;
      screenEntry += num;
      screenSum += num;
      store.dispatch(displayEntryAction(screenEntry));
      store.dispatch(displaySumAction(screenSum));   
   //   displaySet(screenEntry, screenSum);  
    }
  }else{
    clearScreen();
  }  
}

const operatorPress = (op) => {
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
      store.dispatch(displayEntryAction(screenEntry));
      //document.getElementById("display").innerHTML = screenEntry;
      
      if(op !== "-"){
        currentOperator = op;
      }

      if(operatorPressed === false && screenSum !== "0" ){    
        if(op !== "-"){
          currentOperator = op;
        }

      }         
    }

    if(cePressed === true  && operatorPressed === false  && screenSum !== "0" && /\d$/.test(screenSum) === true){
      operatorPressed = true;
      screenEntry = op;  
      
      if(op !== "-"){
        currentOperator = op;
      }
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
      //displaySet(screenEntry, screenSum); 
      store.dispatch(displayEntryAction(screenEntry));
      store.dispatch(displaySumAction(screenSum));     
    }

    else if(decPointPressed === true){   
      screenEntry += "0";  
      screenSum += "0";
    //  displaySet(screenEntry, screenSum);
    store.dispatch(displayEntryAction(screenEntry));
    store.dispatch(displaySumAction(screenSum));               
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
     // displaySet(screenEntry, screenSum); 
     store.dispatch(displayEntryAction(screenEntry));
     store.dispatch(displaySumAction(screenSum));    

    }else if (decPointPressed === false  && operatorPressed === true  && cePressed === false){
      operatorPressed = false;
      decPointPressed = true;    
      screenEntry = "0.";   
      screenSum += "0.";
   //   displaySet(screenEntry, screenSum);
      store.dispatch(displayEntryAction(screenEntry));
      store.dispatch(displaySumAction(screenSum));       

    }else if (decPointPressed === false && /\d$/.test(screenSum) !== true && cePressed === true){
      cePressed = false;
      decPointPressed = true;
      screenEntry = "0.";
      screenSum += "0.";
    //  displaySet(screenEntry, screenSum);
      store.dispatch(displayEntryAction(screenEntry));
      store.dispatch(displaySumAction(screenSum));         
    
    }else if (decPointPressed === false  && operatorPressed === false  && screenSum ==="0" && cePressed === true){
      cePressed = false;
      decPointPressed = true;
      screenEntry += ".";  
      screenSum += ".";
     // displaySet(screenEntry, screenSum); 
      store.dispatch(displayEntryAction(screenEntry));
      store.dispatch(displaySumAction(screenSum));    
    }
  }else{
    clearScreen();
  }
}

const equalPress = () => {
  if (/\d$/.test(screenSum) === true){
    let sumToDisplay = screenSum;
    console.log("equalPress screenSum String", screenSum);
    screenSum = screenSum.replace(/\÷/g, "/").replace(/\×/g, "*").replace(/(\/)/g, " $1 ").replace(/(\*)/g, " $1 ").replace(/(\+)/g, " $1 ").replace(/((?!^)\-)/g, " $1 ").split(" ");
    console.log("equalPress screenSum Array", screenSum);

    // Sort Array 
    for(var i = 0; i < screenSum.length; i++){
      if(screenSum[i] === ""){  
        screenSum.splice(i,1); 
        console.log ("space removed", screenSum, "screenSum[i]", screenSum[i]);   
      }
      if (screenSum[i] === "-" && /\+|\-|\*|\//.test(screenSum[i-1]) === true ){
        const negInt = screenSum[i].concat(screenSum[i+1]);
        screenSum.splice(i,1);
        screenSum.splice(i,1);
        screenSum.splice(i,0,negInt) 
        console.log("negetive interger", screenSum); 
      }
    }

    // Calculate Array - Should be switch
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
    calculation = calculation.toFixed(4).replace(/\.0+$|0+$/,"");

    if (calculation.length > 8){ 
    clearScreen();        
      
    }else{
      store.dispatch(displayEntryAction(calculation));
      store.dispatch(displaySumAction(sumToDisplay += "=" + calculation));
      console.log("array clacuation return, calculation", "screenSum", screenSum, "is array?", Array.isArray(screenSum))
      //document.getElementById("display").innerHTML = calculation;
      //document.getElementById("disString").innerHTML +="="+calculation;  
      equalPressed = true;

      if (calculation === "0"){
        screenEntry = "0";
        screenSum = "0";
      }
    }  
  }
}


const DisplayEntry = (props) => {
  return (
    <>
      <p id="display">{props.entry}</p>
    </>
  )
}

const DisplaySum = (props) => {
  return (
    <>
      <p id="disString">{props.sum}</p>
    </>
  )
} 

const ConnectedDisplayEntry = connect(mapStatetoProps, mapDispatchToProps)(DisplayEntry);
const ConnectedDisplaySum = connect(mapStatetoProps, mapDispatchToProps)(DisplaySum);

const Buttons = () => {
  return (
    <>
      <button onClick={acReset} id="clear">AC</button>
      <button onClick={ceReset} id="CE">CE</button>
      <button onClick={() => {operatorPress("÷")}} id="divide">÷</button>
      <button onClick={() => {operatorPress("×")}} id="multiply">×</button>  
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

//const ConnectedDisplay = connect(mapStatetoProps, mapDispatchToProps)(Display);



const App = () =>{ 
  return (
    <Provider store={store}>
      <div id="calcBase" className= "container">   
        <div id="padDiv">
          <h1 className="text-center">CALCULATOR</h1>
          <div id="screen" className="text-right">
            <ConnectedDisplayEntry/>
            <ConnectedDisplaySum/>
          </div>
          <Buttons/>
        </div>          
      </div>]
    </Provider>  
    )
}

export default App;

// <ConnectedDisplay/>