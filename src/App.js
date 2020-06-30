import React, {useState, useEffect } from 'react';
import 'bootstrap';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider, connect } from 'react-redux';

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
const mathReducer = (state = {entry:"0", sum:"0"}, action) =>{ 
  if (action.type === DISPLAY_ENTRY){
    return {entry: action.payload};
  }
  else if (action.type === DISPLAY_SUM){
    return {sum: action.payload};
  }
  return state;
}

// Root Reducers
const rootReducer = combineReducers({
  math: mathReducer,
});

// Store
const store = createStore(
  rootReducer /*, composeWithDevTools(
    applyMiddleware(...middleware), 
) */ );

// mapStatetoProps
const mapStatetoProps = (state => {
  return {
    entry:state.math.entry,
    sum:state.math.sum,
  };
});

// mapDispatchToProps
const mapDispatchToProps = dispatch => ({
    displayEntry: () => dispatch(displayEntryAction()),
    displaySum: () => dispatch(displaySumAction()),
});


//Stores the first string for the display screen
let entry= "0";
//Stores the second string for the display screen
let sum = "0";
//Stores calcuation result
let calc = 0;
//For checking if certain buttons have been pressed or not
let opPressed = false;
let cePressed = false;
let decPPressed = false;
let eqPressed = false;

//Displays 0 on the screen when the document loads
// function zeroStart(){document.getElementById("display").innerHTML = entry; document.getElementById("disString").innerHTML = sum;}

