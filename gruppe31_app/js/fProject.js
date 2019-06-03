// Code for adding users to cards

var users = document.getElementsByClassName("users");

var h3tags = document.getElementsByClassName("textUser");

var cardId = document.getElementById("editCardWindow");

var userList = [
    {firstName: "Fredrik", lastName: "Jansen", elementId: ""}, 
    {firstName: "Fredrik", lastName: "Holanger", elementId: ""}, 
    {firstName: "Benjamin", lastName: "Opsal", elementId: ""} 
];


for (var i=0; i<users.length; i++) {
    userList[i].elementId = "user" + i;
    h3tags[i].innerText = userList[i].firstName.charAt(0) + userList[i].lastName.charAt(0);
    users[i].addEventListener("click", e=> {
        cardId.appendChild(document.getElementById(e.currentTarget.id));
    });
}








