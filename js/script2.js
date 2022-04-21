// General

var modal = document.getElementsByClassName("modal");

var info = document.getElementsByClassName("info");


//Bankomat
var windowBank = document.getElementById('bank');

var butBank = document.getElementById("but_bank");

var close = document.getElementsByClassName("close");

var locBank = document.getElementById("loc_bank");

butBank.onclick = function() {
  windowBank.style.display = "block";
}



//Input

var windowInput = document.getElementById('input');

var butInput = document.getElementById("but_input");



butInput.onclick = function() {
  windowInput.style.display = "block";
}

window.onclick = function() {
  for (let i = 0; i < 5; i++) {
    var modal = document.getElementsByClassName("modal")[i];
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
}

window.onclick = function() {
  for (let i = 0; i < 5; i++) {
    var modal = document.getElementsByClassName("modal")[i];
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
}