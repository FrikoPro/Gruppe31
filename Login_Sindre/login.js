let users = [
    {name: "Sindre", password: "Password123"},
    {name: "Bengt", password: "h4x0r1337"},
    {name: "test", password: "test1234"}
];

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
    
    //Here we check if the password is the same in both input fields, that both username and password are within the character limit, and that the username is not already in use
    if(registerPasswordInputElement.value === confirmPasswordInputElement.value 
       && registerPasswordInputElement.value.length >= 6 
       && registerPasswordInputElement.value.length <= 18 
       && registerUsernameInputElement.value.length <= 20
       && !isUserTaken){
        users[users.length] = {name: registerUsernameInputElement.value, password: registerPasswordInputElement.value}
        
        registerUsernameInputElement.value = "User created"
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





