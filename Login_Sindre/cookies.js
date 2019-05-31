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
    users2[i] = {name: unescape(properties[0]), firstName: unescape(properties[1]), lastName: unescape(properties[2]), password: unescape(properties[3])};
}
