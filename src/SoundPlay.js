import drum1 from './audio/909-HiHatClosed-D2.wav';
import drum2 from './audio/909-HiHatOpen-D0.wav';
import drum3 from './audio/909-HiTom-0D0.wav';
import drum4 from './audio/909-HiTom-7D0.wav';
import drum5 from './audio/909-HiTom-AD0.wav';
import drum6 from './audio/909-Kick-T0A0A7.wav';
import drum7 from './audio/909-Kick-T3A0D0.wav';
import drum8 from './audio/909-Kick-T7A0D0.wav';
import drum9 from './audio/909-LoTom-0D0.wav';

function SoundPlay(name){ 
  console.log("SoundPlay","soundName", name);
  switch(name){
    case "Q":
      DrumSound(drum1);
      break;
    case "W":
      DrumSound(drum2);
      break;
    case "E":
      DrumSound(drum3);
      break;
    case "A":
      DrumSound(drum4);
      break;
    case "S":
      DrumSound(drum5);
      break;
    case "D":
      DrumSound(drum6);
      break;
    case "Z":
      DrumSound(drum7);
      break;
    case "X":
      DrumSound(drum8);
      break;
    case "C":
      DrumSound(drum9);
      break;                                     
    default:
      return 
    }
}

function DrumSound(noise){
    console.log("audio", noise);
    let audio = new Audio(noise);
    let play = true
      audio.play();
      play = false;  
}


export default SoundPlay;