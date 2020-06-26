
function SoundName(name){ 
  switch(name){
    case "Q":
      return "Hi Hat Closed";
    case "W":
      return "Hi Hat Open";
    case "E":
      return "Hi Tom 0D0"
    case "A":
      return "Hi Tom 7D0"
    case "S":
      return "Hi Tom AD0"
    case "D":
      return "Kick T0A0A7"
    case "Z":
      return "Kick T3A0D0"
    case "X":
      return "Kick T7A0D0"
    case "C":
      return "Lo Tom 0D0"                                    
    default:
      return 
    }
}

export default SoundName;