// dashboard.js
// Javascript for the dashboard

// users array of the user icon in the top right corner
var users = document.getElementsByClassName("users");

// grabbing all the available project cards
var cards = document.getElementsByClassName("card");

// main element where the new projects will be appended.
var main = document.getElementById("main");

// where the projects will be appended when they are dragged over the button history.
var historyProject = document.getElementById("historyProject");


var btnHistory = document.getElementById("btnHistory");
var sibBtnHistory = document.getElementById("sibBtnHistory");
var btnHistoryIcon = document.getElementById("btnHistoryIcon");
var containerHistory = document.getElementById("containerHistory");

var cardDisposal = document.getElementById("cardDisposal");

// makes the elements draggable
for (var i=0; i<users.length; i++) {
    users[i].setAttribute("draggable", true);
}

//--* GLOBAL variables *--

// references to the ID of card and user
var cardId;
var userId;

// btnHistory ID
var btnHistoryId;

// putting id's on the users
for(var i =0; i<users.length; i++){
    users[i].addEventListener("dragstart", e => {
        console.log("dragstart", e);
        userId = e.target.id;
    });
}


let newProjectBtn = document.getElementById("btnCreateCard");

newProjectBtn.addEventListener("click", AddProject);

var projects =[];

function AddProject(){
    let newProjectObj = {
        name: prompt("name"),
        info: prompt("info")
    }
    projects.push(newProjectObj);
    
    RenderProject(projects[projects.length-1]);
}

// function thats runs when creating project from the "create" button
function RenderProject(project){
    var createArticle = document.createElement("ARTICLE");
    var createDiv = document.createElement("DIV");
    var createH3 = document.createElement("H3");
    var createP = document.createElement("P");
    var createBtn = document.createElement("button");
    var createLink = document.createElement("a");
    
    createArticle.className = "cm-card cm-shadow-wb";
    createDiv.className = "cm-text";
    createBtn.className = "cm-button";
    
    createArticle.id = project.name;
    
    createH3.innerText = project.name;
    createP.innerText = project.info;
    createLink.innerText = "Enter";
    
    main.appendChild(createArticle);
    createArticle.appendChild(createDiv);
    createDiv.appendChild(createH3);
    createDiv.appendChild(createP);
    createDiv.appendChild(createBtn);
    createBtn.appendChild(createLink); 
    
    var cardList = [];
    
    createArticle.addEventListener("drop", e => {
        console.log("DROP", e);
        if (!cardList.includes(userId)) {
            cardList.push(userId);
            let user = document.getElementById(userId);
            let card = document.getElementById(cardId);
            let cln = user.cloneNode(true);
            card.appendChild(cln);
        }
        else {alert("already in list")};
    });
    
    createArticle.addEventListener("dragover", e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        cardId = e.target.id;
    });
    
    createLink.setAttribute("href", "project.html");
    
    createArticle.setAttribute("draggable", true);
    
    createArticle.addEventListener("dragstart", e => {
        console.log("dragstart", e);
        e.dataTransfer.setData("text/plain", e.target.id);
        console.log(cardId);
    });
}

// Adding projects to history
btnHistory.addEventListener("dragover", e=> {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    console.log("dragover", e);
});

sibBtnHistory.addEventListener("drop", e=> {
    e.preventDefault();
    var projectData = e.dataTransfer.getData("text/plain");
    var card = document.getElementById(projectData);
    console.log(card);
    historyProject.appendChild(card);
});

// remove projects
cardDisposal.addEventListener("dragover", e=> {
    e.preventDefault();
})

cardDisposal.addEventListener("drop", e=> {
    var projectId = e.dataTransfer.getData("text/plain");
    var card = document.getElementById(projectId);
    card.parentNode.removeChild(card);
})

