import React from 'react';
import 'bootstrap';
import SoundPlay from "./SoundPlay";
    
function DrumButton(props){
    console.log("DrumButton", props.btnName);
    return (
      <div className="drum-pad col" onClick={() => {SoundPlay(props.btnName)}}>
        <p className="text-center">{props.btnName}</p>
      </div>
    )
}

function App(){
  return (
      <div className="container" id="drum-machine">
        <div id="display">
        </div>                 
          <div className="row" id="row-1">  
            <DrumButton btnName="Q"/>
            <DrumButton btnName="W"/>
            <DrumButton btnName="E"/>                                  
          </div>
          <div className="row">  
            <DrumButton btnName="A"/>
            <DrumButton btnName="S"/>
            <DrumButton btnName="D"/>                                  
          </div>
          <div className="row">  
            <DrumButton btnName="Z"/>
            <DrumButton btnName="X"/>
            <DrumButton btnName="C"/>                                  
          </div>     
      </div>     
    )
}

export default App;
