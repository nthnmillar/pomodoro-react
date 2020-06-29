
import React, {useState, useEffect } from 'react';
import 'bootstrap';

function App(){

  return (
    <div id="calcBase" class= "container">   
      <div id="padDiv">
        <h1 class="text-center">CALCULATOR</h1>
        <div id="display" class="text-right">
            <p id="disNum"></p>
            <p id="disString"></p>
        </div>
          <button onClick="ACFunc()" id="clear">AC</button>
          <button onClick="CEFunc()" id="CE">CE</button>
          <button onClick="dviFunc()" id="divide">&#247;</button>
          <button onClick="multFunc()" id="multiply">&#215;</button>
        
          <button onClick="sevenFunc()" id="seven">7</button>
          <button onClick="eightFunc()" id="eight">8</button>
          <button onClick="nineFunc()" id="nine">9</button>
          <button onClick="minusFunc()" id="subtract">-</button>
        
          <button onClick="fourFunc()" id="four">4</button>
          <button onClick="fiveFunc()" id="five">5</button>
          <button onClick="sixFunc()" id="six">6</button>
          <button onClick="plusFunc()" id="add">+</button>
          
          <button onClick="oneFunc()" id="one">1</button>
          <button onClick="twoFunc()" id="two">2</button>
          <button onClick="threeFunc()" id="three">3</button>
        
          <button onClick="equalFunc()" id="equals">=</button>     
          <button onClick="zeroFunc()" id="zero">0</button>
          <button onClick="decPFunc()" id="decimal">.</button>   
      </div>          
    </div>
    )
}

export default App;
