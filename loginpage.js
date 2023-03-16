var userId="nani@gmail.com"
var pass="147545" 

function logintowebpage()
{
    var userGivenID=document.getElementById("usid").value
    var userGivenPass=document.getElementById("pass").value
    if(userId==userGivenID && pass==userGivenPass)
    {
        var fom=document.forms
        fom[0].action="./home.html"
        fom[0].elements[2].type="submit"
    }
    else if(userId==userGivenID && pass!=userGivenPass)
    {
        document.getElementById("result").innerHTML="wrong password"
        document.getElementById("passdiv").style.borderColor="red"
        document.getElementById("emaildiv").style.borderColor="royalblue"
        document.body.style.backgroundImage="linear-gradient(75deg,rgb(225, 0, 162),red)"
    }
    else if(userId!=userGivenID && pass==userGivenPass)
    {
        document.getElementById("result").innerHTML="wrong userID"
        document.getElementById("passdiv").style.borderColor="royalblue"
        document.getElementById("emaildiv").style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(75deg,red,purple)"
    }
    else
    {
        document.getElementById("result").innerHTML="wrong userID and password"
        document.getElementById("emaildiv").style.borderColor="red"
        document.getElementById("passdiv").style.borderColor="red"
        document.body.style.backgroundColor="red"
        document.body.style.backgroundImage="none"
    }
}
function passvis()
{
    document.getElementById("pass").removeAttribute("type")
    document.getElementById("visible").setAttribute("src","./open.jpg")
    document.getElementById("visible").style.transform="rotate Y(360deg)"
    document.getElementById("visible").style.transition="transform 0.3s"
}
function passhide()
{
    document.getElementById("pass").setAttribute("type","password")
    document.getElementById("visible").setAttribute("src","./assets/images/closedeye.jpg")
    document.getElementById("visible").style.transform="rotate Y(360deg)"
    document.getElementById("visible").style.transition="transform 0.3s"
}