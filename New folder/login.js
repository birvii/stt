function validate()
{
    var username=document.getElementById("username").Value;
    var password=document.getElementById("password").Value;
    if(username=="admin" && password=="admin")
    {
        alert( "login successful");
        return false;

    }
    else{
        alert( "login fail");
    }
}