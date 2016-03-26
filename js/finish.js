var name = Cookies.get("username")
var email = Cookies.get("useremail")

var nameElements = document.querySelectorAll(".name");
for(var i = 0; i < nameElements.length; i++){
    nameElements[i].innerHTML = name.toUpperCase();
}

var emailElements = document.querySelectorAll(".email");
for(var i = 0; i < emailElements.length; i++){
    emailElements[i].innerHTML = "<a href='mailto:"+email+"'>"+email+"</a>"
}