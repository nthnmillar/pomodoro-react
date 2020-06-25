import React, {useState, useEffect } from 'react';
import SoundPlay from './SoundPlay';
import Playing from './SoundPlay';
import 'bootstrap';
    
function useKey(key){
  let playing = false;
  const [press, setPress] = useState(false)
  const match = event => key.toLowerCase() === event.key.toLowerCase()
  
  const onDown = event => {
    if (match(event)) setPress(true);
    playing = true; 
  }
  const onUp = event => {
    if (match(event)) setPress(false);
    playing = false; 
  }

  useEffect(() => {
    window.addEventListener("keydown", onDown)
    window.addEventListener("keyup", onUp)
    return () => {
      window.removeEventListener("keydown",onDown)
      window.removeEventListener("keyup", onUp)
    }
  },[key])

  console.log("Key", key);
  SoundPlay(key);
  return press
}


function DrumButton(props){
    console.log("DrumButton", props.btnName);
    return (
      <div className="drum-pad col" onClick={() => {SoundPlay(props.btnName)}}>
        <p className="text-center">{props.btnName}</p>
        {useKey(props.btnName)}
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
