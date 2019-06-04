// darkmode.js

// Darkmode Dashboard
const body = document.getElementById("body");
const darkmodeIcon = document.getElementById("dark-mode-icon");
const cardsClass = document.getElementsByClassName("card-project");

function styleCardsBackgroundColor(color){
    for(let i=0;i<cards.length;i++){
        cardsClass[i].style.backgroundColor = color;
    }
}

//Creates a darkmode cookie if there is none
if (getCookie("darkmode") == ""){
    setCookie("darkmode", "0", 99);
}
var darkmode = getCookie("darkmode");

//Changes the site to darkmode upon loading if the darkmode cookie is "1"
if(darkmode == "1") {
        body.style.backgroundColor = "#444444";
        body.style.color = "#fff";
        darkmodeIcon.style.color = "#ffffff";
        setCookie("darkmode", "1", 99);
        darkmode = getCookie("darkmode");
    } else {
        body.style.backgroundColor = "#ffffff";
        body.style.color = "#444444";
        darkmodeIcon.style.color = "#000000";
        setCookie("darkmode", "0", 99);
        darkmode = getCookie("darkmode");
    }

//Makes clicking on the darkmode icon switch the site between darkmode on/off
darkmodeIcon.addEventListener("click", () =>{
  if(darkmode == "0") {
        body.style.backgroundColor = "#444444";
        body.style.color = "#fff";
        darkmodeIcon.style.color = "#ffffff";
        setCookie("darkmode", "1", 99);
        darkmode = getCookie("darkmode");
        styleCardsBackgroundColor("#3a3a3a");
    } else {
        body.style.backgroundColor = "#ffffff";
        body.style.color = "#444444";
        darkmodeIcon.style.color = "#000000";
        setCookie("darkmode", "0", 99);
        darkmode = getCookie("darkmode");
        styleCardsBackgroundColor("#fff");
    }
})
