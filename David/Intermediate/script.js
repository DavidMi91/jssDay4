document.getElementById("santa1").addEventListener("click", hide);
document.getElementById("santa2").addEventListener("click", hide);
document.getElementById("santa3").addEventListener("click", hide);
document.getElementById("santa4").addEventListener("click", hide);

function hide() {
  myFunction(this);
  toggle =  document.getElementById(this);
}
function myFunction(pic) {
    pic.style.display = "none"
}

// exercise 2 
let button = document.getElementById('colorChanger');

function RBC (e) {
  button.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
}

button.addEventListener("click", RBC);