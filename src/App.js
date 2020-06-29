
import React, {useState, useEffect } from 'react';
import 'bootstrap';

function App(){
  // Stores the first string for the display screen
  let [entry,setEntry] = useState("0");
  // Stores the second string for the display screen
  let [sum, setSum] = useState("0");
  // Stores calcuation result
  let [calc, setCalc] = useState(0);
  // For checking if certain buttons have been pressed or not
  let [opPressed, setOpPressed] = useState(false);
  let [cePressed, setCePressed] = useState(false);
  let [decPPressed, setDecPPressed] = useState(false);
  let [eqPressed, setEqPressed] = useState(false);

  let [opSwitch,setOpSwitch] = useState(false); 
  
  //Displays 0 on the screen when the document loads
  /*
function zeroStart(){document.getElementById("disNum").innerHTML = entry; document.getElementById("disString").innerHTML = sum;}
*/

  // Checks if the strings have reached a maximum length before being too long to fit on the display screen
  function max(){
    if (entry.length > 8 || sum.replace(/\&#247;|\&#215;/g, " ").length >= 23){
      console.log(sum);
      return true;
    }else{
      return false;
    }
  }

  // For clearing the screen
  function limit(){
    setEntry("0");
    setSum("Limit");
    setCalc(0);
    /*
    document.getElementById("disNum").innerHTML = "0";
    document.getElementById("disString").innerHTML ="Limit";
    */ 
  }

  // Resets the calculator
  function ACFunc(){
    console.log("ACFunc",entry,sum)
    // Resets final result
    setCalc(0);  
    // Turns the operator switch off
    setOpSwitch(false);
    // Turns the decimal point switch off
    setDecPPressed(false);
    // Turns the equal button swith off
    setEqPressed(false);
    // Clears strings
    setEntry("0");
    setSum("0");
    /*
    document.getElementById("disNum").innerHTML = entry;
    document.getElementById("disString").innerHTML = sum;
    */
  }

  // Removes last entry
  function CEFunc(){
    // Turns the button pressed switches off
    setOpPressed(false);
    setCePressed(true);
    setDecPPressed(false);
    setEntry("0");  
    //Removes an operator or group of numbers from display string 2
    setSum(sum.replace(/\+$|\-$|\&#247;$|\&#215;$|\d+\.\d+$|\d+$|\.$|\d+\.$|^\-\d+$|^\-\d+\.\d+$/,""));
    //A zero remains if CE removes everything from display string 2  
    if(sum == ""){
        setSum("0");
      }
      /*
    document.getElementById("disNum").innerHTML = entry;
    document.getElementById("disString").innerHTML = sum;
    */
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
    if (max() == false){    
      //Clears zeros from the display screen when a number is pressed or after the equal button has been pressed
      if(entry == "0" && sum == "0" || calc === "0" && eqPressed == true){
        setEntry("");
        setSum("");
        setCalc(0);
        setEqPressed(false);
      } 
      //Clears zero from string 1 on the screen if the CE button has been pressed
      if(entry == "0" && cePressed == true){entry=""};
      //Turns the operator switch off
        setOpPressed(false); 
      //Removes operator if on string 1
        setEntry(entry.replace(/\+|\-|\&#247;|\&#215;/g, ""));
      //Adds entered number onto the display strings
      if (cePressed == false){
        setEntry(entry += num);
        setSum(sum += num)
        /*
        {document.getElementById("disNum").innerHTML = entry;}
        {document.getElementById("disString").innerHTML = sum;}
        */
      } 
      //Only adds numbers after CE has been pressed if the last character is not a number
      else if (/\d$/.test(sum) !== true && cePressed == true){
        setCePressed(false);
        setEntry(entry += num);
        setSum(sum += num)
        /*
        {document.getElementById("disNum").innerHTML = entry;}
        {document.getElementById("disString").innerHTML = sum;}
        */
      }
    }else{
      limit();
    }  
  }

  //Inserts operators into display strings 1 and 2
  function operFunc(op){
    //For being able to insert calculations after the equal button has been pressed
    if (eqPressed == true){
      setEqPressed(false);
      setSum(calc);
      setCalc(0);
    }
    
    if (max() == false){
      setDecPPressed(false);
      //Removes decimal point if there are no numbers after it 
      if (/\.$/.test(sum) == true){
        setSum(sum.slice(0, -1));
      } 
      //Removes all zero's as well as the decimal point if there are no decimal numbers above 0 
      if (/\.0+$/.test(sum) == true){ 
        setSum(sum.replace(/\.0+$/, ""));
      } 
      //Removees extra 0's if there are any after decimal numbers
      if (/\./g.test(sum) == true && /0+$/.test(sum) == true){
        setSum(sum.replace(/0+$/, ""))
      } 
      //Only adds an operator to string 1 during a calculation if a zero and an operator is not already on the display screen
      if(entry !== "0" && opPressed == false && sum !== "0"){
        //Inserts an operator into display string 1
        setEntry(op);
        /*    
        {document.getElementById("disNum").innerHTML = entry;}
        */
        //Only adds one operator to string 2 if string 2 is not 0 and the operator switch is off 
        if(opPressed == false && sum !== "0"){
          setOpPressed(true);
          setSum(sum += op);
          /*
            {document.getElementById("disString").innerHTML = sum;}
          */  
        }               
        //If the CE button has been pressed with 0 now on display string 1 and there isn't already an operator on the display string 2, an operator should still be able to be entered    
      }
      if(cePressed == true && opPressed == false && sum !== "0" && /\d$/.test(sum) == true){
        setOpPressed(true);
        setEntry(op);
        setSum(sum + op);        
        /*
        {document.getElementById("disNum").innerHTML = entry;}
        {document.getElementById("disString").innerHTML = sum;}
        */
      }
    }else{
      limit();
    }
  }

  // For when the zero button is pressed
  function naughtFunc(zero){
    if (max() == false){    
      // Only if there a number is pressed already should zero be able to be entered on the screen
      if(entry !== "0" && opPressed == false){
          setEntry(entry += zero);
          /*
          {document.getElementById("disNum").innerHTML = entry;}
          */
          setSum(sum += zero)
          /*
          {document.getElementById("disString").innerHTML = sum;}
          */
        }
        //Adds more zeros after the decimal point button has been pressed
        else if(decPPressed == true){ 
          setEntry(entry += "0")  
          /*
          {document.getElementById("disNum").innerHTML = entry;}    
          */
          setSum(sum += "0");
          /*
          {document.getElementById("disString").innerHTML = sum;}    
          */
        }
      }else{
        limit();
      }
    }

    
  function decPFunc(){
    if (max() == false){ 
      //Inserts a decimal point into the display strings
      if (decPPressed == false && opPressed == false && cePressed == false){    
        setDecPPressed(true);
        setEntry(entry += ".");
        /*
        {document.getElementById("disNum").innerHTML = entry;} 
        */   
        setSum(sum += ".")
        /*
        {document.getElementById("disString").innerHTML = sum;}   
        */
      }
      //if there is an operator on the screen, place zero in front of decimal point when its button is pressed
      else if (decPPressed == false && opPressed == true && cePressed == false){
          setOpPressed(false);
          setDecPPressed(true);
          setEntry("0.")
          /*
          {document.getElementById("disNum").innerHTML = entry;}    
          */
          setSum(sum += "0.")
          /*
          {document.getElementById("disString").innerHTML = sum;}   
          */  
        } 
      //A decimal point can't be entered next to an already entered number after the CE button has been pressed
      else if (decPPressed == false && /\d$/.test(sum) !== true && cePressed == true){
        setCePressed(false);
        setDecPPressed(true);
        setEntry("0.")
        /*
        {document.getElementById("disNum").innerHTML = entry;}    
        */
        setSum(sum += "0.");
        /*
        {document.getElementById("disString").innerHTML = sum;} 
        */   
      }
      
      //Decimal point button works after the screen is cleared with CE
      else if (decPPressed == false && opPressed == false && sum =="0" && cePressed == true){
        setCePressed(false);
        setDecPPressed(true);
        setEntry(entry += ".");
        /*
        {document.getElementById("disNum").innerHTML = entry;}
        */    
        setSum(sum += ".");
        /*
        {document.getElementById("disString").innerHTML = sum;} 
        */   
      }
    }else{
      limit();
    }
  }

  
  //Converts the sum string into intergers and arithmetic opertators, returns the result of the calculation back as a string to display screen one. The result can still then be used for further calculations
  function equalFunc(){
    if (/\d$/.test(sum) == true){
    //Replaces html operator codes with js operator strings, inserts spaces beside operators and then splits the string into an array from those spaces.
    setSum(sum.replace(/\&#247;/g, "/").replace(/\&#215;/g, "*").replace(/(\/)/g, " $1 ").replace(/(\*)/g, " $1 ").replace(/(\+)/g, " $1 ").replace(/((?!^)\-)/g, " $1 ").split(" "));
    
        for(var i = 0; i < sum.length; i++){
            //Adds the first number into the calculation
            if (i == 0 ){
              setCalc(calc += parseFloat(sum[i]));
            }
            //Divide calculation by next number
            if (/\//.test(sum[i]) == true){
              setCalc(calc /= parseFloat(sum[i + 1]));
            }  
            //Multiply calculation by next number
            if (/\*/.test(sum[i]) == true){
              setCalc(calc *= parseFloat(sum[i + 1]));
            }  
          //Add calculation by next number
            if (/\+/.test(sum[i]) == true){
              setCalc(calc += parseFloat(sum[i + 1]));
            }
            //Minus calculation by next number
            if (/^\-$/.test(sum[i]) == true){
              setCalc(calc -= parseFloat(sum[i + 1]));
            }  
        }
        //Rounds off the calcuation into a string with limited decimals and removes excess zeros
        setCalc(calc.toFixed(2).replace(/\.0+$|0+$/,""));
        //Clears the screen of the result is too long
        if (calc.length > 8){ 
          limit();        
        }
        //Otherwise inserts the result onto the display screen
        else{
          setEntry(calc);
          setSum(sum +="="+calc);
          /*
          document.getElementById("disNum").innerHTML = calc;
          document.getElementById("disString").innerHTML +="="+calc;
          */
         setEqPressed(true);
          //Resets the display strings if the result is zero
          if (calc ==="0"){
              setEntry("0");
              setSum("0");
          }
      }  
    }
  }
  
  return (
    <div id="calcBase" className= "container">   
      <div id="padDiv">
        <h1 className="text-center">CALCULATOR</h1>
        <div id="display" className="text-right">
            <p id="disNum">{entry}</p>
            <p id="disString">{sum}</p>
        </div>
          <button onClick={ACFunc} id="clear">AC</button>
          <button onClick={CEFunc} id="CE">CE</button>
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
      </div>          
    </div>
    )
}

export default App;
