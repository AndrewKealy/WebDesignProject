function keySelectFunction(mode, key){
/* A function that takes a mode and key from a page and displays the correct key, loads the correct sound sample and triggers an animation
*/


/*
A series of dictionaries, one for each mode, containing the notes for each key
*/
  var ionianDictionary = {
    'C': '<span class="rootNote">C,</span> D, E, F, G, A, B, C',
    'C2': "",
    'C♯D♭': '<span class="rootNote">C♯,</span> D♯, E♯, F♯, G♯, A♯, B♯, C♯',
    'C♯D♭2': '<span class="rootNote">D♭,</span> E♭, F, G♭, A♭, B♭, C, D♭',
    'D': '<span class="rootNote">D,</span> E, F♯, G, A, B, C♯, D',
    'D2': "",
    'D♯E♭': '<span class="rootNote">D♯,</span> E♯, F𝄪, G♯, A♯, B♯, C𝄪, D♯',
    'D♯E♭2': '<span class="rootNote">E♭,</span> F, G, A♭, B♭, C,  D, E♭',
    'E': '<span class="rootNote">E, </span>F♯, G♯, A, B, C♯, D♯, E',
    'E2': "",
    'F': '<span class="rootNote">F,</span> G, A, B♭, C, D, E, F',
    'F2': "",
    'F♯G♭': '<span class="rootNote">F♯,</span> G♯, A♯, B, C♯, D♯, E♯, F♯',
    'F♯G♭2': '<span class="rootNote">G♭,</span> A♭, B♭, C♭, D♭, E♭, F, G♭',
    'G': '<span class="rootNote">G,</span> A, B, C, D, E, F♯, G',
    'G2': "",
    'G♯A♭': '<span class="rootNote">G♯,</span> A♯, B♯, C♯, D♯, E♯, F𝄪, G♯',
    'G♯A♭2': '<span class="rootNote">A♭,</span> B♭, C, D♭, E♭, F, G, A♭',
    'A':'<span class="rootNote">A, </span>B, C♯, D, E, F♯, G♯, A',
    'A2':"",
    'A♯B♭': '<span class="rootNote">A♯,</span> B♯, C𝄪, D♯, E♯, F𝄪, G𝄪, A♯',
    'A♯B♭2': '<span class="rootNote">B♭,</span> C, D, E♭, F, G, A, B♭',
    'B': '<span class="rootNote">B,</span> C♯, D♯, E, F♯, G♯, A♯, B',
    'B2': ""
  }

  var dorianDictionary ={
    'C': '<span class="rootNote">C,</span> D, E♭, F, G, A, B♭, C',
    'C2':"",
    'C♯D♭': '<span class="rootNote">C♯,</span> D♯, E, F♯, G♯, A♯, B, C♯',
    'C♯D♭2':'<span class="rootNote">D♭,</span> E♭, F♭, G♭, A♭, B♭, C♭, D♭',
    'D':'<span class="rootNote">D,</span> E, F, G, A, B, C, D',
    'D2': "",
    'D♯E♭':'<span class="rootNote">D♯,</span> E♯, F♯, G♯, A♯, B♯, C♯, D♯',
    'D♯E♭2':'<span class="rootNote">E♭,</span> F, G♭, A♭, B♭, C, D♭, E♭',
    'E': '<span class="rootNote">E,</span> F♯, G, A, B, C♯, D, E',
    'E2':"",
     'F':'<span class="rootNote">F,</span> G, A♭, B♭, C, D, E♭, F',
    'F2':"",
    'F♯G♭':'<span class="rootNote">F♯,</span> G♯, A, B, C♯, D♯, E, F♯',
    'F♯G♭2':'<span class="rootNote">G♭,</span> A♭, B♭♭, C♭, D♭, E♭, F♭, G♭',
    'G': '<span class="rootNote">G,</span> A, B♭, C, D, E, F, G',
    'G2':"",
    'G♯A♭':'<span class="rootNote">G♯,</span> A♯, B, C♯, D♯, E♯, F♯, G♯',
    'G♯A♭2':'<span class="rootNote">A♭,</span> B♭, C♭,  D♭, E♭, F,  G♭,  A♭',
     'A':'<span class="rootNote">A,</span> B, C, D, E, F♯, G, A',
    'A2':"",
    'A♯B♭':'<span class="rootNote">A♯,</span> B♯, C♯, D♯, E♯, F𝄪, G♯, A♯',
    'A♯B♭2':'<span class="rootNote">B♭,</span> C,  D♭,  E♭, F,  G, A♭, B♭',
    'B':'<span class="rootNote">B,</span> C♯, D, E, F♯, G♯, A, B',
    'B2':""
  }


  var phrygianDictionary ={
    'C': '<span class="rootNote">C,</span> D♭, E♭, F, G, Ab, Bb, C',
    'C2':"",
    'C♯D♭':'<span class="rootNote">C#,</span> D, E, F#, G#, A, B, C#' ,
    'C♯D♭2':'<span class="rootNote">D♭,</span> E♭♭, F♭, G♭, A♭, B♭♭, C♭, D♭',
    'D': '<span class="rootNote">D,</span> E♭, F, G, A, B♭, C, D',
    'D2': "",
    'D♯E♭': '<span class="rootNote">D♯,</span> E, F#, G#, A#, B, C#, D#',
    'D♯E♭2':'<span class="rootNote">E♭,</span> F♭, G♭, A♭, B♭, C♭, D♭, E♭',
    'E': '<span class="rootNote">E, </span>F, G, A, B, C, D, E' ,
    'E2':"",
     'F': '<span class="rootNote">F,</span> G♭, A♭, B♭, C, D♭, E♭, F',
    'F2':"",
    'F♯G♭':'<span class="rootNote">F♯,</span> G, A, B, C#, D, E, F#',
    'F♯G♭2':'<span class="rootNote">G♭,</span> A♭♭, B♭♭, C♭, D♭, E♭♭, F♭, G♭',
    'G': '<span class="rootNote">G,</span> A♭, B♭, C, D, E♭, F, G',
    'G2':"",
    'G♯A♭':'<span class="rootNote">G♯,</span> A, B, C#, D#, E, F#, G#',
    'G♯A♭2':'<span class="rootNote">A♭,</span> B♭♭, C♭,  D♭, E♭, F♭,  G♭, A♭',
     'A': '<span class="rootNote">A,</span> B♭, C, D, E, F, G, A',
    'A2':"",
    'A♯B♭': '<span class="rootNote">A♯,</span>  B, C#, D#, E♯, F#, G#, A#',
    'A♯B♭2':'<span class="rootNote">B♭</span> C♭, D♭, E♭, F, G♭, A♭, B♭',
    'B':'<span class="rootNote">B,</span> C, D, E, F♯, G, A, B',
    'B2':""
  }
  var lydianDictionary={
    'C': '<span class="rootNote">C,</span> D, E, F♯, G, A, B, C',
    'C2':"",
    'C♯D♭': '<span class="rootNote">C#,</span> D♯, E♯, F𝄪, G#, A♯, B♯, C#',
    'C♯D♭2': '<span class="rootNote">D♭,</span> E♭, F, G, A♭, B♭, C, D♭',
    'D': '<span class="rootNote">D,</span> E, F♯, G♯, A, B, C♯, D',
    'D2': "",
    'D♯E♭':'<span class="rootNote">D♯,</span> E♯, F𝄪, G𝄪, A#, B♯, C𝄪, D#',
    'D♯E♭2':'<span class="rootNote">E♭,</span> F, G, A, B♭, C, D, E♭',
    'E': '<span class="rootNote">E, </span>F♯, G♯, A♯, B, C♯, D♯, E',
    'E2':"",
     'F': '<span class="rootNote">F,</span> G, A, B, C, D, E, F',
    'F2':"",
    'F♯G♭':'<span class="rootNote">F♯,</span> G, A, B, C#, D, E, F#',
    'F♯G♭2':'<span class="rootNote">G♭,</span> A♭, B♭, C, D♭, E♭, F, G♭',
    'G': '<span class="rootNote">G,</span> A, B, C♯, D, E, F♯, G',
    'G2':"",
    'G♯A♭':'<span class="rootNote">G♯,</span> A♯, B♯, C𝄪, D#, E♯, F𝄪, G#',
    'G♯A♭2':'<span class="rootNote">A♭,</span> B♭, C,  D, E♭, F,  G, A♭',
     'A':'<span class="rootNote">A,</span> B, C♯, D♯, E, F♯, G♯, A',
    'A2':"",
    'A♯B♭':'<span class="rootNote">A♯,</span>  B♯, C𝄪, D𝄪, E♯, F𝄪, G𝄪, A#',
    'A♯B♭2':'<span class="rootNote">B♭,</span> C, D, E, F, G, A, B♭',
    'B': '<span class="rootNote">B,</span> C♯, D♯, E♯, F♯, G♯, A♯, B',
    'B2':""
  }



  var mixolydianDictionary={
    'C': '<span class="rootNote">C,</span> D, E, F, G, A, B♭, C',
    'C2':"",
    'C♯D♭':'<span class="rootNote">C♯,</span> D♯, E♯, F♯, G♯, A♯, B, C♯' ,
    'C♯D♭2':'<span class="rootNote">D♭,</span> E♭, F, G♭, A♭, B♭, C♭, D♭',
    'D': '<span class="rootNote">D,</span> E, F♯, G, A, B, C, D',
    'D2': "",
    'D♯E♭': '<span class="rootNote">D♯,</span> E♯, F𝄪, G♯, A♯, B♯, C♯, D♯',
    'D♯E♭2': '<span class="rootNote">E♭,</span> F, G, A♭, B♭, C, D♭, E♭',
    'E': '<span class="rootNote">E,</span> F♯, G♯, A, B, C♯, D, E',
    'E2':"",
     'F': '<span class="rootNote">F,</span> G, A, B♭, C, D, E♭, F',
    'F2':"",
    'F♯G♭':'<span class="rootNote">F♯,</span> G♯, A♯, B, C♯, D♯, E, F♯',
    'F♯G♭2':'<span class="rootNote">G♭,</span> A♭, B♭, C♭, D♭, E♭, F♭, G♭',
    'G': '<span class="rootNote">G,</span> A, B, C, D, E, F, G',
    'G2':"",
    'G♯A♭': '<span class="rootNote">G♯,</span> A♯, B♯, C♯, D♯, E♯, F♯, G♯',
    'G♯A♭2':'<span class="rootNote">A♭,</span> B♭, C,  D♭, E♭, F,  G♭,  A♭',
     'A':'<span class="rootNote">A,</span> B, ♯, D, E, F♯, G, A',
    'A2':"",
    'A♯B♭': '<span class="rootNote">A♯,</span> B♯, C𝄪, D♯, E♯, F𝄪, G♯, A♯',
    'A♯B♭2': '<span class="rootNote">B♭,</span> C,  D,  E♭, F,  G, A♭, B♭',
    'B': '<span class="rootNote">B,</span> C♯, D♯, E, F♯, G♯, A, B',
    'B2':""
  }

  var aeolianDictionary={
    'C': '<span class="rootNote">C,</span> D, E♭, F, G, A♭, B♭, C',
    'C2':"",
    'C♯D♭': '<span class="rootNote">C♯,</span> D♯, E, F♯, G♯, A, B, C♯',
    'C♯D♭2':'<span class="rootNote">D♭,</span> E♭, F♭, G♭, A♭, B♭♭, C♭, D♭',
    'D': '<span class="rootNote">D,</span> E, F, G, A, B♭, C, D',
    'D2': "",
    'D♯E♭': '<span class="rootNote">D♯,</span> E♯, F♯, G♯, A♯, B, C♯, D♯',
    'D♯E♭2':'<span class="rootNote">E♭,</span> F, G♭, A♭, B♭, C♭, D♭, E♭',
    'E': '<span class="rootNote">E,</span> F♯, G, A, B, C, D, E',
    'E2':"",
     'F':'<span class="rootNote">F,</span> G, A♭, B♭, C, D♭, E♭, F',
    'F2':"",
    'F♯G♭': '<span class="rootNote">F♯,</span> G♯, A, B, C♯, D, E, F♯',
    'F♯G♭2':'<span class="rootNote">G♭,</span> A♭, B♭♭, C♭, D♭, E♭♭, F♭, G♭',
    'G': '<span class="rootNote">G,</span> A, B♭, C, D, E♭, F, G',
    'G2':"",
    'G♯A♭': '<span class="rootNote">G♯,</span> A♯, B, C♯, D♯, E, F♯, G♯',
    'G♯A♭2': '<span class="rootNote">A♭,</span> B♭, C♭,  D♭, E♭, F♭,  G♭,  A♭',
     'A': '<span class="rootNote">A,</span> B, C, D, E, F, G, A',
    'A2':"",
    'A♯B♭': '<span class="rootNote">A♯,</span> B♯, C♯, D♯, E♯, F♯, G♯, A♯',
    'A♯B♭2': '<span class="rootNote">B♭,</span> C,  D♭,  E♭, F,  G♭, A♭, B♭',
    'B': '<span class="rootNote">B,</span> C♯, D, E, F♯, G, A, B',
    'B2':""
  }
  var locrianDictionary={
    'C': '<span class="rootNote">C,</span> Db, Eb, F, G♭, Ab, Bb, C',
    'C2':"",
    'C♯D♭': '<span class="rootNote">C#,</span> D, E, F#, G, A, B, C#',
    'C♯D♭2':'<span class="rootNote">D♭,</span> E♭♭, F♭, G♭, A♭♭, B♭♭, C♭, D♭',
    'D': '<span class="rootNote">D,</span> Eb, F, G, A♭, B♭, C, D',
    'D2': "",
    'D♯E♭': '<span class="rootNote">D♯,</span> E, F#, G#, A, B, C#, D#',
    'D♯E♭2': '<span class="rootNote">E♭,</span> F♭, G♭, A♭, B♭♭, C♭, D♭, E♭',
    'E': '<span class="rootNote">E, </span>F, G, A, B♭, C, D, E',
    'E2':"",
     'F': '<span class="rootNote">F,</span> G♭, A♭, B♭, C♭, D♭, E♭, F',
    'F2':"",
    'F♯G♭': '<span class="rootNote">F♯,</span> G, A, B, C, D, E, F#',
    'F♯G♭2':'<span class="rootNote">G♭,</span> A♭♭, B♭♭, C♭, D♭♭, E♭♭, F♭, G♭',
    'G': '<span class="rootNote">G,</span> A♭, B♭, C, D♭, E♭, F, G',
    'G2':"",
    'G♯A♭': '<span class="rootNote">G♯,</span> A, B, C#, D, E, F#, G#',
    'G♯A♭2': '<span class="rootNote">A♭,</span> B♭♭, C♭, D♭, E♭♭, F♭,  G♭, A♭',
     'A': '<span class="rootNote">A,</span> B♭, C, D, E♭, F, G, A',
    'A2':"",
    'A♯B♭': '<span class="rootNote">A♯,</span>  B, C#, D#, E, F#, G#, A#',
    'A♯B♭2': '<span class="rootNote">B♭</span> C♭, D♭, E♭, F♭, G♭, A♭, B♭',
    'B': '<span class="rootNote">B,</span> C, D, E, F, G, A, B',
    'B2':""
  }
/*
A switch statement that takes the mode as a parameter to select the correct dictionary.
The key is then used to set the correct notes
*/

  switch(mode){
    case "Ionian":
      notesInScaleA=ionianDictionary[key];
      notesInScaleB=ionianDictionary[key+2];
      break;
      case "Dorian":
      notesInScaleA=dorianDictionary[key];
      notesInScaleB=dorianDictionary[key+2];
      break;
      case "Phrygian":
      notesInScaleA=phrygianDictionary[key];
      notesInScaleB=phrygianDictionary[key+2];
      break;
      case "Lydian":
      notesInScaleA=lydianDictionary[key];
      notesInScaleB=lydianDictionary[key+2];
      break;
      case "Mixolydian":
      notesInScaleA=mixolydianDictionary[key];
      notesInScaleB=mixolydianDictionary[key+2];
      break;
      case "Aeolian":
      notesInScaleA=aeolianDictionary[key];
      notesInScaleB=aeolianDictionary[key+2];
      break;
      case "Locrian":
      notesInScaleA=locrianDictionary[key];
      notesInScaleB=locrianDictionary[key+2];
      break;
      default: "";

      break;
  }
  /*
  The notes in the scale are sent to the html page
  */
    document.getElementById("notesA").innerHTML = notesInScaleA;
    document.getElementById("notesB").innerHTML = notesInScaleB;

// Variables are created and initialised to set the audio source
    var mp3Audio=document.getElementById('myMp3Source');
    var oggAudio=document.getElementById('myOggSource');

    // The supplied mode and key are used to set the correct path to the correct file
    mp3Audio.src='MusicSamples/'+mode+'/'+key+'_'+mode+'.mp3';
    oggAudio.src='MusicSamples/'+mode+'/'+key+'_'+mode+'.ogg';

    //A variable is created for the audioplayer on the page and the sample is loaded
    var audioPlayer=document.getElementById('myAudioPlayer');
    audioPlayer.load();
    
    // An event listener is added to the player so the animation is triggerred when the sample is played
  audioPlayer.addEventListener("play", function () {
//The static image of the cassette is repplaced with the animated version of the SVG (created in SVGgator)
      var cassetteImageAnimated=document.getElementById("cassetteImage");
      var date = new Date();
      cassetteImageAnimated.src="Images/cassette300Animate.svg?"+date.getTime();
});
//When the sample is finished playing, the animated image is replaced by the static one.
audioPlayer.addEventListener("ended", function () {
  var cassetteImageAnimated=document.getElementById("cassetteImage");
  var date = new Date();
  cassetteImageAnimated.src="Images/cassette300.svg";

})
}
