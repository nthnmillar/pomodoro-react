// import {store, displayEntryAction, displaySumAction} from './App'

let screenEntry= "0";
let screenSum = "0";
let calculation = 0;
let operatorPressed = false;
let cePressed = false;
let decPointPressed = false;
let equalPressed = false;
let currentOperator = "";

const entryDispatched = (entry) =>{
    store.dispatch(displayEntryAction(entry));
}

const sumDispatched = (sum) => {
    store.dispatch(displaySumAction(sum));
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
    entryDispatched("0");
    sumDispatched("Limit");
    //store.dispatch(displayEntryAction("0"));
    //store.dispatch(displaySumAction("Limit"));      
}

const acReset = () => {
    calculation = 0;
    decPointPressed = false;
    equalPressed = false;
    screenEntry = "0";
    screenSum = "0";
    entryDispatched(screenEntry);
    sumDispatched(screenSum);
    //store.dispatch(displayEntryAction(screenEntry));
   // store.dispatch(displaySumAction(screenSum));   
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

    entryDispatched(screenEntry);
    sumDispatched(screenSum);
   // store.dispatch(displayEntryAction(screenEntry));
   // store.dispatch(displaySumAction(screenSum));   
    
}

const numPress = (num) => { 
  if (screenEntry === "-"  && /\d$/.test(num) == true){
    screenSum += currentOperator;
    screenSum += screenEntry;
    currentOperator = "";
    sumDispatched(screenSum);
  //  store.dispatch(displaySumAction(screenSum));
  } 
  
  if (screenEntry !== "-" && /\d$/.test(num) === true) {      
    console.log("Number adds operator to Sum display", currentOperator, "screenSum", screenSum)
    screenSum += currentOperator;
    currentOperator = "";
    sumDispatched(screenSum);
  //  store.dispatch(displaySumAction(screenSum));
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
    screenEntry = screenEntry.replace(/\+|\-|\&#247;|\&#215;/g, "");

    if (cePressed === false  && num !== "-" ){
      screenEntry += num;
      screenSum += num;
      entryDispatched(screenEntry);
      sumDispatched(screenSum);
    //  store.dispatch(displayEntryAction(screenEntry));
    //  store.dispatch(displaySumAction(screenSum));   
    }

    else if (/\d$/.test(screenSum) !== true && cePressed === true  && num !== "-" ){
      cePressed = false;
      screenEntry += num;
      screenSum += num;
      entryDispatched(screenEntry);
      sumDispatched(screenSum);
    //  store.dispatch(displayEntryAction(screenEntry));
    //  store.dispatch(displaySumAction(screenSum));   
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
      entryDispatched(screenEntry);
      // store.dispatch(displayEntryAction(screenEntry));
      
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
      entryDispatched(screenEntry);
      sumDispatched(screenSum);
     // store.dispatch(displayEntryAction(screenEntry));
     // store.dispatch(displaySumAction(screenSum));     
    }

    else if(decPointPressed === true){   
      screenEntry += "0";  
      screenSum += "0";
      entryDispatched(screenEntry);
      sumDispatched(screenSum);
    //  store.dispatch(displayEntryAction(screenEntry));
    //  store.dispatch(displaySumAction(screenSum));               
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
      entryDispatched(screenEntry);
      sumDispatched(screenSum);
     // store.dispatch(displayEntryAction(screenEntry));
    //  store.dispatch(displaySumAction(screenSum));    

    }else if (decPointPressed === false  && operatorPressed === true  && cePressed === false){
      operatorPressed = false;
      decPointPressed = true;    
      screenEntry = "0.";   
      screenSum += "0.";
      entryDispatched(screenEntry);
      sumDispatched(screenSum);
    //  store.dispatch(displayEntryAction(screenEntry));
    //  store.dispatch(displaySumAction(screenSum));       

    }else if (decPointPressed === false && /\d$/.test(screenSum) !== true && cePressed === true){
      cePressed = false;
      decPointPressed = true;
      screenEntry = "0.";
      screenSum += "0.";
      entryDispatched(screenEntry);
      sumDispatched(screenSum);
    //  store.dispatch(displayEntryAction(screenEntry));
    //  store.dispatch(displaySumAction(screenSum));         
    
    }else if (decPointPressed === false  && operatorPressed === false  && screenSum ==="0" && cePressed === true){
      cePressed = false;
      decPointPressed = true;
      screenEntry += ".";  
      screenSum += ".";
      entryDispatched(screenEntry);
      sumDispatched(screenSum);
    //  store.dispatch(displayEntryAction(screenEntry));
    //  store.dispatch(displaySumAction(screenSum));    
    }
  }else{
    clearScreen();
  }
}

const equalPress = () => {
  if (/\d$/.test(screenSum) === true){
    let sumToDisplay = screenSum;
    console.log("equalPress screenSum String", screenSum);
    screenSum = screenSum.replace(/\&#247;/g, "/").replace(/\&#215;/g, "*").replace(/(\/)/g, " $1 ").replace(/(\*)/g, " $1 ").replace(/(\+)/g, " $1 ").replace(/((?!^)\-)/g, " $1 ").split(" ");
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
    calculation = calculation.toFixed(4).replace(/\.0+$|0+$/,"");

    if (calculation.length > 8){ 
    clearScreen();        
      
    }else{
        entryDispatched(calculation);
        sumDispatched(sumToDisplay += "=" + calculation);
    //  store.dispatch(displayEntryAction(calculation));
    //  store.dispatch(displaySumAction(sumToDisplay += "=" + calculation));
      console.log("array clacuation return, calculation", "screenSum", screenSum, "is array?", Array.isArray(screenSum))  
      equalPressed = true;

      if (calculation === "0"){
        screenEntry = "0";
        screenSum = "0";
      }
    }  
  }
}

//export default {entryDispatched, sumDispatched};