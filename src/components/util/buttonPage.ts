import Player from "./Player";
import User from "./User";


function play() {
            var audio = new Audio(
'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
            audio.play();
          document.getElementById("button").disabled = true;
        }