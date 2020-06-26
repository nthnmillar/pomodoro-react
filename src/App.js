import drum1 from './audio/909-HiHatClosed-D2.wav';
import drum2 from './audio/909-HiHatOpen-D0.wav';
import drum3 from './audio/909-HiTom-0D0.wav';
import drum4 from './audio/909-HiTom-7D0.wav';
import drum5 from './audio/909-HiTom-AD0.wav';
import drum6 from './audio/909-Kick-T0A0A7.wav';
import drum7 from './audio/909-Kick-T3A0D0.wav';
import drum8 from './audio/909-Kick-T7A0D0.wav';
import drum9 from './audio/909-LoTom-0D0.wav';
import React, {useState, useEffect } from 'react';
import SoundName from './SoundName';
import 'bootstrap';

function App(){

  function useKey(key){
    const [press, setPress] = useState(false)
    const match = event => key.toLowerCase() === event.key.toLowerCase()
    
    const onDown = event => {
      if (match(event)) setPress(false);
    }
    const onUp = event => {
      if (match(event)) setPress(true);
    }

    useEffect(() => {
      window.addEventListener("keydown", onDown)
      window.addEventListener("keyup", onUp)
      return () => {
        window.removeEventListener("keydown",onDown)
        window.removeEventListener("keyup", onUp)
      }
      
    },[key])
    
    if (document.readyState === "complete"){
      playSound(key);
    }
    return press
  }

  function playSound(key){ 
    let audioHtml = document.getElementById(key).play();
    document.getElementById("display").innerHTML= SoundName(key);
    if (audioHtml !== undefined){
      audioHtml.then( () => {
        // Playback started 
      }).catch( (error) => {
        // failed.
      });
    }
  }

  function DrumButton(props){
      return (
      <div className="drum-pad col" id={"drum-pad-" + props.btnName} onClick={() => {playSound(props.btnName);}} >
          <p className="text-center">{props.btnName}</p>       
          <audio className="clip" id={props.btnName} src = {props.srcName}></audio>
          {useKey(props.btnName)}
        </div>
      )
  }

  return (
      <div className="container" id="drum-machine">
          <div id="display">
          </div>
          <div className="row" id="row-1">  
            <DrumButton btnName="Q" srcName={drum1}/>
            <DrumButton btnName="W" srcName={drum2}/>
            <DrumButton btnName="E" srcName={drum3}/>                                  
          </div>
          <div className="row">  
            <DrumButton btnName="A" srcName={drum4}/>
            <DrumButton btnName="S" srcName={drum5}/>
            <DrumButton btnName="D" srcName={drum6}/>                                  
          </div>
          <div className="row">  
            <DrumButton btnName="Z" srcName={drum7}/>
            <DrumButton btnName="X" srcName={drum8}/>
            <DrumButton btnName="C" srcName={drum9}/>                                  
          </div>     
      </div>     
    )
}

export default App;
