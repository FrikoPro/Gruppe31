var users = document.getElementsByClassName("users");

var merkelapp = document.getElementById("merkelapp");
merkelapp.setAttribute("draggable", true);

for(var i=0; i<users.length; i++) {
    users[i].setAttribute("draggable", true);
}

var textUser = document.getElementsByClassName("textUser");


merkelapp.addEventListener("dragover", e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
});


var mdlmFelt = document.createElement("div");
var notCreatedDiv = true;

merkelapp.addEventListener("drop", e => {
    console.log("DROP", e);
    if (notCreatedDiv) {
        notCreatedDiv = false;
        mdlmFelt.setAttribute("id", "mdlmFelt");
        merkelapp.appendChild(mdlmFelt);
        console.log(mdlmFelt);
        var mdlm = document.getElementById(id);
        mdlmFelt.appendChild(mdlm);
        mdlm.style.float = "right";
        mdlm.style.margin = "2px 2px";
        mdlm.style.height = "20px";
        mdlm.style.width = "20px";
        mdlm.childNodes[0].style.fontSize = "10px";
    } else {
        var mdlm = document.getElementById(id);
        mdlmFelt.appendChild(mdlm);
        mdlm.style.float = "right";
        mdlm.style.margin = "2px 2px";
        mdlm.style.height = "20px";
        mdlm.style.width = "20px";
        mdlm.childNodes[0].style.fontSize = "10px";
    }
    
    
});

users[0].addEventListener("dragstart", e => {
    console.log("dragstart", e);
    id = e.target.id;
});

users[1].addEventListener("dragstart", e => {
    console.log("dragstart", e);
    id = e.target.id;
});

users[2].addEventListener("dragstart", e => {
    console.log("dragstart", e);
    id = e.target.id;
});

