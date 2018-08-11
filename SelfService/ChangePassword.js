function chan() 
{
	var oldpass=document.getElementById("oldpassword").value;
	var newpass=document.getElementById("newpassword").value;
	var repass=document.getElementById("renewpassword").value;
	if(oldpass.equals("pass"))
	window.alert("Enter correct username and password");
}
function res()
{
	document.getElementById("container").reset();
}
function back()
{
	window.location.href="ServiceMenu.html"
}