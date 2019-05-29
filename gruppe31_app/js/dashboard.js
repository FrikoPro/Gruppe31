// dashboard.js
// Javascript for the dashboard

// users array
var users = document.getElementsByClassName("users");

// grabbing all the available cards
var cards = document.getElementsByClassName("card");

// makes the elements draggable
for (var i=0; i<users.length; i++) {
    users[i].setAttribute("draggable", true);
}

// creates a list of the users id.
var cardList = [];

// pushing userId into userList

// references to the ID of card and user
var cardId;
var userId;


// adding eventListeners to cards
for (var i=0; i<cards.length; i++) {
    cards[i].addEventListener("dragover", e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        cardId = e.target.id;
    });
    cards[i].addEventListener("drop", e => {
        console.log("DROP", e);
        if (!cardList.includes(userId)) {
            cardList.push(userId);
            var user = document.getElementById(userId);
            var card = document.getElementById(cardId);
            var cln = user.cloneNode(true);
            card.appendChild(cln);
        }
    });
}

// putting id's on the users
for(var i =0; i<users.length; i++){
    users[i].addEventListener("dragstart", e => {
        console.log("dragstart", e);
        userId = e.target.id;
    });
}