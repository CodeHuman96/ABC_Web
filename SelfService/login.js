function submit1()
{
	var uname=document.getElementById("username").value;
	var pass=document.getElementById("password").value;
	if(uname==="test" && pass==="password")
	window.location.href="customermenu.html"
	else
	window.alert("Enter correct username and password");	
}
