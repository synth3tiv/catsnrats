function moverPosicionRandom(elm) {
  elm.style.position = 'absolute';
  elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
  elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnCat = document.getElementById("cat");
let btnRat = document.getElementById("rat");
let btnExit = document.getElementById("exit");
let divCatMode = document.getElementsByClassName("cat_mode")[0];
let divRatMode = document.getElementsByClassName("rat_mode")[0];

btnExit.addEventListener("mouseenter", function(e){moverPosicionRandom(e.target)});

btnCat.addEventListener("click", function(e){
  alert("You are now in cat mode :3 🐈");
  divCatMode.style.display = "block";
  const cancion = new Audio("media\\CatsonMars.mp3");
  cancion.play();
});

btnRat.addEventListener("click", function(e){
  alert("You are now in rat mode :3 🐀");
  divRatMode.style.display = "block";
  const cancion = new Audio("media\\LefestinCamille.mp3");
  cancion.play();
});