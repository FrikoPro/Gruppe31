// darkmode.js

// Darkmode Dashboard
const body = document.getElementById("body");
const darkmodeIcon = document.getElementById("dark-mode-icon");
const cardsClass = document.getElementsByClassName("card-project");
const columnHeaderClass = document.getElementsByClassName("column-header");
const textUserClass = document.getElementsByClassName("textUser");
const dashboardBody = document.getElementById("body-dashboard");

function styleClassBackgroundColor(htmlClass, color){
    for(let i=0;i<htmlClass.length;i++){
        htmlClass[i].style.backgroundColor = color;
    }
}

function styleClassTextColor(elementClass, color){
    for(let i=0;i<elementClass.length;i++){
        elementClass[i].style.color = color;
    }
}

//Creates a darkmode cookie if there is none
if (getCookie("darkmode") == ""){
    setCookie("darkmode", "0", 99);
}
//If the cookie fails darkmode is saved to localStorage instead
if (!getCookie("darkmode")){
    localStorage.setItem("darkmode", "1");
}

if (getCookie("darkmode")){
    var darkmode = getCookie("darkmode");
} else {
    var darkmode = localStorage.getItem("darkmode");
}

//Changes the site to darkmode upon loading if the darkmode cookie is "1"
if(darkmode == "1") {
        
    try{
        body.style.backgroundColor = "#444444";
        body.style.color = "#fff";
    } catch(err){} finally{
        darkmodeIcon.style.color = "#ffffff";
        styleClassBackgroundColor(cardsClass, "#3a3a3a");
        styleClassTextColor(textUserClass, "#fff");

        if(getCookie("darkmode")){
            setCookie("darkmode", "1", 99);
            darkmode = getCookie("darkmode");
        } else {
            localStorage.setItem("darkmode", "1");
            darkmode = localStorage.getItem("darkmode");
        }
        try{
            dashboardBody.style.backgroundColor = "#444444";
            dashboardBody.style.color = "#fff";
            dashboardBody.style.backgroundImage = "url()";
        } catch(err){};
    }
    
} else {
    try{
        body.style.backgroundColor = "#ffffff";
        body.style.color = "#444444";
    } catch(err){} finally{
        darkmodeIcon.style.color = "#000000";
        styleClassTextColor(textUserClass, "#333333")

        if(getCookie("darkmode")){
            setCookie("darkmode", "0", 99);
            darkmode = getCookie("darkmode");
        } else {
            localStorage.setItem("darkmode", "0")
            darkmode = localStorage.getItem("darkmode");
        }
        
    }
}

//Makes clicking on the darkmode icon switch the site between darkmode on/off, uses try/catch to circumvent errors caused by using IDs from different HTML pages (body and dashboardBody)
darkmodeIcon.addEventListener("click", () =>{
    if(darkmode == "0") {
        try{
            body.style.backgroundColor = "#444444";
            body.style.color = "#fff";
        } catch(err){}
        darkmodeIcon.style.color = "#ffffff";
        styleClassBackgroundColor(cardsClass, "#3a3a3a");
        styleClassBackgroundColor(columnHeaderClass, "#3a3a3a");
        styleClassTextColor(textUserClass, "#fff");
        
        if(getCookie("darkmode")){
            setCookie("darkmode", "1", 99);
            darkmode = getCookie("darkmode");
        } else {
            localStorage.setItem("darkmode", "1");
            darkmode = localStorage.getItem("darkmode");
        }
        try{
            dashboardBody.style.backgroundImage = "url()";
        } catch(err){};
        
    } else {
        try{
            body.style.backgroundColor = "#ffffff";
            body.style.color = "#444444";
        } catch(err){};
        darkmodeIcon.style.color = "#000000";
        styleClassBackgroundColor(cardsClass, "#fff");
        styleClassBackgroundColor(columnHeaderClass, "#fff");
        styleClassTextColor(textUserClass, "#333333");
        
        if(getCookie("darkmode")){
            setCookie("darkmode", "0", 99);
            darkmode = getCookie("darkmode");
        } else {
            localStorage.setItem("darkmode", "0");
            darkmode = localStorage.getItem("darkmode");
        }
        try{
            dashboardBody.style.backgroundImage = "url(\"../img/newBackground.svg\")";
        } catch(err){};
    }
})
