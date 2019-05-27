var users = document.getElementsByClassName("users");

var merkelapp = document.getElementById("merkelapp");

var id;


for(var i=0; i<users.length; i++) {
    users[i].setAttribute("draggable", true);
}


merkelapp.addEventListener("dragover", e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
});


merkelapp.addEventListener("drop", e => {
    console.log("DROP", e);
    if(id==="firstUser") {
        var user1 = document.getElementById(id);
        user1.style.left = "210px";
        user1.style.top = "290px";
    } else if (id==="secondUser") {
        var user2 = document.getElementById(id);
        user2.style.left = "180px";
        user2.style.top = "246px";
        user2.style.zIndex = "1";
    } else {
        var user3 = document.getElementById(id);
        user3.style.left = "150px";
        user3.style.top = "203px";
        user3.style.zIndex = "1";
    }
});

users[0].addEventListener("dragstart", e => {
    console.log("dragstart", e);
    id = e.target.id;
})

users[1].addEventListener("dragstart", e => {
    console.log("dragstart", e);
    id = e.target.id;
})

users[2].addEventListener("dragstart", e => {
    console.log("dragstart", e);
    id = e.target.id;
})