//Checks if the strings have reached a maximum length before being too long to fit on the display screen
function max(){
  console.log("max sum", sum);
  const maxLength = sum.replace(/\&#247;|\&#215;/g, " ");
  console.log("max sum Replaced", maxLength);



  if (entry.length > 8 || maxLength.length >= 23){
    console.log(sum);
    return true;
  }else{
    return false;
  }
}

//For clearing the screen
function limit(){
      entry = "0";
      sum = "0";
      calc = 0;
      /*
      setDisplayEntry("0");
      setDisplaySum("Limit");
    */ 
        document.getElementById("display").innerHTML = "0";
        document.getElementById("disString").innerHTML ="Limit";
       
    
}

//Resets the calculator
function ACFunc(){
  //Resets final result  
  calc = 0;
  //Turns the operator switch off
  //opSwitch = false;
  //Turns the decimal point switch off
  decPPressed = false;
  //Turns the equal button swith off
  eqPressed = false;
  //Clears strings
  entry = "0";
  sum = "0";
  /*
  setDisplayEntry(entry);
  setDisplaySum(sum);
*/
  document.getElementById("display").innerHTML = entry;
  document.getElementById("disString").innerHTML = sum; 
  
}

//Removes last entry
function CEFunc(){
  //Turns the button pressed switches off
  opPressed = false;
  cePressed = true;
  decPPressed = false;
  entry = "0";    
  //Removes an operator or group of numbers from display string 2

  const endClip = /\+$|\-$|\&#247;$|\&#215;$|\d+\.\d+$|\d+$|\.$|\d+\.$|^\-\d+$|^\-\d+\.\d+$/;

  console.log("CE sum before replace",sum)
  //   if (sum === Array && /=/g.test(sum) === true){
  //   sum !== Array && /=/g.test(sum) === false
  if (eqPressed){
    return
  }else if (!eqPressed){
    console.log("epPressed", eqPressed, "sum", sum);
    sum = sum.toString().replace(endClip,"");
  }
  console.log("CE sum after replace",sum)

  /*
  if (typeof sum !== 'string')
    {
      console.log("Sum IS string")
      console.log("CE sum before replace",sum)
      sum.replace(endClip,"");
      console.log("CE sum after replace",sum)
    }else{  
      console.log("Sum NOT string")
      sum.toString();
      console.log("CE sum before replace",sum)
      sum.replace(endClip,"");
      console.log("CE sum after replace",sum)
    }
    */

  //A zero remains if CE removes everything from display string 2  
  if(sum === ""){
      sum = "0";
    }
      /*  
    setDisplayEntry(entry);
    setDisplaySum(sum);
    */
    document.getElementById("display").innerHTML = entry;
    document.getElementById("disString").innerHTML = sum;

}

//Activates functions when their buttons are pressed
function oneFunc(){numFunc("1");}
function twoFunc(){numFunc("2");}
function threeFunc(){numFunc("3");}
function fourFunc(){numFunc("4");}
function fiveFunc(){numFunc("5");}
function sixFunc(){numFunc("6");}
function sevenFunc(){numFunc("7");}
function eightFunc(){numFunc("8");}
function nineFunc(){numFunc("9");}
function zeroFunc(){naughtFunc("0");}

function plusFunc(){operFunc("+");}
function minusFunc(){operFunc("-");}
function dviFunc(){operFunc("&#247;");}
function multFunc(){operFunc("&#215;");}

//Adds numbers to both strings on the screen
function numFunc(num){  
  if (max() === false){    
    //Clears zeros from the display screen when a number is pressed or after the equal button has been pressed
    if(entry === "0" && sum === "0" || calc === "0" && eqPressed === true){
     entry="";
     sum="";
     calc = 0;
     eqPressed = false; 
    } 
    //Clears zero from string 1 on the screen if the CE button has been pressed
    if(entry === "0" && cePressed === true){entry="";}
    //Turns the operator switch off
    opPressed = false; 
    //Removes operator if on string 1
    entry = entry.replace(/\+|\-|\&#247;|\&#215;/g, "");
    //Adds entered number onto the display strings
    if (cePressed === false){
      entry += num;
      sum += num;
  /*
      setDisplayEntry(entry);
      setDisplaySum(sum);
       */
      {document.getElementById("display").innerHTML = entry;}
      {document.getElementById("disString").innerHTML = sum;}
   
    } 
    //Only adds numbers after CE has been pressed if the last character is not a number
    else if (/\d$/.test(sum) !== true && cePressed === true){
      cePressed = false;
      entry += num;
      sum += num;
      /*  
      setDisplayEntry(entry);
      setDisplaySum(sum);
     */
      {document.getElementById("display").innerHTML = entry;}
      {document.getElementById("disString").innerHTML = sum;}
     
    }
  }else{
    limit();
  }  
}

//Inserts operators into display strings 1 and 2
function operFunc(op){
  //For being able to insert calculations after the equal button has been pressed
  if (eqPressed === true){
    eqPressed = false;
    sum = calc;
    calc = 0;
   }
  
  if (max() === false){
    decPPressed = false;
    //Removes decimal point if there are no numbers after it 
    if (/\.$/.test(sum) === true){
      sum = sum.slice(0, -1);
    } 
    //Removes all zero's as well as the decimal point if there are no decimal numbers above 0 
    if (/\.0+$/.test(sum) === true){  
      sum = sum.replace(/\.0+$/, "");
    } 
    //Removees extra 0's if there are any after decimal numbers
    if (/\./g.test(sum) === true && /0+$/.test(sum) === true){
      sum = sum.replace(/0+$/, "");
    } 
    //Only adds an operator to string 1 during a calculation if a zero and an operator is not already on the display screen
    if(entry !== "0" && opPressed === false && sum !== "0"){
      //Inserts an operator into display string 1
      entry = op; 
       /*
      setDisplayEntry(entry);
      */
      {document.getElementById("display").innerHTML = entry;}
     
      //Only adds one operator to string 2 if string 2 is not 0 and the operator switch is off 
     if(opPressed === false && sum !== "0"){
       opPressed = true;
       sum += op;
        /*
       setDisplaySum(sum);
       */
       {document.getElementById("disString").innerHTML = sum;}
        
     }      
      //If the CE button has been pressed with 0 now on display string 1 and there isn't already an operator on the display string 2, an operator should still be able to be entered    
    }
    if(cePressed === true && opPressed === false && sum !== "0" && /\d$/.test(sum) === true){
      opPressed = true;
      entry = op;           
      sum += op;    
        /*     
      setDisplayEntry(entry);
      setDisplaySum(sum);
        */ 
      {document.getElementById("display").innerHTML = entry;}
      {document.getElementById("disString").innerHTML = sum;}
   
    }
  }else{
    limit();
  }
}

//For when the zero button is pressed
function naughtFunc(zero){
if (max() === false){    
  //Only if there a number is pressed already should zero be able to be entered on the screen
  if(entry !== "0" && opPressed === false){
      entry += zero; 
      sum += zero;
       /* 
      setDisplayEntry(entry);
      setDisplaySum(sum);
        */  
      {document.getElementById("display").innerHTML = entry;}
      {document.getElementById("disString").innerHTML = sum;}
     
    }
    //Adds more zeros after the decimal point button has been pressed
    else if(decPPressed === true){   
      entry += "0";  
      sum += "0";
       /*
      setDisplayEntry(entry);
      setDisplaySum(sum);
         */
      {document.getElementById("display").innerHTML = entry;} 
      {document.getElementById("disString").innerHTML = sum;}
           
     }
  }else{
    limit();
  }
}

function decPFunc(){
  if (max() === false){ 
    //Inserts a decimal point into the display strings
    if (decPPressed === false && opPressed === false && cePressed === false){    
      decPPressed = true;    
      entry += ".";   
      sum += ".";
        /*
      setDisplayEntry(entry);
      setDisplaySum(sum);
       */ 
      {document.getElementById("display").innerHTML = entry;}
      {document.getElementById("disString").innerHTML = sum;}
      
     }
    //if there is an operator on the screen, place zero in front of decimal point when its button is pressed
    else if (decPPressed === false && opPressed === true && cePressed === false){
        opPressed =false;
        decPPressed = true;    
        entry = "0.";   
        sum += "0.";
       /*  
        setDisplayEntry(entry);
        setDisplaySum(sum);
          */
        {document.getElementById("display").innerHTML = entry;}
        {document.getElementById("disString").innerHTML = sum;} 
          
      } 
    //A decimal point can't be entered next to an already entered number after the CE button has been pressed
    else if (decPPressed === false && /\d$/.test(sum) !== true && cePressed === true){
      cePressed = false;
      decPPressed = true;
      entry = "0.";
      sum += "0.";
        /*
      setDisplayEntry(entry);
      setDisplaySum(sum);
      */
      {document.getElementById("display").innerHTML = entry;} 
      {document.getElementById("disString").innerHTML = sum;} 
          
    }
    
    //Decimal point button works after the screen is cleared with CE
    else if (decPPressed === false && opPressed === false && sum ==="0" && cePressed === true){
      cePressed = false;
      decPPressed = true;
      entry += ".";  
      sum += ".";
        /*
      setDisplayEntry(entry);
      setDisplaySum(sum); 
       */ 
      {document.getElementById("display").innerHTML = entry;} 
      {document.getElementById("disString").innerHTML = sum;} 
     
    }
  }else{
    limit();
  }
}

//Converts the sum string into intergers and arithmetic opertators, returns the result of the calculation back as a string to display screen one. The result can still then be used for further calculations
function equalFunc(){
  if (/\d$/.test(sum) === true){
  //Replaces html operator codes with js operator strings, inserts spaces beside operators and then splits the string into an array from those spaces.
   sum = sum.replace(/\&#247;/g, "/").replace(/\&#215;/g, "*").replace(/(\/)/g, " $1 ").replace(/(\*)/g, " $1 ").replace(/(\+)/g, " $1 ").replace(/((?!^)\-)/g, " $1 ").split(" ");
   
      for(var i = 0; i < sum.length; i++){
          //Adds the first number into the calculation
          if (i === 0 ){
            calc += parseFloat(sum[i]);
          }
          //Divide calculation by next number
          if (/\//.test(sum[i]) === true){
            calc /= parseFloat(sum[i + 1]);
          }  
          //Multiply calculation by next number
          if (/\*/.test(sum[i]) === true){
            calc *= parseFloat(sum[i + 1]);
          }  
         //Add calculation by next number
          if (/\+/.test(sum[i]) === true){
            calc += parseFloat(sum[i + 1]);
          }
          //Minus calculation by next number
          if (/^\-$/.test(sum[i]) === true){
            calc -= parseFloat(sum[i + 1]);
          }  
      }
      //Rounds off the calcuation into a string with limited decimals and removes excess zeros
      console.log("Equal calc",calc);
      calc = calc.toFixed(2).replace(/\.0+$|0+$/,"");
      //Clears the screen of the result is too long
      if (calc.length > 8){ 
        limit();        
      }
      //Otherwise inserts the result onto the display screen
      else{
            /*
        setDisplayEntry(calc);
        setDisplaySum(sum +="="+calc); 
       */
        document.getElementById("display").innerHTML = calc;
        document.getElementById("disString").innerHTML +="="+calc;
     
        eqPressed = true;
        //Resets the display strings if the result is zero
        if (calc === "0"){
            entry = "0";
            sum = "0";
        }
    }  
  }
}

const Display = (props) => {
return (
  <div id="screen" className="text-right">
    <p id="display"></p>
    <p id="disString"></p>
  </div>
  )
}

const Buttons = (props) => {
  return (
    <>
      <button onClick={ACFunc} id="AC">AC</button>
      <button onClick={CEFunc} id="clear">CE</button>
      <button onClick={dviFunc} id="divide">&#247;</button>
      <button onClick={multFunc} id="multiply">&#215;</button>
    
      <button onClick={sevenFunc} id="seven">7</button>
      <button onClick={eightFunc} id="eight">8</button>
      <button onClick={nineFunc} id="nine">9</button>
      <button onClick={minusFunc} id="subtract">-</button>
    
      <button onClick={fourFunc} id="four">4</button>
      <button onClick={fiveFunc} id="five">5</button>
      <button onClick={sixFunc} id="six">6</button>
      <button onClick={plusFunc} id="add">+</button>
      
      <button onClick={oneFunc} id="one">1</button>
      <button onClick={twoFunc} id="two">2</button>
      <button onClick={threeFunc} id="three">3</button>
    
      <button onClick={equalFunc} id="equals">=</button>     
      <button onClick={zeroFunc} id="zero">0</button>
      <button onClick={decPFunc} id="decimal">.</button> 
    </> 
  )
}

function App(){
  let [displayEntry,setDisplayEntry] = useState("0");
  // Stores the second string for the display screen
  let [displaySum, setDisplaySum] = useState("0");
  
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
