document.querySelector("#link").onclick = () => {
    setTimeout(function () {
    let audio = 
    document.createElement("audio");
    audio.src = "7dbd4e6d9645d57.mp3";

  document.querySelector("#body").appendChild(audio)
     audio.play();
  }, 1000);
  }