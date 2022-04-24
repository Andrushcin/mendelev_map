//Search
var windowSearch = document.getElementById('search');

var butSearch = document.getElementById("icon_search");

var closeSearch = document.getElementsByClassName("close_search")[0];

butSearch.onclick = function() {
  windowSearch.style.display = "flex";
}

closeSearch.onclick = function() {
  windowSearch.style.display = "none";
}

// General
var hash = window.location.hash;

window.onclick = function() {
  for (let i = 0; i < 20; i++) {
    var modal = document.getElementsByClassName("modal")[i];
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
}

// Panorama
var butPanorama = document.getElementsByClassName("but_panorama")[0];

var photomarks = document.getElementsByClassName("mark");

butPanorama.addEventListener("click", function() {
  for (let i = 0; i < 3; i++) {
    var mark = photomarks[i]
    if(mark.style.display == 'block')  mark.style.display = 'none';
    else mark.style.display = 'block'
  }
});

// Photomarks
var window460_240 = document.getElementById('window_460_240');

var mark460_240 = document.getElementById("mark_460_240");

var close460_240 = document.getElementsByClassName("close_460_240")[0];

var loc460_240 = document.getElementById("loc_460_240");

mark460_240.onclick = function() {
  window460_240.style.display = "block";
}

close460_240.onclick = function() {
  window460_240.style.display = "none";
}
if (hash==='#loc460_240') {
    window460_240.style.display = "block";
    mark460_240.style.display = "block";
} 

var window230_650 = document.getElementById('window_230_650');

var mark230_650 = document.getElementById("mark_230_650");

var close230_650 = document.getElementsByClassName("close_230_650")[0];

var loc230_650 = document.getElementById("loc_230_650");

mark230_650.onclick = function() {
  window230_650.style.display = "block";
}

close230_650.onclick = function() {
  window230_650.style.display = "none";
}
if (hash==='#loc230_650') {
    window230_650.style.display = "block";
    mark230_650.style.display = "block";
} 

var window804_162 = document.getElementById('window_804_162');

var mark804_162 = document.getElementById("mark_804_162");

var close804_162 = document.getElementsByClassName("close_804_162")[0];

var loc804_162 = document.getElementById("loc_804_162");

mark804_162.onclick = function() {
  window804_162.style.display = "block";
}

close804_162.onclick = function() {
  window804_162.style.display = "none";
}
if (hash==='#loc804_162') {
    window804_162.style.display = "block";
    mark804_162.style.display = "block";
} 

//Bankomat
var windowBank = document.getElementById('bank');

var butBank = document.getElementById("but_bank");

var closeBank = document.getElementsByClassName("close_bank")[0];

var locBank = document.getElementById("loc_bank");

butBank.onclick = function() {
  windowBank.style.display = "block";
}

closeBank.onclick = function() {
  windowBank.style.display = "none";
  locBank.style.display = "none";
}
if (hash==='#bank') {
    windowBank.style.display = "block";
    locBank.style.display = "block";
} 

//Input

var windowInput = document.getElementById('input');

var butInput = document.getElementById("but_input");

var closeInput = document.getElementsByClassName("close_input")[0];

butInput.onclick = function() {
  windowInput.style.display = "block";
}

closeInput.onclick = function() {
  windowInput.style.display = "none";
}

//Cinetic

var windowCin = document.getElementById('cin');

var butCin = document.getElementById("but_cin");

var closeCin = document.getElementsByClassName("close_cin")[0];

butCin.onclick = function() {
  windowCin.style.display = "block";
}

closeCin.onclick = function() {
  windowCin.style.display = "none";
}

//126
var window126 = document.getElementById('k126');

var but126 = document.getElementById("but_126");

var close126 = document.getElementsByClassName("close_126")[0];

but126.onclick = function() {
  window126.style.display = "block";
}

close126.onclick = function() {
  window126.style.display = "none";
}

//Processes

var windowPr = document.getElementById('pr');

var butPr = document.getElementById("but_pr");

var closePr = document.getElementsByClassName("close_pr")[0];

var locPr = document.getElementById("loc_pr");

butPr.onclick = function() {
  windowPr.style.display = "block";
}

closePr.onclick = function() {
  windowPr.style.display = "none";
  locPr.style.display = "none";
}
if (hash==='#processes') {
    windowPr.style.display = "block";
    locPr.style.display = "block";
} 


//Pmend

var windowPmend = document.getElementById('pmend');

var butPmend = document.getElementById("but_pmend");

var closePmend = document.getElementsByClassName("close_pmend")[0];

butPmend.onclick = function() {
  windowPmend.style.display = "block";
}

closePmend.onclick = function() {
  windowPmend.style.display = "none";
}

//Medicine

var windowMed = document.getElementById('med');

var butMed = document.getElementById("but_med");

var closeMed = document.getElementsByClassName("close_med")[0];

butMed.onclick = function() {
  windowMed.style.display = "block";
}

closeMed.onclick = function() {
  windowMed.style.display = "none";
}

//TTOS

var windowTtos = document.getElementById('ttos');

var butTtos = document.getElementById("but_ttos");

var closeTtos = document.getElementsByClassName("close_ttos")[0];

butTtos.onclick = function() {
  windowTtos.style.display = "block";
}

closeTtos.onclick = function() {
  windowTtos.style.display = "none";
}

//LestGard

var windowLestGard = document.getElementById('lest_gard');

var butLestGard = document.getElementById("but_lest_gard");

var closeLestGard = document.getElementsByClassName("close_lest_gard")[0];

butLestGard.onclick = function() {
  windowLestGard.style.display = "block";
}

closeLestGard.onclick = function() {
  windowLestGard.style.display = "none";
}
