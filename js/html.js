var name = Cookies.get("username")
var email = Cookies.get("useremail")

var nameElements = document.querySelectorAll(".name");
for(var i = 0; i < nameElements.length; i++){
    nameElements[i].innerHTML = name;
}