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

function setCookie(cname, cvalue, exyears) {
  let d = new Date();
  d.setTime(d.getTime() + (exyears * 365 * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


/*
//Converting cookie to users array
let users2 = [];

//Slices off the expiry date, leaving only the array contents
var cookieToUsersAsStrings = getCookie("usersArray").slice(0, -37).split("[!]");

for(let i=0; i<cookieToUsersAsStrings.length; i++){
    let properties = cookieToUsersAsStrings[i].split("[?]");
    users2[i] = {name: unescape(properties[0]), firstName: unescape(properties[1]), lastName: unescape(properties[2]), password: unescape(properties[3])};
}
*/