if(getCookie("usersArray") == ""){
    var users = [
        {name: "Sindre", firstName: "Sindre", lastName: "Fromreide Bore", password: "Password123"},
        {name: "Bengt", firstName: "Bengt", lastName: "Bengen", password: "h4x0r1337"},
        {name: "test", firstName: "test", lastName: "test", password: "test1234"}
    ];
} else{
    
    var users = [];
    
    let cookieToUsersAsStrings = getCookie("usersArray").slice(0, -37).split("[!]");
    
    for(let i=0; i<cookieToUsersAsStrings.length; i++){
    let properties = cookieToUsersAsStrings[i].split("[?]");
    users[i] = {name: properties[0], firstName: properties[1], lastName: properties[2], password: properties[3]};
}

    
}
//DOM-element variables
let usernameInputElement = document.getElementById("usernameInput");
let passwordInputElement = document.getElementById("passwordInput");
let loginBtnElement = document.getElementById("loginBtn");
let registerUsernameInputElement = document.getElementById("registerUsernameInput");
let registerPasswordInputElement = document.getElementById("registerPasswordInput");
let confirmPasswordInputElement = document.getElementById("confirmPasswordInput");
let registerBtnElement = document.getElementById("registerBtn");
let loginToRegisterElement = document.getElementById("loginToRegister");
let registerToLoginElement = document.getElementById("registerToLogin");
let loginInterfaceElement = document.getElementById("loginInterface");
let registerInterfaceElement = document.getElementById("registerInterface");
let registerFirstNameInputElement = document.getElementById("registerFirstNameInput");
let registerLastNameInputElement = document.getElementById("registerLastNameInput");


//Checks the value of the login inputs against the objects in the users array
loginBtnElement.addEventListener("click", function(){
    
    //Checks if the combination of username and password inputs are found in any of the objects in the users array
    let credentialCheck = users.find(o => o.name === usernameInputElement.value && o.password === passwordInputElement.value);
    
    
    
    if(credentialCheck){
        usernameInputElement.value = "Success";
        passwordInputElement.value = "";
    } else {
        usernameInputElement.value = "Try again";
        passwordInputElement.value = "";
    }
    
}) 

//Register a new user
registerBtnElement.addEventListener("click", function(){
    
    //Compares the username input to usernames that are already in the users array
    let isUserTaken = users.find(o => o.name === registerUsernameInputElement.value);
    
    //Here we check if the password is the same in both input fields, that both username and password are within the character limit, and that the username is not already in use. The name inputs can't be empty.
    if(registerPasswordInputElement.value === confirmPasswordInputElement.value 
       && registerPasswordInputElement.value.length >= 6 
       && registerPasswordInputElement.value.length <= 18 
       && registerUsernameInputElement.value.length <= 20
       && registerFirstNameInputElement.value !== ""
       && registerLastNameInputElement.value !== ""
       && !isUserTaken){
        users[users.length] = 
            {name: registerUsernameInputElement.value, 
             firstName: registerFirstNameInputElement.value,
             lastName: registerLastNameInputElement.value,
             password: registerPasswordInputElement.value}
        
        registerUsernameInputElement.value = "User created";
        convertUsersToCookie();
    } else{
        registerUsernameInputElement.value = "An error occured";
    }
})

//Buttons to alternate between log in and registration mode
loginToRegisterElement.addEventListener("click", function(){
    
    loginInterfaceElement.style.display = "none";
    registerInterfaceElement.style.display = "block";
})

registerToLoginElement.addEventListener("click", function(){
    
    loginInterfaceElement.style.display = "block";
    registerInterfaceElement.style.display = "none";
})


//Cookies
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//Converting users array to cookie
function convertUsersToCookie(){
    let userCookie;
    let usersIndexesAsString = [];

    for(let i=0; i<users.length; i++){
        usersIndexesAsString[i] = users[i].name + "[?]" + users[i].firstName + "[?]" + users[i].lastName + "[?]" + users[i].password
    };

    let usersString = usersIndexesAsString.join("[!]");
    let newDate = new Date(9999, 12);
    let d = newDate.toUTCString();

    document.cookie = "usersArray=" + usersString + "expires=" + d;
}
convertUsersToCookie();

//Converting cookie to users array
let users2 = [];
//Slices off the expiry date, leaving only the array contents
let cookieToUsersAsStrings = getCookie("usersArray").slice(0, -37).split("[!]");

for(let i=0; i<cookieToUsersAsStrings.length; i++){
    let properties = cookieToUsersAsStrings[i].split("[?]");
    users2[i] = {name: properties[0], firstName: properties[1], lastName: properties[2], password: properties[3]};
}
