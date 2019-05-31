// dashboard.js
// Javascript for the dashboard


// users array of the user icon in the top right corner
var users = document.getElementsByClassName("users");

// grabbing all the available project cards
var cards = document.getElementsByClassName("card");

// The div elements where the project can be placed
var completedProject = document.getElementById("divCompletedProjects");
var ongoingProject = document.getElementById("divOngoingProjects");

// makes the elements draggable
for (var i=0; i<users.length; i++) {
    users[i].setAttribute("draggable", true);
}

//--* GLOBAL variables *--

// references to the ID of card and user
var cardId;
var userId;

// completedProject ID
var completedProjectId;

// ongoingProject ID
var ongoingProjectId;


// putting id's on the users
for(var i =0; i<users.length; i++){
    users[i].addEventListener("dragstart", e => {
        console.log("dragstart", e);
        userId = e.target.id;
    });
}


let newProjectBtn = document.getElementById("btnCreateCard");
let ongoingProjects = document.getElementById("divOngoingProjects");

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
    
    
    createArticle.style.width = "278px";
    createArticle.style.float = "left";
    
    createArticle.className = "cm-card cm-shadow-wb";
    createDiv.className = "text";
    createBtn.className = "cm-button";
    
    createArticle.id = project.name;
    
    createH3.innerText = project.name;
    createP.innerText = project.info;
    createLink.innerText = "Enter";
    
    ongoingProjects.appendChild(createArticle);
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
        cardId = e.target.id
    });
}

// Event listeners for the projectStatus div

completedProject.addEventListener("dragover", e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    completedProjectId = e.target.id;
});

completedProject.addEventListener("drop", e => {
    let project = document.getElementById(cardId);
    let completedProject = document.getElementById(completedProjectId);
    completedProject.appendChild(project);
    
});

ongoingProject.addEventListener("dragover", e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    ongoingProjectId = e.target.id;
});

ongoingProject.addEventListener("drop", e=> {
    let project = document.getElementById(cardId);
    let ongoingProject = document.getElementById(ongoingProjectId);
    ongoingProject.appendChild(project);
});