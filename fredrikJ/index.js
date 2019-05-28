// medlemsikonene
var users = document.getElementsByClassName("users");

// merkelappen er en type arbeidsoppgave. Denne kan
// dra andre brukere over.
var merkelapp = document.getElementById("merkelapp");
merkelapp.setAttribute("draggable", true);

// setter på attributes på alle medlemsikonene
for(var i=0; i<users.length; i++) {
    users[i].setAttribute("draggable", true);
}

// Medlemmsikonens tekst 
var textUser = document.getElementsByClassName("textUser");


merkelapp.addEventListener("dragover", e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
});

// lager en tom div som settes inn i merkelappen
// her blir meldemmene droppet inni
var mdlmFelt = document.createElement("div");
// hindre at flere div'er blir laget under eventet
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


// setter id på meldemsikonene
for(var i =0; i <users.length; i++){
    users[i].addEventListener("dragstart", e => {
    console.log("dragstart", e);
    id = e.target.id;
});

}

