function validateEmail(x) {
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Please enter a valid email address!");
        return false;
    }
}

function submit(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    console.log(name, email)
    
    if(name == ""){
        alert("You must enter a name!")
        return;
    }
    
    if(validateEmail(email) != false){
        Cookies.set("username", name)
        Cookies.set("useremail", email);
        
        document.location = "html.html"
    }
}