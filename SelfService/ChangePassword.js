function chan() 
{
	var oldpass=document.getElementById("oldpassword").value;
	var newpass=document.getElementById("newpassword").value;
	var renewpass=document.getElementById("renewpassword").value;
	if(oldpass==="password")
	{
		if(renewpass===newpass && newpass!=="")
			window.alert("password changed Successfully");
		else
			window.alert("new password and re-type new password should be same and not empty");
	}
	else
	{
		window.alert("Enter correct password");
	}
	
}
function res()
{
	document.getElementById("myForm").reset();
}
function back()
{
	window.location.href="ServiceMenu.html"
}