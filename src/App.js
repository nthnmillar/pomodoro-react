import React from 'react';
import D2 from './audio/909-HiHatClosed-D2.wav';
import 'bootstrap'; 

function DrumSound(noise){
    console.log("audio", noise);
    let audio = new Audio(noise);
    audio.play();
}

function SoundPlay(name){ 
    console.log("SoundPlay","soundName", name);
    switch(name){
      case "Q":
        DrumSound(D2);
      default:
        return 
      }
}
    
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

// import React, {useState} from 'react';
/*import AudioPlayer from "./AudioPlayer"; */

/*
const [drumSound,setSound] = useState(0);
const [btnName,setBtn] = useState(0);
*/
 

//   
// <SoundPlay drumSound={props.btnName}/>

 /*
  const audioPlayer = AudioPlayer();
  useEffect(() => {
    audioPlayer.setInstrument("acoustic_grand_piano");
  }, []);

  const handleClick = () => {
    audioPlayer.playNote("C4");
  };
  */

/*

          <div className="row">           
            <div className="drum-pad col" id="">
              <p className="text-center">Q</p>
            </div>
            <div className="drum-pad col" id="">
              <p className="text-center">W</p>
            </div>
            <div className="drum-pad col" id="">
              <p className="text-center">E</p>
            </div>    
          </div>
          <div className="row">
            <div className="drum-pad col" id="">
              <p className="text-center">A</p>
            </div>
            <div className="drum-pad col" id="">
              <p className="text-center">S</p>
            </div>
            <div className="drum-pad col" id="">
              <p className="text-center">D</p>
            </div> 
          </div>
          <div className="row">
            <div className="drum-pad col" id="">
              <p className="text-center">Z</p>
            </div>
            <div className="drum-pad col" id="">
              <p className="text-center">X</p>
            </div>
            <div className="drum-pad col" id="">
              <p className="text-center">C</p>
            </div> 
          </div>       
          */
