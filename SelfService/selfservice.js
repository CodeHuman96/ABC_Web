function cheque()
{
	window.location.href="chequebook.html"
}
function card()
{
	window.location.href="lostcard.html"
}
function query()
{
	window.location.href="query.html"
}
function success()
{
window.alert("Request added Successfully");
}
function back()
{
window.history.back();
}
function display() {
    var x0=document.getElementById(0);
    var x1=document.getElementById(1);
    var x2=document.getElementById(2);
    var x3=document.getElementbyId(3);
    var y = document.getElementById("elementid").selectedIndex;
    var x = document.getElementById(y);
    x0.style.display = "none"
    x1.style.display = "none"
    x2.style.display = "none"
    x3.style.display = "none"	
    x.style.display = "table";
}

$(function() {
            $( "#datepicker-1" ).datepicker({maxDate: new Date(),dateFormat: 'dd-mm-yy'});
});
    

