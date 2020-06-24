import React, { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";

const InstrumentAudio = ({ instrumentName, notes }) => {
    const [instrumentPlayer, setInstumentPlayer] = useState(null);
    useEffect(() => {
        setInstumentPlayer(AudioPlayer());
    },[]);

    useEffect( ()=> {
        if (instrumentPlayer) {
            setInstrument();
            playNotes();
        }
    }, [instrumentPlayer]);

    useEffect(() => {
        if (nots && notes.length > 0){
            playNotes();
        }
    }, [notes]);

    const setInstrument = () => {
        instrumentPlayer.setInstrument(instrumentName);
    };

    const playNotes = () => {
        if (instrumentPlayer) {
            instrumentPlayer.playNotes(notes[0]);
        }
    };

    return null;

};

export default InstrumentAudio;