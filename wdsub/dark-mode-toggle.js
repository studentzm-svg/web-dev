let darkModeTgl = document.getElementById("dark-mode-toggle");
let onOffStatus = document.getElementById("on-off-status");

let isLight = true;

function mngMode(event) {
  
  // Change background color to black if light mode, else white
  if (isLight) document.body.style.backgroundColor = "black";
  else document.body.style.backgroundColor = "white";
  
  
  // Change text color to white if light mode, else black
  if (isLight) document.body.style.color = "white";
  else document.body.style.color = "black";
  
  // Change text to "dark mode on" else "dark mode off"
  if (isLight) onOffStatus.innerHTML = "<p>dark mode off</p>";
  
  // Flip the isLight switch
  isLight = !isLight;
}
