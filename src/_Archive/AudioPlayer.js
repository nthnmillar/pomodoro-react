import SoundFontPlayer from "soundfont-player";
import AudioContext from "./_Archive/AudioContext";


const NullSoundFontPlayerNoteAudio = {
 stop() {}
};

const NullSoundFontPlayer = {
  play(){
   return NullSoundFontPlayerNoteAudio;
  }
};

const AudioPlayer = () => {
 //Audio Context
 const audioContext = AudioContext && new AudioContext();

 //soundPlayer
 let soundPlayer = NullSoundFontPlayerNoteAudio;
 //setInstrument
 const Player = {
  setInstrument(instrumentName){
    SoundFontPlayer.instrument(audioContext, instrumentName)
      .then(soundfontPlayer =>{
        soundPlayer = soundfontPlayer;
      })
      .catch(e => {
        soundPlayer = NullSoundFontPlayer;
      });
  },
  playNote(note){
    soundPlayer.play(note);
  }      
 };
 return Player;
}

export default AudioPlayer;