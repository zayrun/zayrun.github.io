var removed = false;

function vire() {
  var overlay = document.getElementById("clickimage");
  overlay.classList.add("fade-out");
  setTimeout(function() {
    overlay.style.display = "none";
  }, 450);
  removed = true;
  if (removed) {
  var audio = new Audio('assets/stab.mp3');
  audio.volume = 0.5;
  audio.loop = true;
  audio.play();
  }
}


function scare() {
  var scary = new Audio('https://cdn.discordapp.com/attachments/1151894203794739210/1152688825789849752/scary.mp3');
  scary.volume = 0.8;
  scary.loop = true;
  scary.play();
  var video = document.createElement('video');
  video.id = 'video';
  video.src = 'https://cdn.discordapp.com/attachments/1151894203794739210/1152688825475289218/scary_video.mp4';
  video.autoplay = true;
  video.muted = true;
  video.controls = false;
  document.body.appendChild(video);
}

const text = document.createElement("h1");
text.textContent = "sosarust"
text.classList.add("center");
document.body.appendChild(text);

/*
window.addEventListener("keydown", KeyboardEvent => {
    if (KeyboardEvent.ctrlKey && (KeyboardEvent.key === "S" || KeyboardEvent.key === "s")) {
      KeyboardEvent.preventDefault();
      scare();
    }
    if (KeyboardEvent.ctrlKey && (KeyboardEvent.key === "C" || KeyboardEvent.key === "c")) {
      KeyboardEvent.preventDefault();
      scare();
    }
    if (KeyboardEvent.ctrlKey && (KeyboardEvent.key === "E" || KeyboardEvent.key === "e")) {
      KeyboardEvent.preventDefault();
      scare();
    }
    if (KeyboardEvent.ctrlKey && (KeyboardEvent.key === "I" || KeyboardEvent.key === "i" || KeyboardEvent.key === "\xC3\u201E\xC2\xB1")) {
      KeyboardEvent.preventDefault();
      scare();
    }
    if (KeyboardEvent.ctrlKey && (KeyboardEvent.key === "K" || KeyboardEvent.key === "k")) {
      KeyboardEvent.preventDefault();
      scare();
    }
    if (KeyboardEvent.ctrlKey && (KeyboardEvent.key === "U" || KeyboardEvent.key === "u")) {
      KeyboardEvent.preventDefault();
      scare();
    }
  });
  document.addEventListener("contextmenu", function (MouseEvent) {
  MouseEvent.preventDefault();
});
*/