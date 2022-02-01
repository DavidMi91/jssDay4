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
